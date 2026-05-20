const storeKey = 'voetbalspel.prototype.v1';
const initialState = {
  activeUser: { name: 'Pim', email: 'pim@example.nl', admin: true },
  period: 'week',
  matches: [
    { id: 'm1', week: 12, month: 'Mei', home: 'Ajax', away: 'PSV', date: 'Vrijdag 20:00', result: [2, 1] },
    { id: 'm2', week: 12, month: 'Mei', home: 'Feyenoord', away: 'FC Utrecht', date: 'Zaterdag 18:45', result: [1, 1] },
    { id: 'm3', week: 12, month: 'Mei', home: 'AZ', away: 'Twente', date: 'Zondag 14:30', result: [null, null] },
    { id: 'm4', week: 13, month: 'Mei', home: 'Sparta', away: 'Heerenveen', date: 'Zondag 16:45', result: [null, null] }
  ],
  predictions: {
    'Pim': { m1: [2, 1], m2: [1, 0], m3: [3, 2], m4: [1, 1] },
    'Sam': { m1: [1, 2], m2: [1, 1], m3: [2, 1], m4: [2, 0] },
    'Noor': { m1: [2, 0], m2: [2, 2], m3: [1, 2], m4: [0, 0] },
    'Milan': { m1: [3, 1], m2: [0, 1], m3: [2, 2], m4: [1, 0] }
  },
  articles: [
    { title: 'Ronde 12 staat open', date: 'Vandaag', intro: 'Alle wedstrijden voor dit weekend zijn toegevoegd. Voorspellen kan tot de aftrap.' },
    { title: 'Nieuwe maandranglijst', date: 'Deze maand', intro: 'De maandstand is opgeschoond en laat direct zien wie de beste vorm heeft.' },
    { title: 'Puntentelling uitgelegd', date: 'Regels', intro: 'Exacte uitslag is 5 punten, juiste winnaar 3, juist doelsaldo 2 en deelname 1.' }
  ]
};
let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storeKey));
    return saved ? { ...initialState, ...saved } : structuredClone(initialState);
  } catch {
    return structuredClone(initialState);
  }
}
function saveState() { localStorage.setItem(storeKey, JSON.stringify(state)); }
function pointsFor(prediction, result) {
  if (!prediction) return 0;
  const [ph, pa] = prediction.map(Number);
  const [rh, ra] = result;
  if (rh === null || ra === null || Number.isNaN(ph) || Number.isNaN(pa)) return 1;
  if (ph === rh && pa === ra) return 5;
  const predSign = Math.sign(ph - pa);
  const resultSign = Math.sign(rh - ra);
  if (predSign === resultSign) return 3;
  if ((ph - pa) === (rh - ra)) return 2;
  return 1;
}
function filteredMatches(period) {
  if (period === 'overall') return state.matches;
  if (period === 'month') return state.matches.filter(match => match.month === 'Mei');
  return state.matches.filter(match => match.week === 12);
}
function leaderboard(period = state.period) {
  const matches = filteredMatches(period);
  return Object.keys(state.predictions).map(name => {
    const points = matches.reduce((sum, match) => sum + pointsFor(state.predictions[name]?.[match.id], match.result), 0);
    return { name, points, played: matches.length };
  }).sort((a, b) => b.points - a.points || a.name.localeCompare(b.name));
}
function currentUserName() { return state.activeUser?.name || 'Demo speler'; }
function ensureUser() {
  const name = currentUserName();
  if (!state.predictions[name]) state.predictions[name] = {};
}
function scoreText(result) { return result[0] === null || result[1] === null ? '—' : `${result[0]}-${result[1]}`; }
function route() {
  const target = (location.hash || '#home').replace('#', '');
  document.querySelectorAll('[data-route]').forEach(section => { section.hidden = section.id !== target; });
  document.querySelectorAll('.main-nav a').forEach(link => { link.classList.toggle('active', link.getAttribute('href') === `#${target}`); });
  render();
  requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ block: 'start' }));
}
function renderHero() {
  const container = document.querySelector('#heroMatches');
  container.innerHTML = state.matches.slice(0, 3).map(match => `
    <div class="score-row">
      <div class="teams"><span>${match.home}</span><span>${match.away}</span></div>
      <span class="score-chip">${scoreText(match.result)}</span>
    </div>
  `).join('');
}
function renderDashboard() {
  ensureUser();
  const name = currentUserName();
  document.querySelector('#activeUserLabel').textContent = `${name}${state.activeUser.admin ? ' · beheerder' : ''}`;
  document.querySelector('#activeUserPoints').textContent = leaderboard('overall').find(row => row.name === name)?.points ?? 0;
  const predictions = state.predictions[name];
  document.querySelector('#predictionList').innerHTML = state.matches.map(match => {
    const pred = predictions[match.id] || ['', ''];
    const done = match.result[0] !== null && match.result[1] !== null;
    return `<article class="card match-card ${done ? 'done' : ''}" data-match="${match.id}">
      <div class="match-head">
        <div>
          <p class="kicker">${match.date}</p>
          <h3 class="match-title">${match.home} — ${match.away}</h3>
        </div>
        <span class="badge">${done ? `Uitslag ${scoreText(match.result)}` : 'Open'}</span>
      </div>
      <div class="prediction-controls">
        <label class="score-field">${match.home}<input class="input-score" inputmode="numeric" type="number" min="0" max="20" value="${pred[0] ?? ''}" data-pred-home="${match.id}"></label>
        <label class="score-field">${match.away}<input class="input-score" inputmode="numeric" type="number" min="0" max="20" value="${pred[1] ?? ''}" data-pred-away="${match.id}"></label>
        <button class="button-primary" data-save-pred="${match.id}">Bewaar</button>
      </div>
      <p class="helper">Punten nu: ${pointsFor(predictions[match.id], match.result)}</p>
    </article>`;
  }).join('');
}
function renderLeaderboard() {
  document.querySelectorAll('.tab').forEach(tab => {
    const active = tab.dataset.period === state.period;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  document.querySelector('#leaderboard').innerHTML = leaderboard().map((row, index) => `
    <div class="leader-row ${index === 0 ? 'top' : ''}">
      <div class="leader-left">
        <span class="leaderboard-rank">${String(index + 1).padStart(2, '0')}</span>
        <span class="leader-name">${row.name}<small>${row.played} wedstrijden verwerkt</small></span>
      </div>
      <span class="points">${row.points} punten</span>
    </div>
  `).join('');
}
function renderAdmin() {
  document.querySelector('#adminBoard').innerHTML = state.matches.map(match => `
    <article class="admin-row" data-admin-match="${match.id}">
      <div>
        <p class="kicker">${match.date}</p>
        <h3 class="match-title">${match.home} — ${match.away}</h3>
      </div>
      <div class="admin-controls">
        <label class="score-field">${match.home}<input class="input-score" inputmode="numeric" type="number" min="0" max="20" value="${match.result[0] ?? ''}" data-result-home="${match.id}"></label>
        <label class="score-field">${match.away}<input class="input-score" inputmode="numeric" type="number" min="0" max="20" value="${match.result[1] ?? ''}" data-result-away="${match.id}"></label>
        <button class="button-primary" data-save-result="${match.id}">Opslaan</button>
      </div>
    </article>
  `).join('');
}
function renderArticles() {
  document.querySelector('#articleGrid').innerHTML = state.articles.map(article => `
    <article class="card article-card">
      <div class="article-meta"><span class="badge">${article.date}</span></div>
      <h3>${article.title}</h3>
      <p>${article.intro}</p>
      <a class="button-secondary compact" href="#updates">Lees</a>
    </article>
  `).join('');
}
function renderTrophies() {
  const week = leaderboard('week')[0];
  const month = leaderboard('month')[0];
  const overall = leaderboard('overall')[0];
  const trophies = [
    ['Weekwinnaar', week], ['Maandtopper', month], ['Kampioen', overall]
  ];
  document.querySelector('#trophyGrid').innerHTML = trophies.map(([label, row], index) => `
    <article class="card trophy-card ${index === 2 ? 'featured' : ''}">
      <span class="trophy-label">${label}</span>
      <div><h3>${row?.name || 'Nog open'}</h3><p>${row?.points ?? 0} punten</p></div>
    </article>
  `).join('');
}
function render() {
  renderHero(); renderDashboard(); renderLeaderboard(); renderAdmin(); renderArticles(); renderTrophies();
}
function openAuth(mode) {
  const dialog = document.querySelector('#authDialog');
  document.querySelector('#authModeLabel').textContent = mode === 'register' ? 'Registreren' : 'Login';
  document.querySelector('#authTitle').textContent = mode === 'register' ? 'Maak een speler aan' : 'Welkom terug';
  document.querySelector('#authName').value = state.activeUser.name || '';
  document.querySelector('#authEmail').value = state.activeUser.email || '';
  document.querySelector('#authAdmin').checked = !!state.activeUser.admin;
  dialog.showModal();
}

document.addEventListener('click', event => {
  const action = event.target.closest('[data-action]');
  if (action?.dataset.action === 'open-auth') openAuth(action.dataset.mode);
  if (action?.dataset.action === 'save-auth') {
    event.preventDefault();
    const name = document.querySelector('#authName').value.trim() || 'Demo speler';
    state.activeUser = { name, email: document.querySelector('#authEmail').value.trim(), admin: document.querySelector('#authAdmin').checked };
    ensureUser(); saveState(); document.querySelector('#authDialog').close(); render();
  }
  const tab = event.target.closest('[data-period]');
  if (tab) { state.period = tab.dataset.period; saveState(); renderLeaderboard(); }
  const predButton = event.target.closest('[data-save-pred]');
  if (predButton) {
    const id = predButton.dataset.savePred;
    ensureUser();
    const home = document.querySelector(`[data-pred-home="${id}"]`).value;
    const away = document.querySelector(`[data-pred-away="${id}"]`).value;
    state.predictions[currentUserName()][id] = [Number(home), Number(away)];
    saveState(); render();
  }
  const resultButton = event.target.closest('[data-save-result]');
  if (resultButton) {
    const id = resultButton.dataset.saveResult;
    const match = state.matches.find(item => item.id === id);
    const home = document.querySelector(`[data-result-home="${id}"]`).value;
    const away = document.querySelector(`[data-result-away="${id}"]`).value;
    match.result = [home === '' ? null : Number(home), away === '' ? null : Number(away)];
    saveState(); render();
  }
});
window.addEventListener('hashchange', route);
route();
