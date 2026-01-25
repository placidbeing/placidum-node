import { useState, useEffect, useRef, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface YearIndicatorProps {
  entries: { date: string }[];
  entryRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

// Convert number to Roman numeral
const toRoman = (num: number): string => {
  const romanNumerals: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let result = '';
  for (const [value, numeral] of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
};

const YearIndicator = ({ entries, entryRefs }: YearIndicatorProps) => {
  const [currentYear, setCurrentYear] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Extract unique years from entries
  const availableYears = useMemo(() => {
    const years = new Set<string>();
    entries.forEach(entry => {
      const year = entry.date.split('.')[0];
      years.add(year);
    });
    return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a));
  }, [entries]);

  // Find first entry index for each year
  const yearToEntryIndex = useMemo(() => {
    const map: Record<string, number> = {};
    entries.forEach((entry, index) => {
      const year = entry.date.split('.')[0];
      if (!(year in map)) {
        map[year] = index;
      }
    });
    return map;
  }, [entries]);

  useEffect(() => {
    const handleScroll = () => {
      // Mark that user has scrolled
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
      }

      // Show indicator when scrolling
      if (hasScrolled || window.scrollY > 100) {
        setIsVisible(true);
        
        // Clear existing hide timeout
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
        }
        
        // Hide after 2 seconds of no scrolling (unless dropdown is open)
        if (!isDropdownOpen) {
          hideTimeoutRef.current = setTimeout(() => {
            setIsVisible(false);
          }, 2000);
        }
      }

      // Find which entry is currently in view
      const viewportMiddle = window.innerHeight / 3;
      
      for (let i = 0; i < entryRefs.current.length; i++) {
        const ref = entryRefs.current[i];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= viewportMiddle && rect.bottom >= 0) {
            const year = entries[i].date.split('.')[0];
            setCurrentYear(year);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [entries, entryRefs, hasScrolled, isDropdownOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const scrollToYear = (year: string) => {
    const entryIndex = yearToEntryIndex[year];
    if (entryIndex !== undefined && entryRefs.current[entryIndex]) {
      entryRefs.current[entryIndex]?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
    setIsDropdownOpen(false);
  };

  if (!currentYear) return null;

  return (
    <div 
      ref={dropdownRef}
      className={cn(
        "fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-opacity duration-500",
        isVisible || isDropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Year marker button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={cn(
          "font-mono text-xs tracking-widest text-muted-foreground/60 hover:text-muted-foreground",
          "transition-colors duration-300 cursor-pointer",
          "writing-mode-vertical",
          isDropdownOpen && "text-muted-foreground"
        )}
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        aria-label="Jump to year"
      >
        {toRoman(parseInt(currentYear))}
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div 
          className={cn(
            "absolute right-6 top-1/2 -translate-y-1/2",
            "bg-background/95 backdrop-blur-sm border border-border/50",
            "py-2 px-1 min-w-[4rem]",
            "animate-fade-in"
          )}
        >
          <div className="flex flex-col gap-1">
            {availableYears.map((year) => (
              <button
                key={year}
                onClick={() => scrollToYear(year)}
                className={cn(
                  "font-mono text-xs tracking-wider px-2 py-1",
                  "text-muted-foreground/70 hover:text-foreground",
                  "transition-colors duration-200 text-right",
                  year === currentYear && "text-iron-oxide"
                )}
              >
                {toRoman(parseInt(year))}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default YearIndicator;
