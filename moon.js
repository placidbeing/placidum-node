/* Ephemeris Lunae — the moon tonight, reckoned for 36° 49′ 27.2″ N, 12° 00′ 44.8″ E.
   Luna.reckon() gives the night, its orientation and the facts; Luna.render() fills the almanac page. */
(function () {
    var D2R = Math.PI / 180, R2D = 180 / Math.PI, P = 29.530588, REF = Date.UTC(2000, 0, 6, 18, 14); // new moon, lunation 953 (Brown)
    var LAT = 36.824222, LON = 12.012444, J2000 = Date.UTC(2000, 0, 1, 12);
    var MARIA = [["A", "Mare Crisium", "Palus Maeotis"], ["B", "Mare Foecunditatis", "Mare Caspium"], ["C", "Mare Nectaris", "Sinus Athen. et Sin. extr. Ponti"], ["D", "Mare Tranquillitatis", "Pontus Euxinus"], ["E", "Mare Serenitatis", "Pontus Euxinus"], ["F", "Lacus Somniorum", "Sinus Cercinites"], ["G", "Lacus Mortis", "Montes Peuce"], ["H", "Palus Somni", "Lacus Corocondametis"], ["I", "Mare Frigoris", "Mare Hyperboreum"], ["K", "Mare Vaporum", "Propontis"], ["L", "Sinus Aestuum", "Mare Adriaticum"], ["M", "Mare Nubium", "Mare Pamphilium"], ["N", "Mare Humorum", "Sinus Sirbonis et Mare Aegyptiacum"], ["O", "Sinus Epidemiarum", "Insulae Didymae"], ["P", "Oceanus Procellarum", "Mare Eoum et Maris Mediterranei pars"], ["Q", "Mare Imbrium", "Maris Mediterranei pars septentrionalis"], ["R", "Sinus Iridum", "Sinus Apollinis"], ["S", "Sinus Roris", "Sinus Hyperboreus"]], CRATERS = [[4, "Langrenus", "Insula maior"], [8, "Petavius", "Petra Sogdiana"], [10, "Endymion", "Lacus Hyperboreus superior"], [13, "Atlas", "Pars Montium Macrocemniorum"], [15, "Hercules", "Pars Montium Macrocemniorum"], [20, "Posidonius", "Insula Macra"], [22, "Theophilus", "Pars Montis Moschi"], [27, "Aristoteles", "Mons Serrorum"], [28, "Eudoxus", "Mons Carpathes"], [29, "Menelaus", "Byzantium"], [33, "Manilius", "Insula Besbicus"], [39, "Hipparchus", "Mons Olympus"], [46, "Archimedes", "Mons Argentarius"], [47, "Ptolemaeus", "Mons Sipylus"], [48, "Arzachel", "Mons Cragus"], [49, "Alphonsus", "Mons Masicytus"], [53, "Plato", "Lacus Niger maior"], [54, "Tycho", "Mons Sinai"], [55, "Eratosthenes", "Insula Vulcania"], [59, "Clavius", "Desertum Hevila"], [62, "Landsbergius", "Insula Malta"], [64, "Copernicus", "Mons Aetna"], [66, "Pytheas", "Insula Sardinia"], [68, "Bullialdus", "Insula Creta"], [70, "Reinhold", "Mons Neptunus"], [75, "Kepler", "Loca paludosa"], [76, "Gassendus", "Mons Cataractes"], [78, "Aristarchus", "Mons Porphyrites"], [84, "Pythagoras", "ad Sinum Hyperboreum"], [86, "Grimaldus", "Palus Maraeotis"]];
    var ROME = { timeZone: 'Europe/Rome' };
    function romeParts(t) {
      var out = {};
      try {
        var parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date(t));
        for (var i = 0; i < parts.length; i++) out[parts[i].type] = +parts[i].value;
      } catch (e) { var d = new Date(t); out = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate(), hour: d.getHours(), minute: d.getMinutes() }; }
      return out;
    }
    function stationNight() {                 // 21 h 30 local, tonight, as UTC ms
      var p = romeParts(Date.now()), noon = Date.UTC(p.year, p.month - 1, p.day, 12);
      var offset = romeParts(noon).hour - 12;  // +1 CET, +2 CEST
      return Date.UTC(p.year, p.month - 1, p.day, 21, 30) - offset * 36e5;
    }
    function fmt(t, withTime) {
      var o = { timeZone: 'Europe/Rome', day: 'numeric', month: 'long', year: 'numeric' };
      if (withTime) { o.hour = '2-digit'; o.minute = '2-digit'; }
      try { return new Date(t).toLocaleString('en-GB', o); } catch (e) { return new Date(t).toDateString(); }
    }
    function hm(t) { var p = romeParts(t); return pad(p.hour) + ' h ' + pad(p.minute); }
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    function norm(a) { return ((a % 360) + 360) % 360; }
    // --- places: low-precision Sun and Moon (Astronomical Almanac), equatorial of date
    function eq(lam, bet, eps) {
      return { ra: Math.atan2(Math.sin(lam) * Math.cos(eps) - Math.tan(bet) * Math.sin(eps), Math.cos(lam)),
               dec: Math.asin(Math.sin(bet) * Math.cos(eps) + Math.cos(bet) * Math.sin(eps) * Math.sin(lam)), lam: lam };
    }
    function sun(t) {
      var n = (t - J2000) / 864e5, L = 280.460 + 0.9856474 * n, g = (357.528 + 0.9856003 * n) * D2R;
      return eq((L + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g)) * D2R, 0, (23.439 - 0.0000004 * n) * D2R);
    }
    function moon(t) {
      var T = (t - J2000) / 864e5 / 36525;
      var s = function (a, b) { return Math.sin((a + b * T) * D2R); }, c = function (a, b) { return Math.cos((a + b * T) * D2R); };
      var lam = 218.32 + 481267.881 * T + 6.29 * s(135.0, 477198.87) - 1.27 * s(259.3, -413335.36) + 0.66 * s(235.7, 890534.22)
              + 0.21 * s(269.9, 954397.74) - 0.19 * s(357.5, 35999.05) - 0.11 * s(186.5, 966404.03);
      var bet = 5.13 * s(93.3, 483202.02) + 0.28 * s(228.2, 960400.89) - 0.28 * s(318.3, 6003.15) - 0.17 * s(217.6, -407332.21);
      var par = 0.9508 + 0.0518 * c(135.0, 477198.87) + 0.0095 * c(259.3, -413335.36) + 0.0078 * c(235.7, 890534.22) + 0.0028 * c(269.9, 954397.74);
      var m = eq(lam * D2R, bet * D2R, (23.439 - 0.0000004 * T * 36525) * D2R); m.par = par * D2R; return m;
    }
    function lst(t) { var n = (t - J2000) / 864e5; return norm(280.46061837 + 360.98564736629 * n + LON) * D2R; }
    function topo(t) {                        // the moon over the station
      var m = moon(t), H = lst(t) - m.ra, phi = LAT * D2R;
      var alt = Math.asin(Math.sin(phi) * Math.sin(m.dec) + Math.cos(phi) * Math.cos(m.dec) * Math.cos(H));
      var az = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) - Math.tan(m.dec) * Math.cos(phi)) * R2D + 180;
      var q = Math.atan2(Math.sin(H), Math.tan(phi) * Math.cos(m.dec) - Math.sin(m.dec) * Math.cos(H));
      return { alt: alt * R2D, az: norm(az), q: q * R2D, H: Math.atan2(Math.sin(H), Math.cos(H)) };
    }
    function limb(t) {                        // bright limb position angle, illuminated fraction, waxing
      var s = sun(t), m = moon(t), dA = s.ra - m.ra;
      var chi = Math.atan2(Math.cos(s.dec) * Math.sin(dA), Math.sin(s.dec) * Math.cos(m.dec) - Math.cos(s.dec) * Math.sin(m.dec) * Math.cos(dA));
      var psi = Math.acos(Math.sin(s.dec) * Math.sin(m.dec) + Math.cos(s.dec) * Math.cos(m.dec) * Math.cos(dA));
      var Delta = 6378.14 / Math.sin(m.par), R = 149597870.7;
      var i = Math.atan2(R * Math.sin(psi), Delta - R * Math.cos(psi));
      return { chi: norm(chi * R2D), k: (1 + Math.cos(i)) / 2, waxing: norm((m.lam - s.lam) * R2D) < 180 };
    }
    function horizon(night) {                 // rise / transit / set between local noon and noon
      var t0 = night - 9.5 * 36e5, step = 4 * 6e4, h0 = 0.125, ev = { rise: null, set: null, transit: null }, prev = topo(t0);
      for (var t = t0 + step; t <= t0 + 864e5; t += step) {
        var cur = topo(t);
        if (prev.alt < h0 && cur.alt >= h0 && !ev.rise) ev.rise = t - step * (cur.alt - h0) / (cur.alt - prev.alt);
        if (prev.alt >= h0 && cur.alt < h0 && !ev.set) ev.set = t - step * (cur.alt - h0) / (cur.alt - prev.alt);
        if (prev.H < 0 && cur.H >= 0 && !ev.transit) ev.transit = t - step * cur.H / (cur.H - prev.H);
        prev = cur;
      }
      return ev;
    }
    function compass(az) { return ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'][Math.round(az / 22.5) % 16]; }
    function reckon() {
      var t = stationNight(), L = limb(t), sky = topo(t), ev = horizon(t);
      var age = P / (2 * Math.PI) * Math.acos(Math.max(-1, Math.min(1, 1 - 2 * L.k))); if (!L.waxing) age = P - age;
      var night = Math.round(age / P * 30) % 30, lit = L.k;
      var name = lit < 0.03 ? 'new moon' : lit > 0.97 ? 'full moon' : Math.abs(lit - 0.5) < 0.04 ? (L.waxing ? 'first quarter' : 'last quarter')
               : lit < 0.5 ? (L.waxing ? 'waxing crescent' : 'waning crescent') : (L.waxing ? 'waxing gibbous' : 'waning gibbous');
      var days = (t - REF) / 864e5, n = Math.floor(days / P), a = days - n * P;
      var nextNew = REF + (n + 1) * P * 864e5, nextFull = REF + (n + (a < P / 2 ? 0.5 : 1.5)) * P * 864e5;
      var sincePlate = Math.floor((t - Date.UTC(1748, 0, 1)) / 864e5 / P);
      // turn the seal: its bright limb sits at 270° (waxing) or 90° (waning); the zenith at the parallactic angle
      var up = sky.alt > 0, q = up ? sky.q : 0, rot = q - (L.chi - (L.waxing ? 270 : 90));
      rot = ((rot + 180) % 360 + 360) % 360 - 180;
      return { t: t, night: night, name: name, age: age, lit: lit, chi: L.chi, up: up, sky: sky, ev: ev, rot: rot,
               lunation: 953 + n, nextNew: nextNew, nextFull: nextFull, sincePlate: sincePlate };
    }
    function render() {
      var r = reckon(), t = r.t, night = r.night, name = r.name, age = r.age, lit = r.lit, L = { chi: r.chi }, up = r.up, sky = r.sky, ev = r.ev, rot = r.rot, n = r.lunation - 953, nextNew = r.nextNew, nextFull = r.nextFull, sincePlate = r.sincePlate;
      var seal = document.getElementById('moon-seal');
      seal.src = 'assets/moon/moon-' + pad(night) + '.webp';
      seal.style.transform = 'rotate(' + rot.toFixed(1) + 'deg)';
      document.getElementById('moon-phase').textContent = name;
      var where = up ? 'altitude ' + (sky.alt < 0 ? '−' : '+') + Math.abs(sky.alt).toFixed(0) + '° · azimuth ' + sky.az.toFixed(0) + '° ' + compass(sky.az)
                     : 'below the horizon';
      var rows = [['Date', fmt(t) + ' · night ' + pad(night)], ['Age', age.toFixed(1) + ' days'],
        ['Illuminated', Math.round(lit * 100) + ' % of the disc'], ['Bright limb', 'position angle ' + L.chi.toFixed(0) + '°'],
        ['At 21 h 30', where + (up ? ' · parallactic angle ' + (sky.q < 0 ? '−' : '+') + Math.abs(sky.q).toFixed(0) + '°' : '')],
        ['Turned', (rot < 0 ? '−' : '+') + Math.abs(rot).toFixed(0) + '° from north-up'],
        ['Horizon', 'rises ' + (ev.rise ? hm(ev.rise) : '—') + ' · passes the meridian ' + (ev.transit ? hm(ev.transit) : '—') + ' · sets ' + (ev.set ? hm(ev.set) : '—')],
        ['Lunation', (953 + n) + ' (Brown)'],
        ['Next new moon', fmt(nextNew, true) + ' local'], ['Next full moon', fmt(nextFull, true) + ' local'],
        ['Since the plate', sincePlate.toLocaleString('en-GB') + ' lunations since 1748']];
      var html = '';
      for (var i = 0; i < rows.length; i++) html += '<dt>' + rows[i][0] + '</dt><dd>' + rows[i][1] + '</dd>';
      document.getElementById('moon-data').innerHTML = html;
      var m = MARIA[night % MARIA.length], c = CRATERS[night % CRATERS.length];
      document.getElementById('moon-reading').innerHTML = '<b>' + m[0] + '</b>&nbsp; ' + m[1] + ' — <em>' + m[2] + '</em> <span class="dim">(Hevelius)</span><br><span class="dim">' + c[0] + '</span>&nbsp; ' + c[1] + ' — <em>' + c[2] + '</em>';
      var figs = document.getElementById('moon-nights').children;
      for (var j = 0; j < figs.length; j++) figs[j].className = 'moon-night' + (j === night ? ' tonight' : '');
    }
    window.Luna = { reckon: reckon, render: render };
  })();
