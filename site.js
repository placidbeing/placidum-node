/**
 * Placidum — site.js
 * Vanilla JS for index.html and corpus.html
 */
(function () {
  'use strict';

  function toRoman(num) {
    var pairs = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
    var r = '';
    for (var i = 0; i < pairs.length; i++) { while (num >= pairs[i][0]) { r += pairs[i][1]; num -= pairs[i][0]; } }
    return r;
  }

  // =============================================
  // 1. AUDIO PLAYER
  // =============================================
  var currentAudio = null;
  var allAudioBlocks = document.querySelectorAll('.audio-block');

  allAudioBlocks.forEach(function (block) {
    var audio = block.querySelector('audio');
    var playBtn = block.querySelector('.audio-play-btn');
    var progressBar = block.querySelector('.audio-progress-bar');
    if (!audio || !playBtn) return;

    playBtn.addEventListener('click', function () {
      if (audio.paused) {
        if (currentAudio && currentAudio !== audio) { currentAudio.pause(); updateBtn(currentAudio, false); }
        audio.play(); currentAudio = audio; updateBtn(audio, true);
      } else {
        audio.pause(); currentAudio = null; updateBtn(audio, false);
      }
    });

    audio.addEventListener('timeupdate', function () {
      if (audio.duration && progressBar) progressBar.style.width = (audio.currentTime / audio.duration * 100) + '%';
    });

    audio.addEventListener('ended', function () {
      updateBtn(audio, false); currentAudio = null;
      if (progressBar) progressBar.style.width = '0';
      var blocks = Array.from(document.querySelectorAll('.audio-block:not(.filtered-out-audio)'));
      // Filter to visible blocks
      blocks = blocks.filter(function(b) { var e = b.closest('.note-entry'); return !e || !e.classList.contains('filtered-out'); });
      var idx = blocks.indexOf(block);
      if (idx >= 0 && idx < blocks.length - 1) {
        var next = blocks[idx + 1], na = next.querySelector('audio');
        if (na) { na.play(); currentAudio = na; updateBtn(na, true); next.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      }
    });
  });

  function updateBtn(audio, playing) {
    var block = audio.closest('.audio-block');
    if (!block) return;
    var btn = block.querySelector('.audio-play-btn');
    if (!btn) return;
    var title = btn.getAttribute('data-title') || 'Play';
    btn.textContent = (playing ? '⏸ ' : '▶ ') + title;
  }

  // =============================================
  // 2. IMAGE LIGHTBOX
  // =============================================
  var overlay = document.getElementById('lightbox-overlay');
  var lbImg = document.getElementById('lightbox-img');
  if (overlay && lbImg) {
    document.querySelectorAll('.lightbox-trigger').forEach(function (img) {
      img.addEventListener('click', function () {
        lbImg.src = img.getAttribute('data-full') || img.src;
        lbImg.alt = img.alt || '';
        overlay.classList.add('active');
      });
    });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.classList.contains('lightbox-close')) { overlay.classList.remove('active'); lbImg.src = ''; }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) { overlay.classList.remove('active'); lbImg.src = ''; }
    });
  }

  // =============================================
  // 2b. IMAGE PREFETCH
  // =============================================
  // Native loading="lazy" only fetches images once they are nearly visible,
  // so fast scrolling shows blanks. Warm the cache a few screens ahead of
  // the scroll position instead: when an image comes within rootMargin,
  // fetch its file via an off-DOM Image. The <img> keeps its real src, so
  // if this never runs, native lazy loading behaves as before.
  if ('IntersectionObserver' in window) {
    var prefetchIO = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var img = entry.target;
        obs.unobserve(img);
        if (img.complete) return;
        new Image().src = img.currentSrc || img.src;
      });
    }, { rootMargin: '2400px 0px' });
    document.querySelectorAll('img[loading="lazy"]').forEach(function (img) { prefetchIO.observe(img); });
  }

  // =============================================
  // 3. YEAR INDICATOR
  // =============================================
  var yi = document.getElementById('year-indicator');
  var yBtn = document.getElementById('year-indicator-btn');
  var yDrop = document.getElementById('year-dropdown');
  if (yi && yBtn) {
    var entries = document.querySelectorAll('.note-entry[data-year]');
    var hideT = null, scrolled = false;
    window.addEventListener('scroll', function () {
      if (!scrolled && window.scrollY > 100) scrolled = true;
      if (scrolled || window.scrollY > 100) {
        yi.classList.add('visible');
        if (hideT) clearTimeout(hideT);
        if (!yDrop || !yDrop.classList.contains('open')) { hideT = setTimeout(function () { yi.classList.remove('visible'); }, 2000); }
      }
      var vt = window.innerHeight / 3;
      for (var i = 0; i < entries.length; i++) {
        var r = entries[i].getBoundingClientRect();
        if (r.top <= vt && r.bottom >= 0) { yBtn.textContent = toRoman(parseInt(entries[i].getAttribute('data-year'))); break; }
      }
    }, { passive: true });

    if (yDrop) {
      yBtn.addEventListener('click', function () {
        yDrop.classList.toggle('open');
        if (yDrop.classList.contains('open')) { yi.classList.add('visible'); if (hideT) clearTimeout(hideT); }
      });
      yDrop.querySelectorAll('button').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var t = document.querySelector('.note-entry[data-year="' + btn.getAttribute('data-year') + '"]');
          if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
          yDrop.classList.remove('open');
        });
      });
      document.addEventListener('mousedown', function (e) {
        if (yDrop.classList.contains('open') && !yi.contains(e.target)) yDrop.classList.remove('open');
      });
    }
  }

  // =============================================
  // 4. AUDIO FILTER
  // =============================================
  var fBtn = document.getElementById('audio-filter-btn');
  if (fBtn) {
    var filtered = false;
    fBtn.addEventListener('click', function () {
      filtered = !filtered;
      document.querySelectorAll('.note-entry').forEach(function (e) {
        if (filtered && !e.hasAttribute('data-has-audio')) e.classList.add('filtered-out');
        else e.classList.remove('filtered-out');
      });
      if (filtered) {
        fBtn.innerHTML = '✕ Show all entries';
        fBtn.classList.remove('inactive'); fBtn.classList.add('active');
      } else {
        fBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:-2px;margin-right:6px"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg> Vestigia Sonora';
        fBtn.classList.remove('active'); fBtn.classList.add('inactive');
      }
    });
  }

  // =============================================
  // 5. CORPUS VIEW TOGGLE
  // =============================================
  var gv = document.getElementById('gallery-view');
  var lv = document.getElementById('list-view');
  var gBtn = document.getElementById('btn-gallery');
  var lBtn = document.getElementById('btn-list');
  if (gv && lv && gBtn && lBtn) {
    function showGallery() { gv.style.display = ''; lv.style.display = 'none'; gBtn.classList.add('active'); lBtn.classList.remove('active'); }
    function showList(id) { gv.style.display = 'none'; lv.style.display = ''; lBtn.classList.add('active'); gBtn.classList.remove('active'); if (id) setTimeout(function () { var el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 50); }
    gBtn.addEventListener('click', showGallery);
    lBtn.addEventListener('click', function () { showList(); });
    document.querySelectorAll('.corpus-gallery article[data-release-id]').forEach(function (t) {
      t.addEventListener('click', function () { showList(t.getAttribute('data-release-id')); });
    });
    var hash = window.location.hash.slice(1);
    if (hash && document.getElementById(hash)) { showList(hash); }
  }

  // =============================================
  // 6. BANDCAMP EMBED AUTO-RESIZE
  // =============================================
  // Bandcamp embeds post their content height via postMessage.
  // Listen for these messages and resize iframes to eliminate white space.
  var bcFrames = document.querySelectorAll('iframe[src*="bandcamp"]');
  if (bcFrames.length) {
    // Set black background on all BC iframes immediately
    bcFrames.forEach(function (f) { f.style.background = '#000'; });

    // Listen for postMessage from Bandcamp embeds
    window.addEventListener('message', function (e) {
      if (!e.data || typeof e.data !== 'string') return;
      try {
        var msg = JSON.parse(e.data);
        // Bandcamp sends messages with height info
        if (msg.height && msg.height > 0) {
          bcFrames.forEach(function (f) {
            // Match the iframe to the message source
            if (f.contentWindow === e.source) {
              f.style.height = msg.height + 'px';
            }
          });
        }
      } catch (ex) {
        // Not JSON or not from Bandcamp — ignore
      }
    });

    // Fallback: after load, if iframe is taller than content, 
    // progressively shrink to find the right fit
    bcFrames.forEach(function (f) {
      f.addEventListener('load', function () {
        // Give Bandcamp JS time to render and send postMessage
        // If no message received after 3s, try a reasonable default
        var resized = false;
        var origH = parseInt(f.style.height);
        
        var checkResize = setTimeout(function () {
          if (!resized && origH > 200) {
            // No postMessage received — keep original height
            // The .bc-wrap overflow:hidden handles the rest
          }
        }, 3000);

        // Mark as resized if we get a postMessage
        window.addEventListener('message', function handler(ev) {
          if (ev.source === f.contentWindow) {
            resized = true;
            clearTimeout(checkResize);
            window.removeEventListener('message', handler);
          }
        });
      });
    });
  }

  // =============================================
  // 7. MARE LATENS — FRAGMENT LAYER
  // =============================================
  // Decorative traces (assets/mare-latens/) in the dead space of the page.
  // A page opts in with <div id="mare" aria-hidden="true"> as the first child
  // of .min-screen. Desktop: the margins beside entries (or evenly spaced
  // slots on pages without entries). Phones: one wide trace in the empty row
  // to the right of each date block (Notes) or short heading (other pages).
  // Placement is deterministic — one fixed shuffled deck, dealt from the
  // OLDEST entry upward, so an existing entry keeps its fragments when a newer
  // one is added at the top. Images are fetched only near the viewport.
  // Nothing here is required by the page: without JS the layer does not exist.
  var mare = document.getElementById('mare');
  if (mare && 'IntersectionObserver' in window && 'fetch' in window) {
    var ML_BASE = 'assets/mare-latens/';
    var mlDesktopMQ = window.matchMedia('(min-width: 768px)');
    var mlManifest = null, mlFrags = [], mlMode = null, mlT = null;

    function mlRng(seed) {
      return function () {
        seed = seed + 0x6D2B79F5 | 0;
        var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    }
    function mlHash(s) { var h = 5381; for (var i = 0; i < s.length; i++) h = (h * 33) ^ s.charCodeAt(i); return h >>> 0; }
    function mlMobile() { return !mlDesktopMQ.matches; }

    // Bounding box of an element's actual text (not its block box): right edge
    // of the longest line, and whether it runs over more than one line.
    function mlText(el) {
      // walk the text nodes: a range over a block container would return the
      // full-width block boxes, not the lines of text
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), node, rects = [];
      while ((node = walker.nextNode())) {
        if (!node.nodeValue.trim()) continue;
        var r = document.createRange(); r.selectNodeContents(node);
        var cr = r.getClientRects();
        for (var i = 0; i < cr.length; i++) if (cr[i].width > 0) rects.push(cr[i]);
      }
      if (!rects.length) return null;
      var top = rects[0].top, bottom = rects[0].bottom, right = rects[0].right, tops = {};
      for (var j = 0; j < rects.length; j++) {
        top = Math.min(top, rects[j].top); bottom = Math.max(bottom, rects[j].bottom);
        right = Math.max(right, rects[j].right); tops[Math.round(rects[j].top)] = 1;
      }
      return { top: top, bottom: bottom, right: right, lines: Object.keys(tops).length };
    }

    // ---- anchors: entries oldest -> newest (keyed by date so keys survive new
    // entries above); pages without entries use slots (desktop) or headings (phones)
    function mlAnchors() {
      var entries = Array.prototype.slice.call(document.querySelectorAll('.note-entry')).reverse();
      if (entries.length) {
        var seen = {};
        var list = entries.map(function (el) {
          var d = el.querySelector('.date-numeric'), key = d ? d.textContent.trim() : '';
          seen[key] = (seen[key] || 0) + 1;
          return { el: el, key: key + '#' + seen[key] };
        });
        // Desktop: a band beside the intro, rising a little above the title, down
        // to the first entry. Appended LAST so existing entries keep their cards.
        if (!mlMobile()) {
          var title = document.querySelector('main h1'), first = entries[entries.length - 1];
          if (title && first) {
            var mr = mare.getBoundingClientRect();
            var bt = title.getBoundingClientRect().top - mr.top - 140;
            var bh = first.getBoundingClientRect().top - mr.top - bt;
            if (bh > 200) list.push({ top: bt, height: bh, key: 'intro', intro: true });
          }
        }
        return list;
      }
      var main = document.querySelector('main'); if (!main) return [];
      if (mlMobile()) {
        var out = [];
        // Chronicles: its episodes have date blocks, so they take a trace like Notes entries
        Array.prototype.forEach.call(main.querySelectorAll('.chronicle-entry'), function (el, i) {
          var d = el.querySelector('.date-numeric');
          out.push({ el: el, key: 'chron' + i + (d ? d.textContent.trim() : '') });
        });
        Array.prototype.forEach.call(main.querySelectorAll('h1, h2'), function (h, i) {
          var t = mlText(h);
          if (t && t.lines === 1) out.push({ el: h, key: 'h' + i + h.textContent.trim().slice(0, 24) });
        });
        return out;
      }
      var h1 = main.querySelector('h1'), m = mare.getBoundingClientRect();
      // start a little above the title, as on Notes, so the top is not left empty
      var top = (h1 ? h1.getBoundingClientRect().top - 140 : main.getBoundingClientRect().top) - m.top;
      var bottom = main.getBoundingClientRect().bottom - m.top, slots = [];
      for (var y = top, i = 0; y < bottom - 120; y += 480, i++) {
        slots.push({ top: y, height: Math.min(420, bottom - y), key: 'slot' + i });
      }
      return slots;
    }

    function mlDeal() {
      mare.innerHTML = ''; mlFrags = [];
      var manifest = mlManifest, deck = [], i, j, tmp, r = mlRng(1789), dealt = 0, mobile = mlMobile();
      for (i = 0; i < manifest.length; i++) deck.push(i);
      for (i = deck.length - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); tmp = deck[i]; deck[i] = deck[j]; deck[j] = tmp; }
      function next(minAr) {                // next card with at least this aspect ratio
        for (var tries = 0; tries < deck.length; tries++) {
          var meta = manifest[deck[dealt++ % deck.length]];
          if (meta.ar >= minAr) return meta;
        }
        return manifest[deck[0]];
      }
      // The tide: geometry (side jitter, position, size) re-rolls once a day at
      // local midnight; which fragment belongs to which entry never changes,
      // so nothing new is downloaded when the sea moves.
      // The day is Pantelleria's day (Europe/Rome): the sea turns with the same
      // tide for every visitor, wherever they read from.
      var tide;
      try { tide = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date()); }
      catch (e) { var d = new Date(); tide = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
      mlAnchors().forEach(function (a, idx) {
        var rng = mlRng(mlHash(a.key)), tideRng = mlRng(mlHash(a.key + '|' + tide)), n = 1;
        if (!mobile) {
          // Fragments per anchor scale with its height (about one per 900px), so a
          // long image-rich entry and a short note get the same density per screen.
          var ah = a.el ? a.el.getBoundingClientRect().height : a.height;
          n = a.intro ? Math.min(4, 3 + Math.floor(ah / 700))               // the band beside the intro: a few more
                      : Math.min(4, 1 + Math.floor((ah + rng() * 900) / 900));
        } else if (a.el && rng() < 0.65) {
          n = 2;   // phones: a second, larger trace hanging off the left edge
        }
        for (var k = 0; k < n; k++) {
          var el = document.createElement('div');
          el.className = 'ml-frag';
          // phones: the date-row trace must be wide; the left one just not a sliver
          var meta = next(!mobile ? 0 : (k === 0 ? 1.4 : 0.7));
          el.setAttribute('data-src', ML_BASE + meta.f);
          mare.appendChild(el);
          mlFrags.push({ el: el, anchor: a, side: (idx + k) % 2 ? 'right' : 'left', k: k, n: n,
                         u: tideRng(), v: tideRng(), s: 0.7 + tideRng() * 0.6, meta: meta });
        }
      });
      mlFrags.forEach(function (f) { mlIO.observe(f.el); });
    }

    // Geometry only — assignment never changes, so a relayout never reshuffles.
    function mlLayout() {
      if (!mlFrags.length) return;
      var m = mare.getBoundingClientRect(), W = mare.clientWidth, docH = Math.max(1, mare.clientHeight);
      var wrap = Math.min(1100, W * 0.92), wl = (W - wrap) / 2, wr = wl + wrap, mobile = mlMobile();
      var scale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--ml-scale')) || 0.46;
      mlFrags.forEach(function (f) {
        var a = f.anchor, x, y, w, h;
        if (a.el && a.el.classList.contains('filtered-out')) { f.el.style.display = 'none'; return; }
        if (mobile && f.k === 0) {
          // the empty right part of the date row (or heading row); the larger
          // ones dip beside the title line — touching the objects a little is fine
          var ref = a.el ? (a.el.querySelector('.date-block, .font-mono') || a.el) : null;   // .font-mono: older entries
          var t = ref ? mlText(ref) : null;
          var free = t ? (W - 16) - t.right : 0;
          if (!t || free < 72) { f.el.style.display = 'none'; return; }
          var big = f.s > 1.05, grandR = f.u < 0.2;    // some larger, a few reaching down past the title
          w = Math.min(free - (grandR ? 2 : 10), grandR ? 300 : (big ? 250 : 220));
          h = Math.min((t.bottom - t.top) + (grandR ? 110 : (big ? 56 : 20)), grandR ? 180 : (big ? 130 : 80));
          x = W - 16 - w; y = t.top - m.top - 8;
          f.el.style.backgroundPosition = 'right center';
        } else if (mobile) {
          // a bigger trace hanging off the LEFT edge: beside an image block when
          // the entry has one, otherwise straddling the gap below the entry
          var er = a.el.getBoundingClientRect();
          var img = a.el.querySelector('.gallery-row, .vertical-gallery, figure');
          var grand = f.u < 0.3;                       // a few much larger ones
          w = grand ? 300 + f.s * 110 : 170 + f.s * 70;
          h = Math.min(w / f.meta.ar, grand ? 360 : 240); w = h * f.meta.ar;
          x = -w * (grand ? 0.5 : 0.55);
          if (img) { var ir = img.getBoundingClientRect(); y = ir.top - m.top + f.v * Math.max(0, ir.height - h); }
          else { y = er.bottom - m.top - h * 0.5 + f.v * 24; }
          f.el.style.backgroundPosition = 'left center';
        } else {
          var top, height;
          if (a.el) { var r = a.el.getBoundingClientRect(); top = r.top - m.top; height = Math.max(r.height, 200); }
          else { top = a.top; height = a.height; }
          // Left traces may reach into the date column (up to wl + 200px); right
          // traces never cross the content edge — they bleed off-screen instead.
          w = 560 * scale * f.s * Math.min(1, Math.sqrt(f.meta.ar));
          w = f.side === 'left' ? Math.min(w, wl + 200) : Math.min(w, (W - wr + 12) * 1.6);
          h = w / f.meta.ar;
          y = top + height * ((f.k + f.u) / f.n) * 0.9;   // spread the anchor's fragments down its height
          x = f.side === 'left'
            ? -w * 0.35 + f.v * ((wl + 200 - w) + w * 0.35)
            : (wr - 12) + f.v * Math.max(0, (W - w * 0.65) - (wr - 12));
          f.el.style.backgroundPosition = '';
        }
        f.el.style.display = '';
        f.el.style.left = x + 'px'; f.el.style.top = y + 'px';
        f.el.style.width = w + 'px'; f.el.style.height = h + 'px';
        f.el.style.setProperty('--depth', (0.9 + 0.25 * (y / docH)).toFixed(2));   // deepens gently as you descend
      });
    }

    var mlIO = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, src = el.getAttribute('data-src');
        obs.unobserve(el);
        if (!src) return;
        el.removeAttribute('data-src');
        var img = new Image();
        img.onload = function () { el.style.backgroundImage = 'url(' + src + ')'; el.classList.add('surfaced'); };
        img.src = src;
      });
    }, { rootMargin: '900px 0px' });

    // (Re)build when the layout mode changes, otherwise just reposition.
    function mlInit() {
      var mode = mlMobile() ? 'mobile' : 'desktop';
      if (mode === mlMode && mlFrags.length) { mlLayout(); return; }
      mlMode = mode;
      if (mlManifest) { mlDeal(); mlLayout(); return; }
      fetch(ML_BASE + 'fragments.json').then(function (r) { return r.json(); }).then(function (manifest) {
        if (!manifest || !manifest.length) return;
        mlManifest = manifest;
        mlDeal(); mlLayout();
      }).catch(function () {});
    }

    window.addEventListener('resize', function () { clearTimeout(mlT); mlT = setTimeout(mlInit, 250); });
    if (fBtn) fBtn.addEventListener('click', function () { setTimeout(mlLayout, 0); });
    if ('ResizeObserver' in window) {
      new ResizeObserver(function () { clearTimeout(mlT); mlT = setTimeout(mlLayout, 250); }).observe(mare.parentNode);
    }
    mlInit();
  }

  // ===== 8. THE HEADER MOON =====
  // Tonight's seal takes the crescent's place, top right, sized to the disc the
  // old crescent belonged to, and turned as the sky turns it (see moon.js).
  (function () {
    var img = document.querySelector('.crescent-moon');
    if (!img || !window.Luna) return;
    function rise() {
      var r = Luna.reckon(), n = r.night < 10 ? '0' + r.night : '' + r.night;
      img.style.transform = 'rotate(' + r.rot.toFixed(1) + 'deg)';
      if (img.getAttribute('data-night') !== n) {
        img.setAttribute('data-night', n);
        img.onload = function () { img.classList.add('risen'); };
        img.src = 'assets/moon/moon-' + n + '.webp';
      }
    }
    rise(); setInterval(rise, 60 * 60 * 1000);
  })();
})();
