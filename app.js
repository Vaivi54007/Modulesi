/* =========================================================
   MODULE SED — Application
   Données sauvegardées dans localStorage (clé: moduleSed.v1)
   ========================================================= */
(function () {
  "use strict";

  /* ---------------- Stockage ---------------- */
  var KEY = "moduleSed.v1";
  var DEF = {
    profil: { nom: "", objectif: "", future: "", couple: "", valeurs: ["", "", "", "", ""], redflags: "" },
    lus: {}, exos: {}, quiz: {}, notes: {},
    echelle: [], terrain: [], emotions: [], victoires: [], anecdotes: [],
    defis: {}, jours: {}, last: null
  };
  var S = load();

  function load() {
    var d = null;
    try { d = JSON.parse(localStorage.getItem(KEY)); } catch (e) { d = null; }
    d = d || {};
    var out = JSON.parse(JSON.stringify(DEF));
    for (var k in d) if (Object.prototype.hasOwnProperty.call(d, k)) out[k] = d[k];
    if (!out.profil.valeurs || out.profil.valeurs.length < 5) out.profil.valeurs = (out.profil.valeurs || []).concat(["", "", "", "", ""]).slice(0, 5);
    return out;
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); }
    catch (e) { toast("⚠️ Sauvegarde impossible"); }
  }
  function markActive() { S.jours[today()] = true; save(); }

  /* Demande au navigateur de ne pas effacer les données */
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}

  /* ---------------- Utilitaires ---------------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function nl2br(s) { return esc(s).replace(/\n/g, "<br>"); }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function dkey(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function today() { return dkey(new Date()); }
  function fdate(iso) {
    var d = new Date(iso);
    return d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" }) + " · " + pad(d.getHours()) + "h" + pad(d.getMinutes());
  }
  function hash(str) { var h = 0; for (var i = 0; i < str.length; i++) { h = (h * 31 + str.charCodeAt(i)) | 0; } return Math.abs(h); }
  function mod(id) { for (var i = 0; i < MODULES.length; i++) if (MODULES[i].id === id) return MODULES[i]; return null; }
  function modIndex(id) { for (var i = 0; i < MODULES.length; i++) if (MODULES[i].id === id) return i; return -1; }

  var toastT;
  function toast(msg) {
    var old = $(".toast"); if (old) old.remove();
    var t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    clearTimeout(toastT); toastT = setTimeout(function () { t.remove(); }, 2200);
  }
  function confetti() {
    var c = document.createElement("div"); c.className = "confetti";
    var cols = ["#F07A8E", "#F5A35C", "#F2C14E", "#5FD39A", "#8FB8F2", "#B49CF0"];
    for (var i = 0; i < 46; i++) {
      var p = document.createElement("i");
      p.style.left = Math.random() * 100 + "%";
      p.style.background = cols[i % cols.length];
      p.style.animationDelay = Math.random() * 0.4 + "s";
      p.style.animationDuration = 1.2 + Math.random() * 1 + "s";
      c.appendChild(p);
    }
    document.body.appendChild(c);
    setTimeout(function () { c.remove(); }, 2600);
  }

  /* ---------------- Progression ---------------- */
  function modStats(m) {
    var lus = 0, ex = 0;
    m.lecons.forEach(function (_, i) { if (S.lus[m.id + ":" + i]) lus++; });
    m.exercices.forEach(function (_, i) { if (S.exos[m.id + ":" + i]) ex++; });
    var q = S.quiz[m.id]; var qok = q && q.score / q.total >= 0.6 ? 1 : 0;
    var total = m.lecons.length + m.exercices.length + 1;
    return { lus: lus, ex: ex, q: q, qok: qok, pct: Math.round((lus + ex + qok) / total * 100) };
  }
  function globalPct() {
    var done = 0, tot = 0;
    MODULES.forEach(function (m) {
      var s = modStats(m); done += s.lus + s.ex + s.qok; tot += m.lecons.length + m.exercices.length + 1;
    });
    return tot ? Math.round(done / tot * 100) : 0;
  }
  function streak() {
    var n = 0, d = new Date();
    if (!S.jours[dkey(d)]) d.setDate(d.getDate() - 1);
    while (S.jours[dkey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function nextLesson() {
    for (var i = 0; i < MODULES.length; i++) {
      var m = MODULES[i];
      for (var j = 0; j < m.lecons.length; j++) if (!S.lus[m.id + ":" + j]) return { m: m, i: j };
    }
    return null;
  }

  /* ---------------- Icônes ---------------- */
  var IC = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4.4 0 7-3 7-7 0-3-2-5.5-3.5-7-.5 2-1.5 3-3 3.5C13 8 12 5 9 2c0 4-4 6.5-4 12 0 4 2.6 8 7 8z"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>'
  };
  var TABS = [["home", "Accueil", "home"], ["modules", "Modules", "book"], ["defis", "Défis", "flame"], ["journal", "Journal", "pen"], ["profil", "Profil", "user"]];

  function renderTabs(active) {
    $("#tabbar").innerHTML = TABS.map(function (t) {
      return '<a href="#/' + t[0] + '" class="' + (active === t[0] ? "on" : "") + '">' + IC[t[2]] + '<span>' + t[1] + '</span></a>';
    }).join("");
  }

  /* ---------------- Routeur ---------------- */
  var ui = { defisTab: "echelle", journalTab: "emotions", quiz: null };

  function route() {
    var h = location.hash.replace(/^#\/?/, "") || "home";
    var p = h.split("/");
    var app = $("#app");
    var html = "", tab = p[0];
    closeSheet();
    switch (p[0]) {
      case "modules": html = vModules(); break;
      case "module": html = vModule(p[1], p[2] || "lecons"); tab = "modules"; break;
      case "lecon": html = vLecon(p[1], parseInt(p[2], 10) || 0); tab = "modules"; break;
      case "defis": html = vDefis(); break;
      case "journal": html = vJournal(); break;
      case "profil": html = vProfil(); break;
      default: html = vHome(); tab = "home";
    }
    app.innerHTML = '<div class="view">' + html + "</div>";
    renderTabs(tab);
    window.scrollTo(0, 0);
    bind(p);
  }
  window.addEventListener("hashchange", route);

  /* =========================================================
     VUES
     ========================================================= */

  /* ---------- Accueil ---------- */
  function vHome() {
    var nom = S.profil.nom ? esc(S.profil.nom) : "";
    var pct = globalPct(), st = streak();
    var dIdx = hash(today()) % DEFIS_JOUR.length;
    var cIdx = (hash(today()) >> 3) % CITATIONS.length;
    var defiDone = !!S.defis[today()];
    var nx = nextLesson();
    var h = new Date().getHours();
    var salut = h < 6 ? "Bonne nuit" : h < 18 ? "Salut" : "Bonsoir";
    var R = 36, C = 2 * Math.PI * R, off = C * (1 - pct / 100);
    var lusTot = Object.keys(S.lus).length;
    var nInter = S.terrain.length;
    var echDone = S.echelle.filter(function (e) { return e.done; }).length;

    var s = '<div class="hdr"><div><div class="mut small">' + new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }) + '</div><h1>' + salut + (nom ? ", " + nom : "") + ' 👋</h1></div></div>';

    s += '<div class="card"><div class="row"><div class="ring"><svg width="84" height="84"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F07A8E"/><stop offset="1" stop-color="#F5A35C"/></linearGradient></defs><circle cx="42" cy="42" r="' + R + '" stroke="rgba(255,255,255,.08)" stroke-width="9" fill="none"/><circle cx="42" cy="42" r="' + R + '" stroke="url(#g)" stroke-width="9" fill="none" stroke-linecap="round" stroke-dasharray="' + C + '" stroke-dashoffset="' + off + '"/></svg><b>' + pct + '%</b></div>';
    s += '<div class="grow"><div style="font-weight:800;font-size:18px">Ta progression</div><div class="mut small">' + lusTot + ' leçons lues · ' + Object.keys(S.exos).length + ' exercices faits</div>';
    s += '<div class="row" style="margin-top:8px;gap:8px"><span class="pill">🔥 ' + st + ' jour' + (st > 1 ? "s" : "") + ' d\'affilée</span></div></div></div></div>';

    s += '<div class="card gcard"><div class="small" style="font-weight:800;letter-spacing:.08em;text-transform:uppercase">⚡ Défi du jour</div><div style="font-size:19px;font-weight:750;margin:6px 0 14px;line-height:1.35">' + esc(DEFIS_JOUR[dIdx]) + '</div>';
    s += defiDone ? '<div class="btn full" style="background:rgba(0,0,0,.15)">✓ Relevé aujourd\'hui, bravo</div>' : '<button class="btn full" style="background:#1a0f12;color:#fff" data-act="defi">J\'ai relevé le défi</button>';
    s += '</div>';

    if (nx) {
      s += '<div class="h3">Continuer</div><a href="#/lecon/' + nx.m.id + '/' + nx.i + '" style="text-decoration:none;color:inherit"><div class="card tap mod"><div class="mic" style="background:' + nx.m.couleur + '22">' + nx.m.emoji + '</div><div class="grow"><div class="mut small">' + esc(nx.m.titre) + ' · Leçon ' + (nx.i + 1) + '</div><h3>' + esc(nx.m.lecons[nx.i].t) + '</h3></div><div class="chev">›</div></div></a>';
    } else {
      s += '<div class="card">🎉 Tu as lu toutes les leçons. Maintenant, place à la pratique !</div>';
    }

    s += '<div class="h3">En chiffres</div><div class="grid2">';
    s += '<div class="stat"><b>' + nInter + '</b><span>interactions notées</span></div>';
    s += '<div class="stat"><b>' + echDone + '/' + S.echelle.length + '</b><span>marches de courage</span></div>';
    s += '<div class="stat"><b>' + S.emotions.length + '</b><span>émotions nommées</span></div>';
    s += '<div class="stat"><b>' + S.victoires.length + '</b><span>victoires</span></div></div>';

    s += '<div class="h3">Pensée du jour</div><div class="card"><div class="quote">« ' + esc(CITATIONS[cIdx][0]) + ' »</div><div class="mut small" style="margin-top:8px">— ' + esc(CITATIONS[cIdx][1]) + '</div></div>';

    s += '<div class="h3">Actions rapides</div><div class="grid2">';
    s += '<button class="btn" data-act="quick-terrain">📍 Noter une interaction</button>';
    s += '<button class="btn" data-act="quick-emo">❤️ Nommer une émotion</button>';
    s += '<button class="btn" data-act="quick-vic">🏆 Ajouter une victoire</button>';
    s += '<a class="btn" href="#/module/quoidire/lecons" style="text-decoration:none">🧠 Méthode POSER</a></div>';
    return s;
  }

  /* ---------- Liste des modules ---------- */
  function vModules() {
    var s = '<div class="hdr"><h1>Modules</h1></div><div class="sub">' + MODULES.length + ' modules · ' + MODULES.reduce(function (a, m) { return a + m.lecons.length; }, 0) + ' leçons · axés communication</div>';
    MODULES.forEach(function (m, i) {
      var st = modStats(m);
      s += '<a href="#/module/' + m.id + '" style="text-decoration:none;color:inherit"><div class="card tap mod"><div class="mic" style="background:' + m.couleur + '22">' + m.emoji + '</div><div class="grow"><div class="mut small">Module ' + (i + 1) + (st.pct === 100 ? " · ✓ terminé" : "") + '</div><h3>' + esc(m.titre) + '</h3><div class="mut small ell">' + esc(m.sous) + '</div><div class="bar"><i style="width:' + st.pct + '%"></i></div></div><div class="chev">›</div></div></a>';
    });
    return s;
  }

  /* ---------- Détail d'un module ---------- */
  function vModule(id, tab) {
    var m = mod(id); if (!m) return vModules();
    var st = modStats(m);
    var s = '<div class="hdr"><a class="back" href="#/modules">‹ Modules</a></div>';
    s += '<div class="mhero" style="background:linear-gradient(145deg,' + m.couleur + '33,' + m.couleur + '0d);border:1px solid ' + m.couleur + '40"><div class="em">' + m.emoji + '</div><h1>' + esc(m.titre) + '</h1><p>' + esc(m.sous) + '</p><div class="bar" style="margin-top:14px"><i style="width:' + st.pct + '%"></i></div><div class="small mut" style="margin-top:6px">' + st.pct + '% · ' + st.lus + '/' + m.lecons.length + ' leçons · ' + st.ex + '/' + m.exercices.length + ' exercices</div></div>';
    var tabs = [["lecons", "Leçons"], ["pratique", "Pratique"], ["quiz", "Quiz"], ["notes", "Notes"]];
    s += '<div class="seg">' + tabs.map(function (t) { return '<button data-go="#/module/' + id + '/' + t[0] + '" class="' + (tab === t[0] ? "on" : "") + '">' + t[1] + '</button>'; }).join("") + '</div>';

    if (tab === "lecons") {
      s += '<div class="card lesson" style="font-size:16px"><div class="h3" style="margin-top:0">L\'idée maîtresse</div>' + m.intro + '</div>';
      m.lecons.forEach(function (l, i) {
        var done = S.lus[m.id + ":" + i];
        s += '<a href="#/lecon/' + m.id + '/' + i + '" style="text-decoration:none;color:inherit"><div class="card tap row"><div class="lnum ' + (done ? "done" : "") + '">' + (done ? "✓" : i + 1) + '</div><div class="grow" style="font-weight:650">' + esc(l.t) + '</div><div class="chev">›</div></div></a>';
      });
    } else if (tab === "pratique") {
      s += '<div class="h2" style="margin-top:4px">🎯 Objectifs</div><div class="card"><ul style="margin-left:20px">' + m.objectifs.map(function (o) { return "<li style='margin-bottom:6px'>" + esc(o) + "</li>"; }).join("") + '</ul></div>';
      s += '<div class="h2">💪 Exercices à faire</div><div class="mut small" style="margin:-4px 0 10px">Coche quand c\'est fait. C\'est ici que tu progresses vraiment.</div>';
      m.exercices.forEach(function (e, i) {
        var on = !!S.exos[m.id + ":" + i];
        s += '<button class="chk ' + (on ? "on" : "") + '" data-exo="' + m.id + ":" + i + '"><div class="box">' + (on ? "✓" : "") + '</div><div><div class="t">' + esc(e.t) + '</div><div class="mut small" style="margin-top:3px">' + esc(e.d) + '</div></div></button>';
      });
      s += '<div class="h2">📌 À retenir</div><div class="chips">' + m.retenir.map(function (r) { return '<span class="chip">' + esc(r) + "</span>"; }).join("") + '</div>';
    } else if (tab === "quiz") {
      s += vQuiz(m);
    } else if (tab === "notes") {
      s += '<div class="mut small" style="margin-bottom:8px">Tes réflexions, tes phrases, tes prises de conscience sur ce module. Sauvegarde automatique.</div><textarea id="notes" style="min-height:320px" placeholder="Écris ici…">' + esc(S.notes[m.id] || "") + '</textarea><div class="mut small" id="saved" style="margin-top:6px;opacity:0">✓ Enregistré</div>';
    }
    return s;
  }

  /* ---------- Quiz ---------- */
  function vQuiz(m) {
    var q = ui.quiz;
    var prev = S.quiz[m.id];
    if (!q || q.id !== m.id) {
      var s = '<div class="card" style="text-align:center;padding:26px 18px"><div style="font-size:42px">🧠</div><div style="font-size:19px;font-weight:800;margin:6px 0">Teste ce que tu as retenu</div><div class="mut">' + m.quiz.length + ' questions</div>';
      if (prev) s += '<div class="pill" style="margin-top:10px">Dernier score : ' + prev.score + '/' + prev.total + '</div>';
      s += '<button class="btn pri full" style="margin-top:18px" data-act="quiz-start">' + (prev ? "Refaire le quiz" : "Commencer") + '</button></div>';
      return s;
    }
    if (q.i >= m.quiz.length) {
      var ok = q.score / m.quiz.length >= 0.6;
      return '<div class="card" style="text-align:center;padding:26px 18px"><div style="font-size:46px">' + (ok ? "🏆" : "💪") + '</div><div style="font-size:24px;font-weight:800;margin:6px 0">' + q.score + ' / ' + m.quiz.length + '</div><div class="mut">' + (ok ? "Bien joué ! Le module avance." : "Relis les leçons et retente, tu vas y arriver.") + '</div><button class="btn full" style="margin-top:18px" data-act="quiz-start">Recommencer</button></div>';
    }
    var it = m.quiz[q.i];
    var s2 = '<div class="qprog">' + m.quiz.map(function (_, i) { return '<i class="' + (i <= q.i ? "on" : "") + '"></i>'; }).join("") + '</div>';
    s2 += '<div style="font-size:19px;font-weight:750;margin-bottom:16px;line-height:1.35">' + esc(it.q) + '</div>';
    it.o.forEach(function (o, i) {
      var cls = "";
      if (q.ans != null) { if (i === it.a) cls = "right"; else if (i === q.ans) cls = "wrong"; }
      s2 += '<button class="opt ' + cls + '" data-opt="' + i + '"' + (q.ans != null ? " disabled" : "") + '>' + esc(o) + '</button>';
    });
    if (q.ans != null) {
      s2 += '<div class="key"><small>' + (q.ans === it.a ? "✓ Exact" : "Pas tout à fait") + '</small>' + esc(it.w) + '</div>';
      s2 += '<button class="btn pri full" style="margin-top:10px" data-act="quiz-next">' + (q.i + 1 < m.quiz.length ? "Question suivante" : "Voir mon score") + '</button>';
    }
    return s2;
  }

  /* ---------- Leçon ---------- */
  function vLecon(id, i) {
    var m = mod(id); if (!m || !m.lecons[i]) return vModules();
    var l = m.lecons[i], k = m.id + ":" + i, done = !!S.lus[k];
    S.last = k; save();
    var s = '<div class="hdr"><a class="back" href="#/module/' + m.id + '/lecons">‹ ' + esc(m.titre) + '</a></div>';
    s += '<div class="mut small" style="font-weight:700">' + m.emoji + ' LEÇON ' + (i + 1) + ' / ' + m.lecons.length + '</div>';
    s += '<h1 style="font-size:27px;font-weight:800;letter-spacing:-.4px;line-height:1.2;margin:6px 0 18px">' + esc(l.t) + '</h1>';
    s += '<div class="lesson">' + l.p;
    if (l.ex && l.ex.length) {
      s += '<div class="h3">Exemples</div>';
      l.ex.forEach(function (e) {
        s += '<div class="ex"><div class="bad"><span>✗</span>' + esc(e[0]) + '</div><div class="good"><span>✓</span>' + esc(e[1]) + '</div></div>';
      });
    }
    s += '</div>';
    if (l.key) s += '<div class="key"><small>À retenir</small>' + esc(l.key) + '</div>';
    s += '<div style="margin-top:20px" class="col">';
    s += done ? '<div class="btn ok full">✓ Leçon lue</div>' : '<button class="btn pri full" data-act="lu" data-k="' + k + '">Marquer comme lue</button>';
    s += '<div class="row" style="margin-top:4px">';
    s += i > 0 ? '<a class="btn grow" style="text-decoration:none" href="#/lecon/' + m.id + '/' + (i - 1) + '">‹ Précédente</a>' : '<span class="grow"></span>';
    if (i + 1 < m.lecons.length) s += '<a class="btn grow" style="text-decoration:none" href="#/lecon/' + m.id + '/' + (i + 1) + '">Suivante ›</a>';
    else s += '<a class="btn grow" style="text-decoration:none" href="#/module/' + m.id + '/pratique">Pratique ›</a>';
    s += '</div></div>';
    return s;
  }

  /* ---------- Défis ---------- */
  function vDefis() {
    var t = ui.defisTab;
    var s = '<div class="hdr"><h1>Défis</h1></div><div class="sub">Le terrain, c\'est là que tout change.</div>';
    s += '<div class="seg"><button data-dt="echelle" class="' + (t === "echelle" ? "on" : "") + '">Échelle de courage</button><button data-dt="terrain" class="' + (t === "terrain" ? "on" : "") + '">Journal de terrain</button></div>';
    if (t === "echelle") {
      var list = S.echelle.slice().sort(function (a, b) { return (a.done - b.done) || (a.n - b.n); });
      var done = S.echelle.filter(function (e) { return e.done; }).length;
      s += '<div class="card"><div class="mut small">Note tout ce qui te fait peur socialement, classe de 1 (facile) à 10 (terrifiant), puis monte marche par marche. Ne saute pas les étapes.</div>';
      if (S.echelle.length) s += '<div class="bar" style="margin-top:12px"><i style="width:' + Math.round(done / S.echelle.length * 100) + '%"></i></div><div class="small mut" style="margin-top:6px">' + done + ' / ' + S.echelle.length + ' marches franchies</div>';
      s += '<div class="row" style="margin-top:12px"><button class="btn pri sm grow" data-act="ech-add">+ Ajouter une peur</button><button class="btn sm grow" data-act="ech-sugg">Suggestions</button></div></div>';
      if (!list.length) s += '<div class="empty"><div class="e">🪜</div>Ton échelle est vide.<br>Ajoute tes peurs ou pars des suggestions.</div>';
      list.forEach(function (e) {
        s += '<div class="card row" style="' + (e.done ? "opacity:.55" : "") + '"><div class="lvl" style="background:' + lvlColor(e.n) + '">' + e.n + '</div><div class="grow"><div style="font-weight:650;' + (e.done ? "text-decoration:line-through" : "") + '">' + esc(e.t) + '</div>' + (e.done ? '<div class="mut small">Franchie le ' + fdate(e.date) + '</div>' : "") + '</div>';
        s += e.done ? '<button class="del" data-ech-undo="' + e.id + '">Annuler</button>' : '<button class="btn ok sm" data-ech-done="' + e.id + '">Fait</button>';
        s += '<button class="del" data-ech-del="' + e.id + '">✕</button></div>';
      });
    } else {
      var wk = new Date(); wk.setDate(wk.getDate() - 7);
      var nWk = S.terrain.filter(function (x) { return new Date(x.date) > wk; }).length;
      s += '<div class="grid2" style="margin-bottom:12px"><div class="stat"><b>' + S.terrain.length + '</b><span>interactions au total</span></div><div class="stat"><b>' + nWk + '</b><span>ces 7 derniers jours</span></div></div>';
      s += '<div class="card mut small">Loi des moyens : ce que tu contrôles, c\'est le nombre de tentatives. Note chaque interaction (même un simple bonjour) : ce qui a marché, ce que tu améliores. La conscience transforme la répétition en progrès.</div>';
      s += '<button class="btn pri full" data-act="terrain-add" style="margin-bottom:14px">+ Noter une interaction</button>';
      if (!S.terrain.length) s += '<div class="empty"><div class="e">📍</div>Aucune interaction notée pour l\'instant.<br>Le premier pas est le plus dur — et le plus beau.</div>';
      S.terrain.slice().reverse().forEach(function (x) {
        s += '<div class="card"><div class="row"><div class="grow mut small">' + fdate(x.date) + '</div><div>' + "⭐".repeat(x.ressenti || 0) + '</div><button class="del" data-ter-del="' + x.id + '">✕</button></div><div style="font-weight:700;margin:4px 0">' + nl2br(x.quoi) + '</div>' + (x.bien ? '<div class="small"><b style="color:var(--ok)">✓ </b>' + nl2br(x.bien) + '</div>' : "") + (x.mieux ? '<div class="small" style="margin-top:4px"><b style="color:var(--a2)">↗ </b>' + nl2br(x.mieux) + '</div>' : "") + '</div>';
      });
    }
    return s;
  }
  function lvlColor(n) {
    var c = ["#7BC98F", "#7BC98F", "#9AD0A0", "#C7D48A", "#F2C14E", "#F5A35C", "#F5A35C", "#F08A6E", "#F07A8E", "#E8607A"];
    return c[Math.max(0, Math.min(9, n - 1))];
  }

  /* ---------- Journal ---------- */
  function vJournal() {
    var t = ui.journalTab;
    var s = '<div class="hdr"><h1>Journal</h1></div><div class="sub">Mettre des mots, c\'est déjà grandir.</div>';
    s += '<div class="seg"><button data-jt="emotions" class="' + (t === "emotions" ? "on" : "") + '">Émotions</button><button data-jt="victoires" class="' + (t === "victoires" ? "on" : "") + '">Victoires</button><button data-jt="anecdotes" class="' + (t === "anecdotes" ? "on" : "") + '">Anecdotes</button></div>';
    if (t === "emotions") {
      s += '<button class="btn pri full" data-act="emo-add" style="margin-bottom:14px">+ Nommer une émotion</button>';
      if (S.emotions.length) {
        var cnt = {}; S.emotions.forEach(function (e) { cnt[e.famille] = (cnt[e.famille] || 0) + 1; });
        s += '<div class="card"><div class="h3" style="margin-top:0">Ta météo intérieure</div><div class="chips">' + Object.keys(EMOTIONS).map(function (f) { return '<span class="chip">' + EMOTIONS[f].e + ' ' + f + ' · ' + (cnt[f] || 0) + '</span>'; }).join("") + '</div></div>';
      } else s += '<div class="empty"><div class="e">❤️</div>Chaque soir, prends 2 minutes pour nommer précisément ce que tu as ressenti. C\'est l\'entraînement le plus simple pour ouvrir tes émotions.</div>';
      S.emotions.slice().reverse().forEach(function (e) {
        var f = EMOTIONS[e.famille] || { c: "#888", e: "•" };
        s += '<div class="card entry" style="border-left-color:' + f.c + '"><div class="row"><div class="grow"><div style="font-weight:800">' + f.e + ' ' + esc(e.nuance || e.famille) + ' <span class="pill">' + esc(e.intensite) + '/10</span></div><div class="mut small">' + fdate(e.date) + '</div></div><button class="del" data-emo-del="' + e.id + '">✕</button></div>' + (e.quoi ? '<div class="small" style="margin-top:8px"><b>Ce qui s\'est passé :</b> ' + nl2br(e.quoi) + '</div>' : "") + (e.besoin ? '<div class="small" style="margin-top:4px"><b>Mon besoin :</b> ' + nl2br(e.besoin) + '</div>' : "") + '</div>';
      });
    } else if (t === "victoires") {
      s += '<div class="card mut small">La confiance = des preuves accumulées. Note chaque promesse tenue, chaque peur affrontée, même minuscule.</div><button class="btn pri full" data-act="vic-add" style="margin-bottom:14px">+ Ajouter une victoire</button>';
      if (!S.victoires.length) s += '<div class="empty"><div class="e">🏆</div>Ta première victoire t\'attend aujourd\'hui.</div>';
      S.victoires.slice().reverse().forEach(function (v) {
        s += '<div class="card row"><div style="font-size:22px">🏆</div><div class="grow"><div style="font-weight:650">' + nl2br(v.t) + '</div><div class="mut small">' + fdate(v.date) + '</div></div><button class="del" data-vic-del="' + v.id + '">✕</button></div>';
      });
    } else {
      s += '<div class="card mut small">Ton carnet d\'histoires : 3 à 5 anecdotes drôles, insolites ou avec une morale. Structure : situation normale → ça dérape → comment ça finit.</div><button class="btn pri full" data-act="ane-add" style="margin-bottom:14px">+ Nouvelle anecdote</button>';
      if (!S.anecdotes.length) s += '<div class="empty"><div class="e">📖</div>Pas encore d\'anecdote.<br>Pense à un moment drôle de ta semaine.</div>';
      S.anecdotes.slice().reverse().forEach(function (a) {
        s += '<div class="card"><div class="row"><div class="grow" style="font-weight:800">' + esc(a.t) + '</div><button class="del" data-ane-edit="' + a.id + '">Modifier</button><button class="del" data-ane-del="' + a.id + '">✕</button></div><div class="small" style="margin-top:6px">' + nl2br(a.txt) + '</div></div>';
      });
    }
    return s;
  }

  /* ---------- Profil ---------- */
  function vProfil() {
    var p = S.profil;
    var s = '<div class="hdr"><h1>Profil</h1></div>';
    s += '<div class="card"><div class="fld"><label>Ton prénom</label><input id="p-nom" value="' + esc(p.nom) + '" placeholder="Ton prénom"></div>';
    s += '<div class="fld" style="margin-bottom:0"><label>Ton objectif principal</label><input id="p-obj" value="' + esc(p.objectif) + '" placeholder="Ex. Oser parler aux femmes et trouver une relation sincère"></div></div>';

    s += '<div class="h2">🪞 Ma future version</div><div class="mut small" style="margin:-4px 0 8px">Rétro-ingénierie : quel homme vit naturellement la vie que tu veux ? Comment il parle, se tient, réagit, prend soin de lui ?</div><textarea id="p-future" placeholder="Il regarde les gens dans les yeux, il ose dire ce qu\'il pense avec douceur, il…">' + esc(p.future) + '</textarea>';

    s += '<div class="h2">💞 Le couple que je veux vivre</div><textarea id="p-couple" placeholder="Valeurs, quotidien, projets, ce qu\'on partage…">' + esc(p.couple) + '</textarea>';

    s += '<div class="h2">🧭 Mes 5 valeurs (par ordre)</div><div class="card">';
    for (var i = 0; i < 5; i++) s += '<div class="row" style="margin-bottom:' + (i < 4 ? 8 : 0) + 'px"><div class="lnum">' + (i + 1) + '</div><input class="p-val" data-i="' + i + '" value="' + esc(p.valeurs[i] || "") + '" placeholder="' + ["Respect", "Honnêteté", "Famille", "Évolution", "Liberté"][i] + '"></div>';
    s += '</div>';

    s += '<div class="h2">🚩 Mes red flags</div><textarea id="p-red" style="min-height:80px" placeholder="Ce que je n\'accepterai pas dans une relation…">' + esc(p.redflags) + '</textarea>';
    s += '<div class="mut small" id="saved" style="margin-top:6px;opacity:0">✓ Enregistré</div>';

    s += '<div class="h2">💾 Mes données</div><div class="card"><div class="mut small" style="margin-bottom:12px">Tout est enregistré sur ton iPhone. Fais une sauvegarde de temps en temps (iOS peut effacer les données d\'une app web non ouverte pendant plusieurs semaines).</div><div class="col"><button class="btn full" data-act="export">⬇️ Exporter une sauvegarde</button><button class="btn full" data-act="import">⬆️ Importer une sauvegarde</button><input type="file" id="imp" accept=".json,application/json" style="display:none"><button class="btn full danger" data-act="reset">Tout effacer</button></div></div>';

    s += '<div class="h2">📲 Installer sur l\'iPhone</div><div class="card small"><ol style="margin-left:18px"><li>Ouvre l\'adresse de l\'app dans <b>Safari</b>.</li><li>Touche le bouton <b>Partager</b> (carré avec une flèche).</li><li>Choisis <b>« Sur l\'écran d\'accueil »</b> puis <b>Ajouter</b>.</li><li>Lance l\'app depuis son icône : plein écran, fonctionne hors ligne.</li></ol></div>';
    s += '<div class="mut small" style="text-align:center;margin:20px 0 6px">Module Sed · v1.0 · fait pour toi ❤️</div>';
    return s;
  }

  /* =========================================================
     FEUILLES (formulaires)
     ========================================================= */
  function openSheet(html, onMount) {
    closeSheet();
    var ov = document.createElement("div"); ov.className = "ov"; ov.id = "ov";
    var sh = document.createElement("div"); sh.className = "sheet"; sh.id = "sheet";
    sh.innerHTML = '<div class="grab"></div>' + html;
    ov.addEventListener("click", closeSheet);
    document.body.appendChild(ov); document.body.appendChild(sh);
    $$("[data-close]", sh).forEach(function (b) { b.addEventListener("click", closeSheet); });
    if (onMount) onMount(sh);
  }
  function closeSheet() { var a = $("#ov"), b = $("#sheet"); if (a) a.remove(); if (b) b.remove(); }

  function sheetTerrain() {
    openSheet('<h2>📍 Noter une interaction</h2><div class="fld"><label>Qu\'est-ce que tu as fait ?</label><textarea id="f-quoi" style="min-height:80px" placeholder="Ex. J\'ai lancé un small talk avec une fille à la salle"></textarea></div><div class="fld"><label>Ce qui a bien marché</label><textarea id="f-bien" style="min-height:70px" placeholder="Ex. J\'ai souri, j\'ai fait une supposition qui l\'a fait rire"></textarea></div><div class="fld"><label>Ce que j\'améliore la prochaine fois</label><textarea id="f-mieux" style="min-height:70px" placeholder="Ex. Relancer sur ce qu\'elle dit au lieu de changer de sujet"></textarea></div><div class="fld"><label>Ressenti : <span id="f-rv">3</span> / 5</label><input type="range" id="f-res" min="1" max="5" value="3"></div><div class="row"><button class="btn grow" data-close>Annuler</button><button class="btn pri grow" id="f-ok">Enregistrer</button></div>', function (sh) {
      $("#f-res", sh).addEventListener("input", function () { $("#f-rv", sh).textContent = this.value; });
      $("#f-ok", sh).addEventListener("click", function () {
        var q = $("#f-quoi", sh).value.trim(); if (!q) { toast("Décris ce que tu as fait"); return; }
        S.terrain.push({ id: uid(), date: new Date().toISOString(), quoi: q, bien: $("#f-bien", sh).value.trim(), mieux: $("#f-mieux", sh).value.trim(), ressenti: +$("#f-res", sh).value });
        markActive(); closeSheet(); confetti(); toast("Bravo, tu as osé 🔥"); ui.defisTab = "terrain";
        if (location.hash === "#/defis") route(); else location.hash = "#/defis";
      });
    });
  }

  function sheetEmotion() {
    var fam = null, nu = null;
    var fams = Object.keys(EMOTIONS);
    openSheet('<h2>❤️ Nommer une émotion</h2><div class="fld"><label>1. La famille</label><div class="chips" id="e-fam">' + fams.map(function (f) { return '<button class="chip" data-f="' + f + '">' + EMOTIONS[f].e + " " + f + "</button>"; }).join("") + '</div></div><div class="fld" id="e-nu-w" style="display:none"><label>2. Le mot précis</label><div class="chips" id="e-nu"></div></div><div class="fld"><label>Intensité : <span id="e-iv">5</span> / 10</label><input type="range" id="e-int" min="1" max="10" value="5"></div><div class="fld"><label>Qu\'est-ce qui l\'a déclenchée ?</label><textarea id="e-quoi" style="min-height:70px"></textarea></div><div class="fld"><label>De quoi ai-je besoin ?</label><textarea id="e-bes" style="min-height:60px" placeholder="Ex. être rassuré, me reposer, oser, parler à quelqu\'un…"></textarea></div><div class="row"><button class="btn grow" data-close>Annuler</button><button class="btn pri grow" id="e-ok">Enregistrer</button></div>', function (sh) {
      $("#e-int", sh).addEventListener("input", function () { $("#e-iv", sh).textContent = this.value; });
      $$("#e-fam .chip", sh).forEach(function (b) {
        b.addEventListener("click", function () {
          fam = b.getAttribute("data-f"); nu = null;
          $$("#e-fam .chip", sh).forEach(function (x) { x.classList.toggle("on", x === b); });
          $("#e-nu-w", sh).style.display = "block";
          $("#e-nu", sh).innerHTML = EMOTIONS[fam].n.map(function (n) { return '<button class="chip" data-n="' + esc(n) + '">' + esc(n) + "</button>"; }).join("");
          $$("#e-nu .chip", sh).forEach(function (c) {
            c.addEventListener("click", function () { nu = c.getAttribute("data-n"); $$("#e-nu .chip", sh).forEach(function (x) { x.classList.toggle("on", x === c); }); });
          });
        });
      });
      $("#e-ok", sh).addEventListener("click", function () {
        if (!fam) { toast("Choisis une famille d'émotion"); return; }
        S.emotions.push({ id: uid(), date: new Date().toISOString(), famille: fam, nuance: nu || fam, intensite: +$("#e-int", sh).value, quoi: $("#e-quoi", sh).value.trim(), besoin: $("#e-bes", sh).value.trim() });
        markActive(); closeSheet(); toast("Émotion nommée ✓"); ui.journalTab = "emotions";
        if (location.hash === "#/journal") route(); else location.hash = "#/journal";
      });
    });
  }

  function sheetVictoire() {
    openSheet('<h2>🏆 Nouvelle victoire</h2><div class="fld"><label>Qu\'as-tu accompli ?</label><textarea id="v-t" style="min-height:90px" placeholder="Ex. J\'ai tenu le regard de la serveuse et je lui ai souri"></textarea></div><div class="row"><button class="btn grow" data-close>Annuler</button><button class="btn pri grow" id="v-ok">Enregistrer</button></div>', function (sh) {
      $("#v-ok", sh).addEventListener("click", function () {
        var t = $("#v-t", sh).value.trim(); if (!t) return;
        S.victoires.push({ id: uid(), date: new Date().toISOString(), t: t });
        markActive(); closeSheet(); confetti(); toast("Une preuve de plus 💪"); ui.journalTab = "victoires";
        if (location.hash === "#/journal") route(); else location.hash = "#/journal";
      });
    });
  }

  function sheetAnecdote(existing) {
    var a = existing || { t: "", txt: "" };
    openSheet('<h2>📖 ' + (existing ? "Modifier l'anecdote" : "Nouvelle anecdote") + '</h2><div class="fld"><label>Titre</label><input id="a-t" value="' + esc(a.t) + '" placeholder="Ex. Le canapé coincé dans l\'escalier"></div><div class="fld"><label>L\'histoire</label><textarea id="a-x" style="min-height:150px" placeholder="Situation normale → ça dérape → comment ça finit">' + esc(a.txt) + '</textarea></div><div class="row"><button class="btn grow" data-close>Annuler</button><button class="btn pri grow" id="a-ok">Enregistrer</button></div>', function (sh) {
      $("#a-ok", sh).addEventListener("click", function () {
        var t = $("#a-t", sh).value.trim(), x = $("#a-x", sh).value.trim(); if (!t && !x) return;
        if (existing) { existing.t = t || "Sans titre"; existing.txt = x; }
        else S.anecdotes.push({ id: uid(), t: t || "Sans titre", txt: x });
        markActive(); closeSheet(); toast("Anecdote enregistrée"); route();
      });
    });
  }

  function sheetEchAdd() {
    openSheet('<h2>🪜 Ajouter une peur</h2><div class="fld"><label>Ce qui te fait peur</label><input id="c-t" placeholder="Ex. Demander son prénom à la caissière"></div><div class="fld"><label>Difficulté : <span id="c-nv">3</span> / 10</label><input type="range" id="c-n" min="1" max="10" value="3"></div><div class="row"><button class="btn grow" data-close>Annuler</button><button class="btn pri grow" id="c-ok">Ajouter</button></div>', function (sh) {
      $("#c-n", sh).addEventListener("input", function () { $("#c-nv", sh).textContent = this.value; });
      $("#c-ok", sh).addEventListener("click", function () {
        var t = $("#c-t", sh).value.trim(); if (!t) return;
        S.echelle.push({ id: uid(), t: t, n: +$("#c-n", sh).value, done: false });
        save(); closeSheet(); route();
      });
    });
  }

  function sheetEchSugg() {
    var have = {}; S.echelle.forEach(function (e) { have[e.t] = true; });
    var list = ECHELLE_SUGGESTIONS.filter(function (x) { return !have[x[1]]; });
    openSheet('<h2>💡 Suggestions</h2><div class="mut small" style="margin:-6px 0 12px">Touche pour sélectionner, ajuste ensuite le niveau selon TA peur réelle.</div>' + (list.length ? list.map(function (x, i) { return '<button class="chk" data-s="' + i + '"><div class="box"></div><div class="grow"><div class="t">' + esc(x[1]) + '</div></div><div class="lvl" style="background:' + lvlColor(x[0]) + ';width:30px;height:30px;font-size:13px">' + x[0] + '</div></button>'; }).join("") : '<div class="empty">Toutes les suggestions sont déjà dans ton échelle.</div>') + '<div class="row" style="margin-top:8px"><button class="btn grow" data-close>Fermer</button><button class="btn pri grow" id="s-ok">Ajouter la sélection</button></div>', function (sh) {
      var sel = {};
      $$("[data-s]", sh).forEach(function (b) {
        b.addEventListener("click", function () { var i = b.getAttribute("data-s"); sel[i] = !sel[i]; b.classList.toggle("on", sel[i]); $(".box", b).textContent = sel[i] ? "✓" : ""; });
      });
      $("#s-ok", sh).addEventListener("click", function () {
        var n = 0;
        Object.keys(sel).forEach(function (i) { if (sel[i]) { S.echelle.push({ id: uid(), t: list[i][1], n: list[i][0], done: false }); n++; } });
        save(); closeSheet(); if (n) toast(n + " marche" + (n > 1 ? "s" : "") + " ajoutée" + (n > 1 ? "s" : "")); route();
      });
    });
  }

  function sheetWelcome() {
    openSheet('<div style="text-align:center;font-size:52px;margin:6px 0">🌱</div><h2 style="text-align:center">Bienvenue dans Module Sed</h2><p class="mut" style="text-align:center;margin-bottom:16px">Ta formation pour te débloquer, mieux communiquer, ouvrir tes émotions et construire une belle relation. Ici, on apprend un peu… et on pratique beaucoup.</p><div class="fld"><label>Comment tu t\'appelles ?</label><input id="w-n" placeholder="Ton prénom"></div><button class="btn pri full" id="w-ok">C\'est parti</button>', function (sh) {
      $("#w-ok", sh).addEventListener("click", function () {
        S.profil.nom = $("#w-n", sh).value.trim(); S.welcomed = true; markActive(); closeSheet(); route();
      });
    });
  }

  /* =========================================================
     LIAISONS D'ÉVÉNEMENTS
     ========================================================= */
  function bind(p) {
    var app = $("#app");

    $$("[data-go]", app).forEach(function (b) { b.addEventListener("click", function () { location.hash = b.getAttribute("data-go"); }); });

    /* actions génériques */
    $$("[data-act]", app).forEach(function (b) {
      b.addEventListener("click", function () {
        var a = b.getAttribute("data-act");
        if (a === "defi") { S.defis[today()] = true; markActive(); confetti(); toast("Défi relevé 🔥"); route(); }
        else if (a === "quick-terrain" || a === "terrain-add") sheetTerrain();
        else if (a === "quick-emo" || a === "emo-add") sheetEmotion();
        else if (a === "quick-vic" || a === "vic-add") sheetVictoire();
        else if (a === "ane-add") sheetAnecdote();
        else if (a === "ech-add") sheetEchAdd();
        else if (a === "ech-sugg") sheetEchSugg();
        else if (a === "lu") {
          S.lus[b.getAttribute("data-k")] = true; markActive();
          var m = mod(p[1]); var i = parseInt(p[2], 10);
          toast("Leçon lue ✓");
          if (m && i + 1 < m.lecons.length) location.hash = "#/lecon/" + m.id + "/" + (i + 1);
          else if (m) { confetti(); location.hash = "#/module/" + m.id + "/pratique"; }
        }
        else if (a === "quiz-start") { ui.quiz = { id: p[1], i: 0, score: 0, ans: null }; route(); }
        else if (a === "quiz-next") {
          ui.quiz.i++; ui.quiz.ans = null;
          var mm = mod(p[1]);
          if (ui.quiz.i >= mm.quiz.length) {
            S.quiz[mm.id] = { score: ui.quiz.score, total: mm.quiz.length, date: new Date().toISOString() }; markActive();
            if (ui.quiz.score / mm.quiz.length >= 0.6) confetti();
          }
          route();
        }
        else if (a === "export") doExport();
        else if (a === "import") $("#imp").click();
        else if (a === "reset") {
          if (confirm("Effacer toutes tes données ? Cette action est définitive.")) {
            if (confirm("Vraiment tout effacer ? Pense à exporter une sauvegarde avant.")) {
              localStorage.removeItem(KEY); S = load(); toast("Données effacées"); location.hash = "#/home"; route();
            }
          }
        }
      });
    });

    /* quiz : réponses */
    $$("[data-opt]", app).forEach(function (b) {
      b.addEventListener("click", function () {
        if (!ui.quiz || ui.quiz.ans != null) return;
        var m = mod(p[1]); var i = +b.getAttribute("data-opt");
        ui.quiz.ans = i; if (i === m.quiz[ui.quiz.i].a) ui.quiz.score++;
        route();
      });
    });

    /* exercices */
    $$("[data-exo]", app).forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.getAttribute("data-exo");
        if (S.exos[k]) delete S.exos[k];
        else { S.exos[k] = new Date().toISOString(); confetti(); toast("Exercice validé 💪"); }
        markActive(); route();
      });
    });

    /* notes module */
    var nt = $("#notes", app);
    if (nt) {
      var tm;
      nt.addEventListener("input", function () {
        S.notes[p[1]] = nt.value; clearTimeout(tm);
        tm = setTimeout(function () { save(); var sv = $("#saved"); if (sv) { sv.style.opacity = 1; setTimeout(function () { sv.style.opacity = 0; }, 1200); } }, 400);
      });
    }

    /* défis */
    $$("[data-dt]", app).forEach(function (b) { b.addEventListener("click", function () { ui.defisTab = b.getAttribute("data-dt"); route(); }); });
    $$("[data-ech-done]", app).forEach(function (b) {
      b.addEventListener("click", function () {
        var e = findId(S.echelle, b.getAttribute("data-ech-done")); if (!e) return;
        e.done = true; e.date = new Date().toISOString();
        S.victoires.push({ id: uid(), date: e.date, t: "Marche de courage niveau " + e.n + " : " + e.t });
        markActive(); confetti(); toast("Marche franchie 🪜"); route();
      });
    });
    $$("[data-ech-undo]", app).forEach(function (b) { b.addEventListener("click", function () { var e = findId(S.echelle, b.getAttribute("data-ech-undo")); if (e) { e.done = false; save(); route(); } }); });
    $$("[data-ech-del]", app).forEach(function (b) { b.addEventListener("click", function () { delId("echelle", b.getAttribute("data-ech-del")); }); });
    $$("[data-ter-del]", app).forEach(function (b) { b.addEventListener("click", function () { if (confirm("Supprimer cette interaction ?")) delId("terrain", b.getAttribute("data-ter-del")); }); });

    /* journal */
    $$("[data-jt]", app).forEach(function (b) { b.addEventListener("click", function () { ui.journalTab = b.getAttribute("data-jt"); route(); }); });
    $$("[data-emo-del]", app).forEach(function (b) { b.addEventListener("click", function () { if (confirm("Supprimer cette entrée ?")) delId("emotions", b.getAttribute("data-emo-del")); }); });
    $$("[data-vic-del]", app).forEach(function (b) { b.addEventListener("click", function () { if (confirm("Supprimer cette victoire ?")) delId("victoires", b.getAttribute("data-vic-del")); }); });
    $$("[data-ane-del]", app).forEach(function (b) { b.addEventListener("click", function () { if (confirm("Supprimer cette anecdote ?")) delId("anecdotes", b.getAttribute("data-ane-del")); }); });
    $$("[data-ane-edit]", app).forEach(function (b) { b.addEventListener("click", function () { sheetAnecdote(findId(S.anecdotes, b.getAttribute("data-ane-edit"))); }); });

    /* profil */
    if (p[0] === "profil") {
      var tm2;
      var sv = function () {
        S.profil.nom = $("#p-nom").value.trim();
        S.profil.objectif = $("#p-obj").value;
        S.profil.future = $("#p-future").value;
        S.profil.couple = $("#p-couple").value;
        S.profil.redflags = $("#p-red").value;
        $$(".p-val").forEach(function (x) { S.profil.valeurs[+x.getAttribute("data-i")] = x.value; });
        clearTimeout(tm2);
        tm2 = setTimeout(function () { save(); var el = $("#saved"); if (el) { el.style.opacity = 1; setTimeout(function () { el.style.opacity = 0; }, 1200); } }, 400);
      };
      $$("#p-nom,#p-obj,#p-future,#p-couple,#p-red,.p-val").forEach(function (x) { x.addEventListener("input", sv); });
      $("#imp").addEventListener("change", doImport);
    }
  }

  function findId(arr, id) { for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i]; return null; }
  function delId(key, id) { S[key] = S[key].filter(function (x) { return x.id !== id; }); save(); route(); }

  /* ---------------- Export / import ---------------- */
  function doExport() {
    var data = JSON.stringify({ app: "module-sed", version: 1, exported: new Date().toISOString(), data: S }, null, 2);
    var name = "module-sed-sauvegarde-" + today() + ".json";
    try {
      var file = new File([data], name, { type: "application/json" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: "Sauvegarde Module Sed" }).catch(function () {});
        return;
      }
    } catch (e) {}
    var blob = new Blob([data], { type: "application/json" });
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
    toast("Sauvegarde exportée");
  }
  function doImport(ev) {
    var f = ev.target.files && ev.target.files[0]; if (!f) return;
    var r = new FileReader();
    r.onload = function () {
      try {
        var j = JSON.parse(r.result); var d = j.data || j;
        if (!d.profil || !d.lus) throw new Error("format");
        if (!confirm("Remplacer tes données actuelles par cette sauvegarde ?")) return;
        localStorage.setItem(KEY, JSON.stringify(d)); S = load(); toast("Sauvegarde restaurée ✓"); route();
      } catch (e) { toast("Fichier de sauvegarde invalide"); }
    };
    r.readAsText(f);
  }

  /* ---------------- Démarrage ---------------- */
  route();
  if (!S.welcomed && !S.profil.nom) setTimeout(sheetWelcome, 350);

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
})();
