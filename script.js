"use strict";

/* =========================================================
   1. CONFIGURAÇÃO — edite aqui
   ========================================================= */

// Somente dígitos: código do país + DDD + número. Sem +, espaços, parênteses ou hífens.
const WHATSAPP_NUMBER = "551190065287";

const WHATSAPP_MESSAGE = `🚨 COMUNICADO OFICIAL DO SERVIDOR 🚨

Eu, Beatriz, aceito oficialmente o convite para ser sua duo no Mobile Legends! 🎮🔥

Estou ciente de que posso reclamar da partida antes mesmo de ela começar, mas prometo tentar acreditar na vitória por pelo menos alguns minutos. 😂

Agora trate de entrar no jogo, porque nossa primeira missão já pode começar!

Assinado: Beatriz, futura lenda da dupla. 🏆❤️`;

const CONFIG = {
  loadingMs: 3000,     // duração da tela de carregamento
  bossHits: 6,         // cliques para derrotar o chefe
  scanMs: 2600,        // duração da análise de sinergia
  analyzeMs: 2200,     // duração do "preciso analisar"
  confettiCount: 170,
  stars: 90,
  embers: 28,
  musicVolume: 0.045,
  sfxVolume: 0.12,
};

const STEPS = ["Convocação", "Lobby", "Conquistas", "Chefe final", "Sinergia", "O convite", "Vitória"];

const INTRO_SUBTITLES = [
  "Uma missão lendária acaba de surgir. E dessa vez não é para carregar random.",
];

const LOADING_MESSAGES = [
  "Carregando habilidades lendárias...",
  "Verificando compatibilidade da dupla...",
  "Tentando localizar a esperança da Beatriz...",
  "Preparando elogios que não aparecem na loja...",
  "Consultando as probabilidades de ela dizer que já perdemos...",
];

const LOBBY_STATS = [
  { label: "Habilidade", value: "99/100", pct: 99 },
  { label: "Carisma", value: "Nível lendário", pct: 100 },
  { label: "Potencial de carregar partidas", value: "Extremamente perigoso", pct: 96 },
  { label: "Sinergia com o futuro duo", value: "Ainda não desbloqueada", pct: 100, kind: "locked" },
  { label: "Pessimismo antes da partida", value: "Nível mítico", pct: 100, kind: "over" },
  { label: "Capacidade de surpreender", value: "Sem limite conhecido", pct: 100 },
];

const ACHIEVEMENTS = [
  { icon: "I", rarity: "lendaria", name: "Mãos de Lenda",
    text: "Você joga tão bem que às vezes fica difícil saber se estou numa partida ranqueada ou assistindo a uma demonstração de habilidade." },
  { icon: "II", rarity: "epica", name: "Parceira de Elite",
    text: "Jogar com alguém que manda bem já é bom. Encontrar alguém que também deixa a partida mais divertida é outro nível." },
  { icon: "III", rarity: "lendaria", name: "Ruiva Lendária",
    text: "Essa combinação de cabelo ruivo, personalidade e habilidade deveria ser considerada vantagem competitiva." },
  { icon: "IV", rarity: "epica", name: "Beleza Fora do Meta",
    text: "Seu charme aparentemente não precisa de atualização, buff ou ajuste de balanceamento." },
  { icon: "V", rarity: "mitica", name: "MVP do Meu Interesse",
    text: "Se existisse um ranking das pessoas com quem eu gostaria de jogar mais vezes, você já estaria disputando o primeiro lugar." },
  { icon: "VI", rarity: "mitica", name: "Efeito Beatriz",
    text: "Eu entrei pensando em jogar algumas partidas e agora estou criando um projeto inteiro para te convidar para ser minha duo. Acho que isso já diz alguma coisa." },
  { icon: "VII", rarity: "mitica", name: "Item Mítico: Boa Companhia",
    text: "Vitória é bom, subir de elo é melhor ainda, mas ter alguém legal ao lado torna qualquer partida mais interessante." },
  { icon: "VIII", rarity: "rara", name: "Sinergia Misteriosa",
    text: "Algumas combinações não precisam de estatísticas para despertar curiosidade. Basta dar uma chance e descobrir." },
];
const RARITY_LABEL = { rara: "Rara", epica: "Épica", lendaria: "Lendária", mitica: "Mítica" };
const RARITY_COLOR = { rara: "#7fb3ff", epica: "#b79cff", lendaria: "#f5c451", mitica: "#ff8a5c" };

const PESSIMISM_LINES = [
  "Beatriz, a partida nem começou e você já está prevendo a derrota?",
  "O time ainda está escolhendo os heróis e você já está preparando o discurso de despedida?",
  "A esperança foi banida da sua seleção de heróis?",
  "Se pessimismo desse estrela, você já estava no Mythic.",
  "Você não precisa prever todas as derrotas. Deixa pelo menos algumas para o histórico revelar.",
  "Missão da dupla: provar que você consegue acreditar na vitória por pelo menos três minutos.",
  "O inimigo mais forte não é o jungler adversário. É você dizendo 'já perdemos' aos dois minutos.",
  "O jogo perguntou se você quer continuar. Você respondeu que provavelmente vai dar errado.",
  "A partida está 10 a 2 para o nosso time, mas a Beatriz já está desconfiada.",
  "O verdadeiro controle de grupo é você controlando a esperança da equipe para baixo.",
  "Nem o sistema de matchmaking consegue prever tantos cenários ruins.",
  "A gente só precisa ganhar uma partida. Você já está prevendo o resultado das próximas dez.",
];
const BOSS_IDLE = "“Nem tenta. Já sei que vai dar errado.”";

const SYNERGY_STATS = [
  { label: "Sinergia nas partidas", value: "98%", pct: 98 },
  { label: "Comunicação", value: "95%", pct: 95 },
  { label: "Potencial de vitória", value: "Em evolução", pct: 72 },
  { label: "Chance de boas risadas", value: "100%", pct: 100 },
  { label: "Chance de Beatriz dizer “já perdemos”", value: "150%", pct: 100, kind: "over" },
  { label: "Compatibilidade para formar uma dupla lendária", value: "Confidencial", pct: 100, kind: "locked" },
];

// Sorteadas a cada vitória, para as visitas não serem idênticas.
const DUO_STATS_POOL = [
  ["Vitórias previstas", "Muitas"], ["Vitórias previstas", "Mais do que ela imagina"],
  ["Risadas por partida", "No mínimo 12"], ["Risadas por partida", "Incontáveis"],
  ["“Já perdemos” antes dos 2 min", "3 (meta: 1)"], ["“Já perdemos” antes dos 2 min", "Em negociação"],
  ["Nível da dupla", "Lendário"], ["Nível da dupla", "Acima do meta"],
  ["Elo de destino", "O mais alto que der"], ["Chance de revanche", "100%"],
];

/* =========================================================
   2. ESTADO (temporário: vive só enquanto a página está aberta)
   ========================================================= */
const state = {
  step: 0,
  unlocked: new Set(),
  secretShown: false,
  bossHp: CONFIG.bossHits,
  hits: 0,
  deck: [],
  synergyDone: false,
  accepted: false,
  audio: false,
  timers: [],
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const later = (fn, ms) => { const t = setTimeout(fn, ms); state.timers.push(t); return t; };
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* =========================================================
   3. NAVEGAÇÃO
   ========================================================= */
function canVisit(i) { return i >= 0 && i < STEPS.length && (i < 6 || state.accepted); }

function goTo(i, focus = true) {
  if (!canVisit(i)) return;
  state.step = i;
  $$(".stage").forEach((s) => { s.hidden = Number(s.dataset.step) !== i; });
  renderProgress();
  window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" });
  const stage = $(`.stage[data-step="${i}"]`);
  if (focus) $(".title", stage)?.focus({ preventScroll: true });
  if (i === 1) animateBars($("#lobbyStats"));
}

function renderProgress() {
  $("#progress").innerHTML = STEPS.map((name, i) => `
    <li><button type="button" data-go="${i}" class="${i < state.step ? "done" : ""}"
      ${i === state.step ? 'aria-current="step"' : ""} ${canVisit(i) ? "" : "disabled"}
      aria-label="Etapa ${i + 1}: ${name}${canVisit(i) ? "" : " (bloqueada até o aceite)"}" title="${name}"></button></li>`).join("");
  $("#stepLabel").textContent = `Etapa ${state.step + 1} de ${STEPS.length} · ${STEPS[state.step]}`;
}

document.addEventListener("click", (e) => {
  const go = e.target.closest("[data-go]");
  if (go) {
    const v = go.dataset.go;
    sfx("click");
    goTo(v === "next" ? state.step + 1 : v === "prev" ? state.step - 1 : Number(v));
    return;
  }
  const close = e.target.closest("[data-close]");
  if (close) { sfx("click"); close.closest("dialog").close(); }
});

/* =========================================================
   4. BARRAS DE ATRIBUTOS
   ========================================================= */
function renderStats(el, stats, hideValues) {
  el.classList.remove("go");
  el.innerHTML = stats.map((s) => `
    <div class="stat">
      <div class="stat-head"><span>${esc(s.label)}</span><b data-value="${esc(s.value)}">${hideValues ? "???" : esc(s.value)}</b></div>
      <div class="bar ${s.kind || ""}" aria-hidden="true"><i style="--v:${s.pct}%"></i></div>
    </div>`).join("");
}
function animateBars(el) {
  el.classList.remove("go");
  void el.offsetWidth;
  requestAnimationFrame(() => el.classList.add("go"));
}

/* =========================================================
   5. ABERTURA + CARREGAMENTO
   ========================================================= */
function startLoading() {
  const box = $("#loading"), msg = $("#loadingMsg"), fill = $("#loadingFill");
  const msgs = shuffle(LOADING_MESSAGES).slice(0, 3);
  const total = REDUCED ? 1500 : CONFIG.loadingMs;
  box.hidden = false;
  fill.style.width = "0%";
  msgs.forEach((m, k) => later(() => {
    msg.textContent = m;
    fill.style.width = `${Math.round(((k + 1) / msgs.length) * 100)}%`;
  }, (total / msgs.length) * k + 30));
  later(() => { box.hidden = true; goTo(1); sfx("unlock"); }, total);
}

/* =========================================================
   6. CONQUISTAS
   ========================================================= */
function renderAchievements() {
  $("#achGrid").innerHTML = ACHIEVEMENTS.map((a, i) => {
    const open = state.unlocked.has(i);
    return `<button type="button" class="ach ${open ? "" : "locked"}" data-ach="${i}" style="--c:${RARITY_COLOR[a.rarity]}"
      aria-label="${esc(a.name)}, ${RARITY_LABEL[a.rarity]}, ${open ? "desbloqueada" : "bloqueada"}">
      <span class="ach-icon"><span>${open ? a.icon : "?"}</span></span>
      <span class="ach-name">${open ? esc(a.name) : "Conquista oculta"}</span>
      <span class="ach-state">${open ? RARITY_LABEL[a.rarity] : "Bloqueada"}</span>
    </button>`;
  }).join("");
  $("#achCount").textContent = state.unlocked.size;
  $("#secret").hidden = state.unlocked.size < ACHIEVEMENTS.length;
}

$("#achGrid").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-ach]");
  if (!btn) return;
  const i = Number(btn.dataset.ach), a = ACHIEVEMENTS[i];
  const isNew = !state.unlocked.has(i);
  state.unlocked.add(i);
  renderAchievements();
  if (isNew) { $(`[data-ach="${i}"]`).classList.add("pop"); sfx("unlock"); }
  $("#achIcon").innerHTML = `<span>${a.icon}</span>`;
  $("#achIcon").style.setProperty("--c", RARITY_COLOR[a.rarity]);
  $("#achRarity").className = `rarity r-${a.rarity}`;
  $("#achRarity").textContent = `Conquista ${RARITY_LABEL[a.rarity]}`;
  $("#achName").textContent = a.name;
  $("#achText").textContent = a.text;
  $("#achDialog").showModal();
});

$("#achDialog").addEventListener("close", () => {
  if (state.unlocked.size === ACHIEVEMENTS.length && !state.secretShown) {
    state.secretShown = true;
    sfx("win");
    const r = $("#secret").getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 40);
    $("#secret").scrollIntoView({ block: "center", behavior: REDUCED ? "auto" : "smooth" });
  }
});

/* =========================================================
   7. CHEFE FINAL
   ========================================================= */
function renderBoss() {
  const pct = Math.round((state.bossHp / CONFIG.bossHits) * 100);
  $("#hpFill").style.width = pct + "%";
  $("#hpBar").setAttribute("aria-valuenow", pct);
  $("#hitCount").textContent = state.hits;
  const dead = state.bossHp <= 0;
  $("#boss").classList.toggle("defeated", dead);
  $("#bossWin").hidden = !dead;
  $("#hitBtn").textContent = dead ? "Pedir revanche" : "Invocar pessimismo";
}

$("#hitBtn").addEventListener("click", () => {
  if (state.bossHp <= 0) {           // revanche
    state.bossHp = CONFIG.bossHits;
    $("#bossLine").textContent = BOSS_IDLE;
    sfx("click");
    renderBoss();
    return;
  }
  if (!state.deck.length) state.deck = shuffle(PESSIMISM_LINES);
  const line = $("#bossLine"), boss = $("#boss");
  line.textContent = state.deck.pop();
  line.classList.remove("swap"); boss.classList.remove("hit");
  void line.offsetWidth;
  line.classList.add("swap"); boss.classList.add("hit");
  state.hits++; state.bossHp--;
  sfx("hit");
  const r = boss.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, 14);
  renderBoss();
  if (state.bossHp <= 0) {
    sfx("win");
    later(() => $("#bossWin").scrollIntoView({ block: "center", behavior: REDUCED ? "auto" : "smooth" }), 300);
  }
});

/* =========================================================
   8. SINERGIA
   ========================================================= */
function revealSynergy() {
  $$("#synStats b").forEach((b) => { b.textContent = b.dataset.value; });
  animateBars($("#synStats"));
  $("#scanStatus").textContent = "Análise concluída.";
  $("#synResult").hidden = false;
  $("#calcBtn").disabled = false;
  $("#calcBtn").textContent = "Calcular de novo";
}
$("#calcBtn").addEventListener("click", () => {
  const panel = $("#scanPanel");
  renderStats($("#synStats"), SYNERGY_STATS, true);
  $("#synResult").hidden = true;
  $("#calcBtn").disabled = true;
  $("#scanStatus").textContent = "Escaneando a dupla...";
  panel.classList.add("scanning");
  sfx("scan");
  later(() => {
    panel.classList.remove("scanning");
    state.synergyDone = true;
    revealSynergy();
    sfx("unlock");
  }, REDUCED ? 800 : CONFIG.scanMs);
});

/* =========================================================
   9. CONVITE, WHATSAPP E VITÓRIA
   ========================================================= */
function isValidNumber(n) { return typeof n === "string" && /^[1-9]\d{9,14}$/.test(n); }
function whatsappURL() {
  if (!isValidNumber(WHATSAPP_NUMBER)) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

function setupWhatsApp() {
  const url = whatsappURL(), link = $("#waLink");
  $("#msgBox").value = WHATSAPP_MESSAGE;
  if (url) { link.href = url; link.hidden = false; $("#waConfig").hidden = true; }
  else { link.hidden = true; link.removeAttribute("href"); $("#waConfig").hidden = false; $("#msgDetails").open = true; }
}

function renderDuoStats() {
  const seen = new Set(), picks = [];
  for (const [k, v] of shuffle(DUO_STATS_POOL)) { if (!seen.has(k)) { seen.add(k); picks.push([k, v]); } }
  $("#duoStats").innerHTML = picks.slice(0, 4).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
}

$("#acceptBtn").addEventListener("click", () => {
  state.accepted = true;               // só no estado da página; nada vai para servidor
  // Tentativa de abrir o WhatsApp dentro do próprio clique. Se o navegador bloquear,
  // o botão manual da tela de vitória continua disponível. Nada é enviado sozinho.
  const url = whatsappURL();
  if (url) { try { window.open(url, "_blank", "noopener"); } catch (_) { /* bloqueado: segue o botão manual */ } }
  renderDuoStats();
  $("#copyStatus").textContent = "";
  goTo(6);
  sfx("win");
  confetti();
});

$("#analyzeBtn").addEventListener("click", () => {
  const d = $("#analyzeDialog");
  $("#anTitle").textContent = "Análise em andamento...";
  $("#anPhase1").hidden = false; $("#anPhase2").hidden = true;
  d.showModal();
  sfx("scan");
  later(() => {
    if (!d.open) return;
    $("#anTitle").textContent = "Análise concluída";
    $("#anPhase1").hidden = true; $("#anPhase2").hidden = false;
    $("#anPhase2 button").focus();
  }, REDUCED ? 900 : CONFIG.analyzeMs);
});   // os dois botões do modal apenas fecham: nenhum deles registra aceite

$("#copyBtn").addEventListener("click", async () => {
  const status = $("#copyStatus");
  try {
    await navigator.clipboard.writeText(WHATSAPP_MESSAGE);
    status.textContent = "Mensagem copiada. Ela ainda não foi enviada: cole no WhatsApp e toque em enviar.";
  } catch (_) {
    $("#msgDetails").open = true;
    const box = $("#msgBox"); box.focus(); box.select();
    status.textContent = "Não deu para copiar sozinho. O texto está selecionado abaixo: copie e cole no WhatsApp.";
  }
});

$("#restartBtn").addEventListener("click", resetAll);

function resetAll() {
  state.timers.forEach(clearTimeout); state.timers = [];
  Object.assign(state, { step: 0, secretShown: false, bossHp: CONFIG.bossHits, hits: 0, deck: [], synergyDone: false, accepted: false });
  state.unlocked.clear();
  parts.length = 0;
  init(false);
  sfx("click");
}

/* =========================================================
   10. ÁUDIO (opcional, sintetizado; só começa após clique)
   ========================================================= */
const AC = window.AudioContext || window.webkitAudioContext;
let actx = null, musicTimer = null, noteIdx = 0;
const MELODY = [220, 261.63, 329.63, 392, 329.63, 261.63, 196, 246.94, 293.66, 392, 293.66, 246.94, 174.61, 220, 261.63, 349.23];

function tone(freq, dur, type = "sine", vol = CONFIG.sfxVolume, delay = 0, slideTo) {
  if (!actx) return;
  const t = actx.currentTime + delay, o = actx.createOscillator(), g = actx.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(actx.destination);
  o.start(t); o.stop(t + dur + 0.05);
}
function sfx(name) {
  if (!state.audio || !actx) return;
  if (name === "click") tone(660, 0.08, "triangle");
  else if (name === "unlock") [523, 659, 784].forEach((f, i) => tone(f, 0.18, "triangle", CONFIG.sfxVolume, i * 0.07));
  else if (name === "hit") tone(220, 0.25, "sawtooth", CONFIG.sfxVolume, 0, 70);
  else if (name === "scan") tone(300, 0.9, "sine", CONFIG.sfxVolume * 0.7, 0, 1200);
  else if (name === "win") [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, 0.35, "triangle", CONFIG.sfxVolume, i * 0.11));
}
function setAudio(on) {
  const btn = $("#audioBtn");
  if (on && !actx) { try { actx = new AC(); } catch (_) { on = false; } }
  state.audio = on;
  clearInterval(musicTimer);
  if (on) {
    actx.resume?.();
    musicTimer = setInterval(() => {
      const f = MELODY[noteIdx++ % MELODY.length];
      tone(f, 0.5, "triangle", CONFIG.musicVolume);
      if (noteIdx % 4 === 1) tone(f / 2, 1.3, "sine", CONFIG.musicVolume);
    }, 330);
  }
  btn.setAttribute("aria-pressed", String(on));
  btn.textContent = on ? "Som: ligado" : "Som: desligado";
}
$("#audioBtn").addEventListener("click", () => { setAudio(!state.audio); sfx("click"); });
if (!AC) { $("#audioBtn").disabled = true; $("#audioBtn").textContent = "Som indisponível"; }
document.addEventListener("visibilitychange", () => { if (document.hidden && state.audio) setAudio(false); });

/* =========================================================
   11. EFEITOS VISUAIS (canvas): estrelas, brasas, faíscas, confete
   ========================================================= */
const bg = $("#bg"), fx = $("#fx"), bctx = bg.getContext("2d"), fctx = fx.getContext("2d");
let W = 0, H = 0, stars = [], embers = [];
const parts = [];
const PALETTE = ["#f5c451", "#ff6a2b", "#ff7eb0", "#7b4dff", "#fff0b8", "#e23d28"];
const rnd = (a, b) => a + Math.random() * (b - a);

function resize() {
  const d = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth; H = window.innerHeight;
  for (const c of [bg, fx]) { c.width = W * d; c.height = H * d; c.getContext("2d").setTransform(d, 0, 0, d, 0, 0); }
  stars = Array.from({ length: CONFIG.stars }, () => ({ x: rnd(0, W), y: rnd(0, H), r: rnd(0.4, 1.6), sp: rnd(0.4, 1.6), ph: rnd(0, 6.3) }));
  embers = Array.from({ length: CONFIG.embers }, () => ({ x: rnd(0, W), y: rnd(0, H), r: rnd(1, 2.6), v: rnd(0.15, 0.6), ph: rnd(0, 6.3), c: PALETTE[Math.floor(rnd(0, 3))] }));
  if (REDUCED) drawBg(0);
}
function drawBg(t) {
  bctx.clearRect(0, 0, W, H);
  bctx.fillStyle = "#f3eeff";
  for (const s of stars) {
    bctx.globalAlpha = 0.25 + 0.75 * Math.abs(Math.sin(t * 0.001 * s.sp + s.ph));
    bctx.beginPath(); bctx.arc(s.x, s.y, s.r, 0, 6.3); bctx.fill();
  }
  for (const e of embers) {
    if (!REDUCED) { e.y -= e.v; e.x += Math.sin(t * 0.001 + e.ph) * 0.25; if (e.y < -5) { e.y = H + 5; e.x = rnd(0, W); } }
    bctx.globalAlpha = 0.55; bctx.fillStyle = e.c;
    bctx.beginPath(); bctx.arc(e.x, e.y, e.r, 0, 6.3); bctx.fill();
  }
  bctx.globalAlpha = 1;
}
let fxDirty = false;
function drawFx() {
  if (!parts.length && !fxDirty) return;
  fctx.clearRect(0, 0, W, H);
  fxDirty = parts.length > 0;
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i];
    p.life--; p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
    if (p.life <= 0 || p.y > H + 20) { parts.splice(i, 1); continue; }
    fctx.globalAlpha = Math.min(1, p.life / 30);
    fctx.fillStyle = p.c;
    fctx.save(); fctx.translate(p.x, p.y); fctx.rotate(p.rot);
    if (p.conf) fctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
    else { fctx.beginPath(); fctx.arc(0, 0, p.s / 2, 0, 6.3); fctx.fill(); }
    fctx.restore();
  }
  fctx.globalAlpha = 1;
}
function burst(x, y, n = 10) {
  if (REDUCED) return;
  for (let i = 0; i < n; i++) {
    const a = rnd(0, 6.3), v = rnd(1.5, 5);
    parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: 0.08, life: rnd(25, 50), s: rnd(3, 6), rot: 0, vr: 0, c: PALETTE[Math.floor(rnd(0, PALETTE.length))] });
  }
}
function confetti() {
  if (REDUCED) return;
  for (let i = 0; i < CONFIG.confettiCount; i++) {
    parts.push({ x: rnd(0, W), y: rnd(-H * 0.6, -10), vx: rnd(-1.2, 1.2), vy: rnd(1.5, 4.5), g: 0.02, life: rnd(220, 360), s: rnd(7, 13), rot: rnd(0, 6.3), vr: rnd(-0.2, 0.2), conf: true, c: PALETTE[Math.floor(rnd(0, PALETTE.length))] });
  }
}
function loop(t) { drawBg(t); drawFx(); requestAnimationFrame(loop); }

document.addEventListener("pointerdown", (e) => {
  if (e.target.closest("button, a.btn, summary")) burst(e.clientX, e.clientY, 9);
});
window.addEventListener("resize", resize);

/* =========================================================
   12. INICIALIZAÇÃO
   ========================================================= */
function init(first = true) {
  $("#introSub").textContent = INTRO_SUBTITLES[Math.floor(Math.random() * INTRO_SUBTITLES.length)];
  $("#loading").hidden = true;
  renderStats($("#lobbyStats"), LOBBY_STATS, false);
  renderAchievements();
  $("#bossLine").textContent = BOSS_IDLE;
  renderBoss();
  renderStats($("#synStats"), SYNERGY_STATS, true);
  $("#synResult").hidden = true;
  $("#scanStatus").textContent = "Pronto para analisar.";
  $("#calcBtn").disabled = false; $("#calcBtn").textContent = "Calcular sinergia";
  setupWhatsApp();
  goTo(0, !first);
}

$("#enterBtn").addEventListener("click", () => { sfx("click"); startLoading(); });

resize();
init();
if (!REDUCED) requestAnimationFrame(loop);
