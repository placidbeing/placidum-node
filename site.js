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
})();
