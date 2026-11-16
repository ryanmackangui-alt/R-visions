/* =========================================================
   MOTEUR
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const store = {
  get(k, d) { try { const v = localStorage.getItem('pi_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('pi_' + k, JSON.stringify(v)); } catch (e) { } },
  del(k) { try { localStorage.removeItem('pi_' + k); } catch (e) { } }
};
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('on'), 1800); }
const pct = (a, b) => b ? Math.round(a / b * 100) : 0;

/* Questions « numéros d’articles » générées depuis le mémento */
const ALLREF = ARTS.concat(CASES_LAW);
ALLREF.forEach(([ref, txt], i) => {
  const others = shuffle(ALLREF.filter((x, j) => j !== i));
  QB.push({ id: 'art-a' + i, ch: 'art', text: 'Quelle référence correspond à : « ' + txt + ' » ?', opts: [ref, ...others.slice(0, 3).map(x => x[0])], exp: ref + ' — ' + txt + '.' });
  QB.push({ id: 'art-b' + i, ch: 'art', text: 'Que prévoit / décide : ' + ref + ' ?', opts: [txt, ...others.slice(3, 6).map(x => x[1])], exp: ref + ' — ' + txt + '.' });
});
const LABELS = Object.assign({}, CH_LABEL, { art: 'Numéros d’articles & arrêts' });
const CARDS = DEFS.map(([f, b, ch]) => ({ f, b, ch })).concat(ALLREF.map(([ref, txt, ch]) => ({ f: ref, b: txt, ch, art: 1 })), ALLREF.map(([ref, txt, ch]) => ({ f: 'Quel texte ? ' + txt, b: ref, ch, art: 1 })));

const app = $('#app');
let cleanup = null;
const read = () => store.get('read', {});
const known = () => store.get('known', {});
const best = () => store.get('best', {});
const wrongSet = () => store.get('wrong', {});
const done = () => store.get('done', {});
function mark(k) { const d = done(); d[k] = 1; store.set('done', d); }

/* ---------- Accueil ---------- */
function viewHome() {
  const r = read(), kn = known(), b = best(), d = done();
  const nRead = CHAPTERS.filter(c => r[c.id]).length, nKnown = CARDS.filter((c, i) => kn[i]).length;
  const nWrong = Object.keys(wrongSet()).length;
  const tonight = [
    ['Diagnostic à froid — 16 questions, avant toute relecture. Se tromper d’abord fait mieux retenir ensuite.', '#quiz/diag', !!d.diag, '8 min'],
    ['Fiche express, puis lecture du cours en commençant par tes chapitres les plus faibles au diagnostic. Lis surtout les encadrés orange : ce sont les erreurs de tes notes.', '#fiche', nRead >= CHAPTERS.length, '50 min'],
    ['QCM thème par thème, corrigé immédiat. Viser 80 % partout ; refaire tout thème en dessous.', '#quiz', Object.keys(CH_LABEL).every(k => (b[k] || 0) >= 80), '35 min'],
    ['Flashcards : les cartes ratées reviennent jusqu’à ce que tu les saches. Numéros d’articles inclus.', '#cartes', nKnown >= CARDS.length * .8, '20 min'],
    ['Pause de 10 minutes, sans écran. Elle fait partie du programme.', '#home', false, '10 min'],
    ['Deux questions de cours et deux cas pratiques : rédige de tête, puis corrige-toi avec la grille.', '#cas', (d.cas || 0) >= 4, '30 min'],
    ['Examen blanc chronométré, puis reprise de « Mes erreurs ».', '#examen', b.exam != null && b.exam >= 14, '30 min']
  ];
  const morning = [
    ['Mes erreurs : refaire uniquement les questions ratées hier', '#quiz/wrong'],
    ['Fiche express, récitée à voix haute, écran caché', '#fiche'],
    ['Pièges : dernière lecture', '#pieges']
  ];
  app.innerHTML = `
<div class="hero">
  <div class="card">
    <span class="pill acc">R5.02 · Environnement juridique · A. Mbotaingar</span>
    <h1 style="margin-top:10px">Réviser la propriété intellectuelle</h1>
    <p class="muted">Introduction, droit d’auteur (conditions, droits patrimoniaux, droit moral) et titularité. Tes notes ont été complétées et confrontées au Code de la propriété intellectuelle : chaque écart est signalé.</p>
    <div class="row" style="margin-top:14px"><a class="btn pri" href="#quiz/diag">Commencer par le diagnostic →</a><a class="btn" href="#fiche">Fiche express</a><a class="btn" href="#cours">Cours</a></div>
  </div>
  <div class="card grid" style="gap:16px">
    <div class="stat"><span class="muted small">Chapitres lus</span><span class="v">${nRead} / ${CHAPTERS.length}</span><div class="bar"><i style="width:${pct(nRead, CHAPTERS.length)}%"></i></div></div>
    <div class="stat"><span class="muted small">Flashcards sues</span><span class="v">${nKnown} / ${CARDS.length}</span><div class="bar"><i style="width:${pct(nKnown, CARDS.length)}%"></i></div></div>
    <div class="stat"><span class="muted small">Meilleur examen blanc</span><span class="v">${b.exam == null ? '—' : String(b.exam.toFixed(1)).replace('.', ',') + ' / 20'}</span></div>
    <div class="row"><span class="pill ${nWrong ? 'bad' : 'ok'}">${nWrong} question${nWrong > 1 ? 's' : ''} à revoir</span>${nWrong ? '<a class="btn sm" href="#quiz/wrong">Les refaire</a>' : ''}</div>
  </div>
</div>
<h2 style="margin-top:28px">Programme de ce soir — environ 3 heures</h2>
<p class="muted">L’ordre compte : on se teste d’abord, on lit ensuite, on se reteste. Relire sans se tester donne l’impression de savoir sans laisser de trace.</p>
<ol class="steps">${tonight.map(([t, h, ok, time]) => `<li class="${ok ? 'done' : ''}"><div><a href="${h}" style="font-weight:600;color:var(--ink);text-decoration:none">${t}</a></div><span class="muted small" style="white-space:nowrap">${time}</span></li>`).join('')}</ol>
<p class="muted small" style="margin-top:10px">Moins de temps ? Garde les étapes 1, 3, 4 et 7, et remplace la lecture du cours par la fiche express et les pièges. Et dors : la mémoire se consolide pendant le sommeil.</p>
<h2 style="margin-top:28px">Demain matin — 15 minutes</h2>
<ol class="steps">${morning.map(([t, h]) => `<li><div><a href="${h}" style="font-weight:600;color:var(--ink);text-decoration:none">${t}</a></div></li>`).join('')}</ol>
<h2 style="margin-top:28px">Scores par thème</h2>
<div class="grid g3">${Object.entries(LABELS).map(([k, l]) => `<a class="card" style="text-decoration:none;color:inherit;padding:14px" href="#quiz/${k}"><div class="row" style="justify-content:space-between"><b>${l}</b><span class="pill ${b[k] >= 80 ? 'ok' : b[k] != null ? 'bad' : ''}">${b[k] != null ? b[k] + ' %' : 'à faire'}</span></div><div class="bar" style="margin-top:10px"><i style="width:${b[k] || 0}%"></i></div></a>`).join('')}</div>
<div class="card" style="margin-top:16px"><div class="row" style="justify-content:space-between"><span class="muted small">La progression est enregistrée dans ce navigateur uniquement.</span><button class="btn ghost" id="reset">Réinitialiser ma progression</button></div></div>`;
  $('#reset').onclick = () => { if (confirm('Effacer toute la progression ?')) { ['read', 'known', 'best', 'wrong', 'done'].forEach(store.del); viewHome(); toast('Progression réinitialisée'); } };
}

/* ---------- Cours ---------- */
function viewCours(arg) {
  const r = read(), b = best();
  const cur = CHAPTERS.find(c => c.id === arg) || CHAPTERS[0];
  const i = CHAPTERS.indexOf(cur), nx = CHAPTERS[i + 1];
  app.innerHTML = `<div class="course">
<nav class="toc">${CHAPTERS.map(c => `<a href="#cours/${c.id}" class="${c === cur ? 'on' : ''} ${r[c.id] ? 'read' : ''}"><span class="n">${c.n}</span><span>${c.title}</span></a>`).join('')}</nav>
<article class="ch">
  <div class="row"><span class="pill acc">Chapitre ${cur.n}</span><span class="pill">${cur.time}</span>${b[cur.id] != null ? `<span class="pill ${b[cur.id] >= 80 ? 'ok' : 'bad'}">QCM : ${b[cur.id]} %</span>` : ''}</div>
  <h2 style="margin-top:10px">${cur.title}</h2>
  ${cur.html}
  <div class="card" style="margin-top:24px"><b>Avant de passer à la suite</b><p class="muted" style="margin:.3em 0 .9em">Ferme les yeux et récite les trois idées du chapitre. Ce que tu n’arrives pas à redire, tu ne le sais pas encore.</p>
  <div class="row"><a class="btn pri" href="#quiz/${cur.id}" id="mk">Me tester sur ce chapitre →</a>${nx ? `<a class="btn" href="#cours/${nx.id}" id="mk2">Chapitre suivant</a>` : ''}</div></div>
</article></div>`;
  const m = () => { const x = read(); x[cur.id] = 1; store.set('read', x); };
  $('#mk').onclick = m; if ($('#mk2')) $('#mk2').onclick = m;
}

/* ---------- Fiche express ---------- */
function viewFiche() {
  app.innerHTML = `<h2>Fiche express</h2><p class="muted">Ce qu’il faut pouvoir réciter sans support. Lis un bloc, cache l’écran, redis-le à voix haute, vérifie.</p>${EXPRESS}
<div class="row" style="justify-content:center;margin-top:18px"><a class="btn pri" href="#cartes">S’entraîner en flashcards →</a><a class="btn" href="#pieges">Voir les pièges</a></div>`;
}

/* ---------- Articles & arrêts ---------- */
function viewArticles() {
  const row = ([ref, txt, ch]) => `<tr data-s="${esc((ref + ' ' + txt).toLowerCase())}"><td><span class="art">${ref}</span></td><td>${txt}</td><td><a class="small" href="#cours/${ch}">${LABELS[ch]}</a></td></tr>`;
  app.innerHTML = `<h2>Articles & arrêts</h2>
<p class="muted">M. Mbotaingar est précis sur les références : voici toutes celles du cours. Masque la colonne de droite avec la main et retrouve le contenu ; puis l’inverse.</p>
<div class="row" style="margin:10px 0"><input type="search" id="f" placeholder="Filtrer : « L. 121 », « logiciel », « 2012 »…" aria-label="Filtrer"><a class="btn sm" href="#quiz/art">QCM sur les numéros →</a></div>
<div class="tw"><table class="t" id="tb"><tr><th style="width:190px">Référence</th><th>Contenu</th><th style="width:170px">Chapitre</th></tr>${ARTS.map(row).join('')}<tr><th colspan="3">Jurisprudence et textes internationaux</th></tr>${CASES_LAW.map(row).join('')}</table></div>
<div class="box tip"><span class="bt">Astuce mémo</span><p><b>L. 111</b> nature du droit · <b>L. 112</b> œuvres protégées · <b>L. 113</b> titulaires · <b>L. 121</b> droit moral · <b>L. 122</b> droits patrimoniaux · <b>L. 123</b> durée · <b>L. 131-132</b> contrats · <b>L. 331-335</b> sanctions. Le numéro suit le plan du code : retrouve le thème, tu retrouves l’article.</p></div>`;
  $('#f').oninput = e => { const v = e.target.value.toLowerCase(); $$('#tb tr[data-s]').forEach(tr => tr.style.display = tr.dataset.s.includes(v) ? '' : 'none'); };
}

/* ---------- Flashcards (les cartes ratées reviennent) ---------- */
function viewCartes(arg) {
  const mode = arg || 'todo';
  const kn = known();
  let idx = CARDS.map((c, i) => i).filter(i => mode === 'all' ? true : mode === 'art' ? CARDS[i].art && !kn[i] : !kn[i]);
  let queue = shuffle(idx), flipped = false, seen = 0;
  const head = `<h2>Flashcards</h2><div class="row" style="margin-bottom:6px">
<a class="btn sm ${mode === 'todo' ? 'pri' : ''}" href="#cartes/todo">À apprendre</a><a class="btn sm ${mode === 'art' ? 'pri' : ''}" href="#cartes/art">Articles seulement</a><a class="btn sm ${mode === 'all' ? 'pri' : ''}" href="#cartes/all">Toutes (${CARDS.length})</a></div>
<p class="muted small">Réponds à voix haute <b>avant</b> de retourner la carte. « À revoir » la remet dans la pile quelques cartes plus loin.</p>`;
  function draw() {
    if (!queue.length) { app.innerHTML = head + `<div class="card" style="text-align:center;max-width:640px;margin:18px auto"><h3 style="margin-top:0">Pile terminée</h3><p class="muted">${seen} carte${seen > 1 ? 's' : ''} vues. Reviens-y demain matin : c’est le rappel espacé qui fixe.</p><div class="row" style="justify-content:center"><a class="btn pri" href="#quiz">Passer aux QCM →</a><a class="btn" href="#cartes/all">Tout revoir</a></div></div>`; return; }
    const i = queue[0], c = CARDS[i];
    app.innerHTML = head + `<div class="row" style="justify-content:center"><span class="pill">${queue.length} restante${queue.length > 1 ? 's' : ''}</span><span class="pill acc">${LABELS[c.ch] || ''}</span></div>
<div class="flash"><div class="in" id="card" tabindex="0" role="button" aria-label="Retourner la carte">${flipped
        ? `<div class="f b"><span class="muted small">${esc(c.f)}</span><div style="font-size:1.08rem">${esc(c.b)}</div></div>`
        : `<div class="f"><div class="big">${esc(c.f)}</div><span class="muted small">Toucher pour retourner</span></div>`}</div></div>
<div class="row" style="justify-content:center">${flipped ? `<button class="btn" id="no">À revoir</button><button class="btn pri" id="yes">Je savais</button>` : `<button class="btn pri" id="flip">Retourner</button>`}</div>`;
    const fl = () => { flipped = !flipped; draw(); };
    $('#card').onclick = fl; if ($('#flip')) $('#flip').onclick = fl;
    if ($('#yes')) $('#yes').onclick = () => { const k = known(); k[i] = 1; store.set('known', k); queue.shift(); seen++; flipped = false; draw(); };
    if ($('#no')) $('#no').onclick = () => { const k = known(); delete k[i]; store.set('known', k); queue.shift(); queue.splice(Math.min(3, queue.length), 0, i); seen++; flipped = false; draw(); };
  }
  const onKey = e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); const b = $('#flip') || $('#yes'); if (b) b.click(); } };
  document.addEventListener('keydown', onKey); cleanup = () => document.removeEventListener('keydown', onKey);
  draw();
}

/* ---------- QCM ---------- */
function prepQ(item) { const opts = shuffle(item.opts.map((t, i) => ({ t, ok: i === 0 }))); return Object.assign({}, item, { opts }); }
function pick(ch, n) { return shuffle(QB.filter(x => x.ch === ch)).slice(0, n); }
function viewQuiz(arg) {
  if (!arg) return quizSetup();
  if (arg === 'diag') return runQuiz(shuffle(Object.keys(CH_LABEL).flatMap(k => pick(k, 2))), 'diag', 'Diagnostic à froid');
  if (arg === 'wrong') { const w = wrongSet(); const qs = QB.filter(x => w[x.id]); if (!qs.length) { app.innerHTML = `<div class="card"><h3 style="margin-top:0">Aucune erreur enregistrée</h3><p class="muted">Fais d’abord un QCM ; tes questions ratées se rangeront ici.</p><a class="btn pri" href="#quiz">Choisir un QCM</a></div>`; return; } return runQuiz(shuffle(qs), 'wrong', 'Mes erreurs'); }
  if (arg === 'mix') return runQuiz(shuffle(QB).slice(0, 25), 'mix', 'Tout mélangé');
  if (LABELS[arg]) return runQuiz(shuffle(QB.filter(x => x.ch === arg)).slice(0, arg === 'art' ? 20 : 99), arg, LABELS[arg]);
  quizSetup();
}
function quizSetup() {
  const b = best(), nW = Object.keys(wrongSet()).length;
  app.innerHTML = `<h2>QCM</h2><p class="muted">Correction immédiate et expliquée. Chaque question ratée est gardée dans « Mes erreurs » jusqu’à ce que tu la réussisses.</p>
<div class="grid g3" style="margin-bottom:14px">
<a class="card" style="text-decoration:none;color:inherit" href="#quiz/diag"><b>Diagnostic à froid</b><p class="muted small" style="margin:.3em 0 0">16 questions, 2 par chapitre. À faire en premier.</p></a>
<a class="card" style="text-decoration:none;color:inherit" href="#quiz/mix"><b>Tout mélangé</b><p class="muted small" style="margin:.3em 0 0">25 questions tirées dans tout le cours : mélanger les thèmes force à reconnaître de quoi on parle.</p></a>
<a class="card" style="text-decoration:none;color:inherit" href="#quiz/wrong"><b>Mes erreurs</b> <span class="pill ${nW ? 'bad' : 'ok'}">${nW}</span><p class="muted small" style="margin:.3em 0 0">Uniquement ce que tu as raté.</p></a>
</div>
<h3>Par thème</h3>
<div class="grid g3">${Object.entries(LABELS).map(([k, l]) => `<a class="card" style="text-decoration:none;color:inherit;padding:14px" href="#quiz/${k}"><div class="row" style="justify-content:space-between"><b>${l}</b><span class="pill ${b[k] >= 80 ? 'ok' : b[k] != null ? 'bad' : ''}">${b[k] != null ? b[k] + ' %' : QB.filter(x => x.ch === k).length + ' q.'}</span></div></a>`).join('')}</div>`;
}
function runQuiz(items, keyName, title) {
  const qs = items.map(prepQ); let i = 0, score = 0; const per = {};
  function draw() {
    if (i >= qs.length) return end();
    const it = qs[i];
    app.innerHTML = `<div class="card" style="max-width:780px;margin:0 auto">
<div class="row" style="justify-content:space-between"><span class="pill acc">${title}</span><span class="muted small">${i + 1} / ${qs.length} · ${score} bonne${score > 1 ? 's' : ''}</span></div>
<div class="bar" style="margin-top:10px"><i style="width:${pct(i, qs.length)}%"></i></div>
<p class="qtext">${esc(it.text)}</p>
<div id="opts">${it.opts.map((o, k) => `<button class="opt" data-k="${k}">${esc(o.t)}</button>`).join('')}</div>
<div id="fb"></div></div>`;
    $$('#opts .opt').forEach(btn => btn.onclick = () => {
      const o = it.opts[+btn.dataset.k], w = wrongSet();
      $$('#opts .opt').forEach((b2, k) => { b2.disabled = true; if (it.opts[k].ok) b2.classList.add('good'); });
      per[it.ch] = per[it.ch] || [0, 0]; per[it.ch][1]++;
      if (o.ok) { score++; per[it.ch][0]++; delete w[it.id]; } else { btn.classList.add('wrong'); w[it.id] = 1; }
      store.set('wrong', w);
      $('#fb').innerHTML = `<div class="exp"><b>${o.ok ? 'Exact.' : 'Raté.'}</b> ${esc(it.exp)}</div><div class="row" style="margin-top:12px;justify-content:flex-end"><button class="btn pri" id="next">${i + 1 < qs.length ? 'Suivante →' : 'Voir le résultat'}</button></div>`;
      $('#next').onclick = () => { i++; draw(); window.scrollTo(0, 0); }; $('#next').focus();
    });
  }
  function end() {
    const p = pct(score, qs.length), b = best();
    if (LABELS[keyName]) { b[keyName] = Math.max(b[keyName] || 0, p); store.set('best', b); }
    if (keyName === 'diag') mark('diag');
    const weak = Object.entries(per).filter(([k, v]) => v[0] < v[1]).map(([k]) => k);
    app.innerHTML = `<div class="card" style="max-width:780px;margin:0 auto;text-align:center">
<span class="pill acc">${title}</span><h2 style="margin-top:10px">${score} / ${qs.length} — ${p} %</h2>
<p class="muted">${keyName === 'diag' ? 'Ce score ne compte pas : il sert à choisir par où commencer.' : p >= 80 ? 'Thème tenu. Passe au suivant, et reviens-y demain matin.' : 'En dessous de 80 % : relis le chapitre concerné puis refais ce QCM.'}</p>
${weak.length ? `<p><b>À travailler en priorité :</b></p><div class="row" style="justify-content:center">${weak.map(k => CH_LABEL[k] ? `<a class="btn sm" href="#cours/${k}">${LABELS[k]}</a>` : `<a class="btn sm" href="#articles">${LABELS[k]}</a>`).join('')}</div>` : ''}
<div class="row" style="justify-content:center;margin-top:16px"><a class="btn pri" href="#quiz/wrong">Refaire mes erreurs</a><a class="btn" href="#quiz">Autre QCM</a><a class="btn" href="#home">Accueil</a></div></div>`;
  }
  draw();
}

/* ---------- Cas & questions de cours ---------- */
function viewCas() {
  const grid = (pts, id) => `<details class="ans"><summary>J’ai rédigé — voir la grille de correction</summary><div data-g="${id}">${pts.map(p => `<label class="chk"><input type="checkbox"><span>${p}</span></label>`).join('')}<p class="small muted" style="margin-top:8px">Coche ce que ta réponse contenait vraiment. <b class="sc"></b></p></div></details>`;
  app.innerHTML = `<h2>Cas pratiques & questions de cours</h2>
<p class="muted">Écris ta réponse sur papier, sans le cours, <b>avant</b> d’ouvrir la grille. Méthode du cas pratique : faits utiles → qualification → règle (avec l’article) → application → conclusion.</p>
<h3>Cas pratiques</h3>
${CASES.map((c, i) => `<details class="card case"><summary>${c.t}</summary><div class="facts">${c.facts}</div>${c.qs.map((x, j) => `<p><b>${x.q}</b></p>${grid(x.pts, 'c' + i + '-' + j)}`).join('')}</details>`).join('')}
<h3>Questions de cours</h3>
${OPEN.map((o, i) => `<details class="card case"><summary>${o.t}</summary><p class="muted small" style="margin-top:8px">10 minutes, un plan en deux parties, les articles cités.</p>${grid(o.pts, 'o' + i)}</details>`).join('')}`;
  $$('[data-g]').forEach(g => {
    const boxes = $$('input', g), sc = $('.sc', g); let counted = false;
    const upd = () => { const n = boxes.filter(b => b.checked).length; sc.textContent = n + ' / ' + boxes.length + (n === boxes.length ? ' — complet.' : n >= boxes.length * .6 ? ' — correct, complète les manques.' : ' — à reprendre : relis le chapitre et recommence demain matin.'); if (!counted && n) { counted = true; const d = done(); d.cas = (d.cas || 0) + 1; store.set('done', d); } };
    boxes.forEach(b => b.onchange = upd);
  });
}

/* ---------- Pièges ---------- */
function viewPieges() {
  app.innerHTML = `<h2>Pièges et écarts entre tes notes et les textes</h2>
<p class="muted">À relire en dernier ce soir et en premier demain matin.</p>
<div class="grid g2">${TRAPS.map(([t, h]) => `<div class="box trap" style="margin:0"><span class="bt">${t}</span><p>${h}</p></div>`).join('')}</div>
<div class="row" style="justify-content:center;margin-top:18px"><a class="btn pri" href="#examen">Passer l’examen blanc →</a></div>`;
}

/* ---------- Examen blanc ---------- */
function viewExamen() {
  const b = best();
  app.innerHTML = `<div class="card" style="max-width:720px;margin:0 auto"><span class="pill acc">Examen blanc</span>
<h2 style="margin-top:10px">30 questions · 25 minutes · note sur 20</h2>
<ul><li>22 questions de fond réparties sur les 8 chapitres, 8 questions de références.</li><li>Aucune correction pendant l’épreuve ; corrigé détaillé à la fin.</li><li>Objectif : 14 / 20. En dessous, reprends « Mes erreurs ».</li></ul>
${b.exam != null ? `<p class="muted">Meilleure note : <b>${String(b.exam.toFixed(1)).replace('.', ',')} / 20</b></p>` : ''}
<button class="btn pri" id="go">Démarrer</button></div>`;
  $('#go').onclick = startExam;
}
function startExam() {
  const chs = Object.keys(CH_LABEL);
  let items = chs.flatMap(k => pick(k, 3)).slice(0, 22);
  items = shuffle(items.concat(pick('art', 8)));
  const qs = items.map(prepQ), ans = {}; let i = 0, left = 25 * 60;
  const timer = setInterval(() => { left--; const t = $('#tm'); if (t) t.textContent = fmt(left); if (left <= 0) finish(); }, 1000);
  cleanup = () => clearInterval(timer);
  const fmt = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  function draw() {
    const it = qs[i];
    app.innerHTML = `<div class="card" style="max-width:780px;margin:0 auto">
<div class="row" style="justify-content:space-between"><span class="pill acc">Question ${i + 1} / ${qs.length}</span><span class="pill warn" id="tm">${fmt(left)}</span></div>
<p class="qtext">${esc(it.text)}</p>
<div id="opts">${it.opts.map((o, k) => `<button class="opt" data-k="${k}" style="${ans[i] === k ? 'border-color:var(--acc);background:var(--acc-soft)' : ''}">${esc(o.t)}</button>`).join('')}</div>
<div class="row" style="justify-content:space-between;margin-top:12px"><button class="btn" id="prev" ${i ? '' : 'disabled'}>← Précédente</button><span class="muted small">${Object.keys(ans).length} répondue${Object.keys(ans).length > 1 ? 's' : ''}</span>${i + 1 < qs.length ? `<button class="btn pri" id="nx">Suivante →</button>` : `<button class="btn pri" id="fin">Rendre la copie</button>`}</div></div>`;
    $$('#opts .opt').forEach(b2 => b2.onclick = () => { ans[i] = +b2.dataset.k; draw(); });
    $('#prev').onclick = () => { i--; draw(); };
    if ($('#nx')) $('#nx').onclick = () => { i++; draw(); };
    if ($('#fin')) $('#fin').onclick = () => { const miss = qs.length - Object.keys(ans).length; if (!miss || confirm(miss + ' question(s) sans réponse. Rendre quand même ?')) finish(); };
  }
  function finish() {
    clearInterval(timer); cleanup = null;
    const w = wrongSet(); let ok = 0;
    const rows = qs.map((it, k) => { const a = ans[k], good = a != null && it.opts[a].ok; if (good) { ok++; delete w[it.id]; } else w[it.id] = 1; return { it, a, good }; });
    store.set('wrong', w);
    const note = Math.round(ok / qs.length * 200) / 10, b = best();
    b.exam = Math.max(b.exam == null ? 0 : b.exam, note); store.set('best', b);
    app.innerHTML = `<div class="card" style="max-width:780px;margin:0 auto;text-align:center"><span class="pill acc">Examen blanc</span>
<h2 style="margin-top:10px">${String(note.toFixed(1)).replace('.', ',')} / 20</h2><p class="muted">${ok} bonnes réponses sur ${qs.length}. ${note >= 14 ? 'Objectif atteint : relis seulement tes erreurs et la fiche express.' : 'Reprends tes erreurs ci-dessous, puis refais « Mes erreurs » jusqu’à zéro.'}</p>
<div class="row" style="justify-content:center"><a class="btn pri" href="#quiz/wrong">Refaire mes erreurs</a><a class="btn" href="#home">Accueil</a></div></div>
<h3 style="max-width:780px;margin:24px auto 8px">Corrigé</h3>
${rows.map(({ it, a, good }, k) => `<div class="card" style="max-width:780px;margin:0 auto 10px;padding:14px"><div class="row" style="justify-content:space-between"><b>${k + 1}. ${esc(it.text)}</b><span class="pill ${good ? 'ok' : 'bad'}">${good ? 'juste' : a == null ? 'sans réponse' : 'faux'}</span></div>
${!good && a != null ? `<p class="small" style="color:var(--bad);margin:.4em 0 0">Ta réponse : ${esc(it.opts[a].t)}</p>` : ''}<p class="small" style="margin:.4em 0 0"><b>Réponse :</b> ${esc(it.opts.find(o => o.ok).t)}</p><p class="small muted" style="margin:.3em 0 0">${esc(it.exp)}</p></div>`).join('')}`;
    window.scrollTo(0, 0);
  }
  draw();
}

/* ---------- Routeur & thème ---------- */
const VIEWS = { home: viewHome, cours: viewCours, fiche: viewFiche, articles: viewArticles, cartes: viewCartes, quiz: viewQuiz, cas: viewCas, pieges: viewPieges, examen: viewExamen };
function route() {
  if (cleanup) { cleanup(); cleanup = null; }
  const [v, arg] = (location.hash.slice(1) || 'home').split('/');
  const fn = VIEWS[v] || viewHome;
  fn(arg ? decodeURIComponent(arg) : undefined);
  $$('#tabs a').forEach(a => a.classList.toggle('on', a.dataset.v === (VIEWS[v] ? v : 'home')));
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
(function theme() {
  const saved = store.get('theme', null);
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  $('#themeBtn').onclick = () => {
    const cur = document.documentElement.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const nx = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nx); store.set('theme', nx);
  };
})();
route();
</script>
</body>
</html>
