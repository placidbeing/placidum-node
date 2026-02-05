import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Radio } from 'lucide-react';
import { journalEntries, ContentBlock, JournalEntry } from '@/data/journalEntries';
import JournalMedia from '@/components/JournalMedia';
import ImageLightbox from '@/components/ImageLightbox';
import YearIndicator from '@/components/YearIndicator';

// Sort entries by date descending
const sortedJournalEntries = [...journalEntries].sort((a, b) => b.date.localeCompare(a.date));

// Check if entry contains audio
const hasAudio = (entry: JournalEntry): boolean => {
  if (entry.contentBlocks?.some(block => block.type === 'audio' && block.audioSrc)) {
    return true;
  }
  if (entry.media?.some(m => m.type === 'audio')) {
    return true;
  }
  return false;
};

const Notes = () => {
  const [showAudioOnly, setShowAudioOnly] = useState(false);
  
  const filteredEntries = showAudioOnly 
    ? sortedJournalEntries.filter(hasAudio)
    : sortedJournalEntries;
  // Format date from YYYY.MM.DD to Latin and year below
  const formatDate = (dateStr: string) => {
    const parts = dateStr.split('.');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    
    const monthNamesLatin = ['Januarii', 'Februarii', 'Martii', 'Aprilis', 'Maii', 'Junii',
                             'Julii', 'Augusti', 'Septembris', 'Octobris', 'Novembris', 'Decembris'];
    
    // Convert numbers to Roman numerals
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

    // Handle year-only dates (e.g., "2014")
    if (!month || !day) {
      return {
        latin: '',
        year: toRoman(parseInt(year)),
        numerical: year
      };
    }
    
    const monthIndex = parseInt(month) - 1;
    const dayNum = parseInt(day);
    
    return {
      latin: `Die ${toRoman(dayNum)}. ${monthNamesLatin[monthIndex]}`,
      year: toRoman(parseInt(year)),
      numerical: `${day}.${month}.${year}`
    };
  };

  // Render content with quotes in italics and markdown links
  const renderContent = (content: string) => {
    // First handle markdown links [text](url)
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    const segments: { text: string; isLink: boolean; url?: string }[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkPattern.exec(content)) !== null) {
      if (match.index > lastIndex) {
        segments.push({ text: content.slice(lastIndex, match.index), isLink: false });
      }
      segments.push({ text: match[1], isLink: true, url: match[2] });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < content.length) {
      segments.push({ text: content.slice(lastIndex), isLink: false });
    }

    // Now process each segment for quotes
    const renderSegment = (segment: { text: string; isLink: boolean; url?: string }, segmentIndex: number) => {
      if (segment.isLink && segment.url) {
        return (
          <Link key={segmentIndex} to={segment.url} className="text-accent hover:underline">
            {segment.text}
          </Link>
        );
      }

      // Split by quotes (both "..." and «...»)
      const quotePattern = /("([^"]+)"|«([^»]+)»)/g;
      const parts: { text: string; isQuote: boolean }[] = [];
      let lastIdx = 0;
      let quoteMatch;

      while ((quoteMatch = quotePattern.exec(segment.text)) !== null) {
        if (quoteMatch.index > lastIdx) {
          parts.push({ text: segment.text.slice(lastIdx, quoteMatch.index), isQuote: false });
        }
        parts.push({ text: quoteMatch[0], isQuote: true });
        lastIdx = quoteMatch.index + quoteMatch[0].length;
      }
      if (lastIdx < segment.text.length) {
        parts.push({ text: segment.text.slice(lastIdx), isQuote: false });
      }

      return parts.map((part, i) => 
        part.isQuote ? (
          <em key={`${segmentIndex}-${i}`} className="font-garamond">{part.text}</em>
        ) : (
          <span key={`${segmentIndex}-${i}`}>{part.text}</span>
        )
      );
    };

    return segments.map((segment, i) => renderSegment(segment, i));
  };

  // Refs for each entry to track scroll position
  const entryRefs = useRef<(HTMLElement | null)[]>([]);

  return (
    <div className="notes-section safe-area wrap py-20">
      {/* Year indicator */}
      <YearIndicator entries={sortedJournalEntries} entryRefs={entryRefs} />
      
      <header className="notes-header mb-16 text-left">
        <h1 className="font-cormorant text-4xl font-bold mb-6 codex-title" style={{ fontVariant: 'small-caps', letterSpacing: '0.1em' }}>
          Field Notes & Observations
        </h1>
        <div>
          <p className="font-cormorant text-lg leading-relaxed mb-6 max-w-2xl">
            Accounts of recent activity—emergent works, field notes, and subtle deviations within the Placidum continuum.
          </p>
          <div className="marginalia">
            Research Updates: <a 
              href="mailto:notes@placidum.com" 
              className="ink-underline"
            >
              notes@placidum.com
            </a>
          </div>
        </div>
        
        {/* Subtle filter toggle */}
        <div className="mt-8">
          <button
            onClick={() => setShowAudioOnly(!showAudioOnly)}
            className={`font-mono text-sm transition-opacity duration-300 ${
              showAudioOnly 
                ? 'text-accent opacity-100' 
                : 'text-muted-foreground opacity-60 hover:opacity-100'
            }`}
          >
            {showAudioOnly ? '✕ Show all entries' : <><Radio size={14} className="inline mr-1.5 -mt-0.5" /> Vestigia Sonora</>}
          </button>
        </div>
      </header>
      
      <div className="space-y-16">
        {filteredEntries.map((item, index) => (
          <article 
            key={index} 
            ref={(el) => { entryRefs.current[index] = el; }}
            className="note-entry relative py-8 text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <div className="font-mono text-sm leading-tight" style={{ letterSpacing: '0.05em', fontWeight: 300 }}>
                  {formatDate(item.date).latin && (
                    <div className="text-iron-oxide" style={{ opacity: 0.6 }}>
                      {formatDate(item.date).latin}
                    </div>
                  )}
                  <div className="text-iron-oxide" style={{ opacity: 0.5, fontSize: '0.85rem' }}>
                    {formatDate(item.date).year}
                  </div>
                  <div className="text-iron-oxide" style={{ opacity: 0.4, fontSize: '0.85rem' }}>
                    {formatDate(item.date).numerical}
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 space-y-4">
                {item.title && (
                  <h2 className="text-xl serif font-medium">
                    {item.title}
                  </h2>
                )}
                {item.content && (
                  <div className={`serif leading-relaxed text-[1.1875rem] whitespace-pre-line ${item.isFullyItalic ? 'font-garamond italic' : ''}`}>
                    {item.isFullyItalic ? item.content : renderContent(item.content)}
                  </div>
                )}
                {item.contentBlocks && item.contentBlocks.map((block: ContentBlock, blockIndex: number) => (
                  block.type === 'text' && block.text ? (
                    block.text.startsWith('http') ? (
                      <div key={blockIndex} className="my-4">
                        <a 
                          href={block.text} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                        >
                          {block.text}
                        </a>
                      </div>
                    ) : (
                      <div key={blockIndex} className={`serif leading-relaxed text-[1.1875rem] whitespace-pre-line ${item.isFullyItalic ? 'font-garamond italic' : ''}`}>
                        {item.isFullyItalic ? block.text : renderContent(block.text)}
                      </div>
                    )
                  ) : block.type === 'gallery' && block.images ? (
                    <div key={blockIndex} className="flex flex-wrap gap-3 my-5">
                      {block.images.map((src: string, imgIndex: number) => (
                        <div 
                          key={imgIndex} 
                          className={`flex-shrink-0 overflow-hidden ${
                            block.aspectRatio === '9:16' ? 'h-32 aspect-[9/16]' : 'w-32 h-32'
                          }`}
                        >
                          <ImageLightbox 
                            src={src} 
                            alt={`Gallery image ${imgIndex + 1}`}
                            className="w-full h-full object-cover grayscale-[30%] opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  ) : block.type === 'vertical-gallery' && block.images ? (
                    <figure key={blockIndex} className="flex flex-col gap-4 my-6 max-w-sm">
                      {block.images.map((src: string, imgIndex: number) => (
                        <div 
                          key={imgIndex} 
                          className={`w-full overflow-hidden ${block.aspectRatio === '16:9' ? 'aspect-video' : block.aspectRatio === '16:7' ? 'aspect-[16/7]' : block.aspectRatio === '16:6' ? 'aspect-[16/6]' : block.aspectRatio === '4:3' ? 'aspect-[4/3]' : block.aspectRatio === '1:1' ? 'aspect-square' : ''}`}
                        >
                          <ImageLightbox 
                            src={src} 
                            alt={block.caption || `Gallery image ${imgIndex + 1}`}
                            className={`w-full ${block.aspectRatio ? 'h-full object-cover' : 'h-auto object-contain'} grayscale-[30%] opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500`}
                          />
                        </div>
                      ))}
                      {block.caption && (
                        <figcaption className="text-sm text-muted-foreground font-mono italic opacity-70 whitespace-pre-line">
                          {block.captionLink ? (
                            <a href={block.captionLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                              {block.caption}
                            </a>
                          ) : (
                            block.caption
                          )}
                        </figcaption>
                      )}
                    </figure>
                  ) : block.type === 'audio' && block.audioSrc ? (
                    <div key={blockIndex} className="my-6 p-4 bg-muted border border-border">
                      <div className="flex items-center justify-between">
                        <button 
                          className="text-sm font-mono text-accent hover:underline"
                          onClick={() => {
                            const audio = document.getElementById(`audio-${index}-${blockIndex}`) as HTMLAudioElement;
                            if (audio) {
                              if (audio.paused) {
                                audio.play();
                              } else {
                                audio.pause();
                              }
                            }
                          }}
                        >
                          ▶ {block.audioTitle || 'Play'}
                        </button>
                        <a 
                          href={block.audioSrc}
                          download
                          className="text-sm font-mono text-accent hover:underline"
                        >
                          Download →
                        </a>
                      </div>
                      <div className="mt-2 w-full bg-border h-1">
                        <div className="bg-accent h-1 w-0"></div>
                      </div>
                      {block.audioSubtitle && (
                        <div className="mt-2 font-mono text-xs text-muted-foreground italic">{block.audioSubtitle}</div>
                      )}
                      <audio id={`audio-${index}-${blockIndex}`} src={block.audioSrc} preload="metadata" className="hidden" />
                    </div>
                  ) : null
                ))}
                {/* Render inline media between content sections */}
                {item.media && item.media.filter(m => m.position === 'inline').length > 0 && (
                  <div className="journal-media-inline">
                    {item.media.filter(m => m.position === 'inline').map((mediaItem, mediaIndex) => (
                      <JournalMedia key={mediaIndex} media={mediaItem} />
                    ))}
                  </div>
                )}
                {/* Render content after inline media */}
                {item.contentAfterMedia && (
                  <div className={`serif leading-relaxed text-[1.1875rem] whitespace-pre-line ${item.isFullyItalic ? 'font-garamond italic' : ''}`}>
                    {item.isFullyItalic ? item.contentAfterMedia : renderContent(item.contentAfterMedia)}
                  </div>
                )}
                {/* Render media after content - Sebald style (default position) */}
                {item.media && item.media.filter(m => m.position !== 'inline').length > 0 && (
                  <div className="journal-media-container mt-6 space-y-4">
                    {item.media.filter(m => m.position !== 'inline').map((mediaItem, mediaIndex) => (
                      <JournalMedia key={mediaIndex} media={mediaItem} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
        
    </div>
  );
};

export default Notes;
