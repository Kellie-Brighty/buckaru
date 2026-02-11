// --- Configuration & State ---
let sparkCount = 0;
const targetSparks = 1000;
let isDiamondHandsRevealed = false;

// --- Lightning Particles ---
function createLightningParticle(x, y) {
  const container = document.getElementById("particles");
  const particle = document.createElement("div");
  particle.className = "particle";

  const size = 5 + Math.random() * 15;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.background = Math.random() > 0.5 ? "var(--secondary)" : "var(--diamond)";
  particle.style.position = "absolute";
  particle.style.borderRadius = "50%";
  particle.style.pointerEvents = "none";
  particle.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";

  container.appendChild(particle);

  const destX = x + (Math.random() - 0.5) * 200;
  const destY = y + (Math.random() - 0.5) * 200;

  particle.animate(
    [
      { transform: "translate(0, 0) scale(1)", opacity: 1 },
      {
        transform: `translate(${destX - x}px, ${destY - y}px) scale(0)`,
        opacity: 0,
      },
    ],
    {
      duration: 800,
      easing: "cubic-bezier(0, .9, .57, 1)",
    },
  ).onfinish = () => particle.remove();
}

// --- Interaction Logic ---
function handleSpark(e) {
  sparkCount += 5;
  if (sparkCount > targetSparks) sparkCount = targetSparks;

  updateMeter();
  triggerLightning();

  const rect = document.getElementById("sprite-trigger").getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  for (let i = 0; i < 10; i++) {
    createLightningParticle(x, y);
  }

  if (sparkCount >= targetSparks && !isDiamondHandsRevealed) {
    revealDiamondHands();
  }
}

function triggerLightning() {
  const overlay = document.getElementById("lightning-overlay");
  overlay.style.opacity = "0.3";
  setTimeout(() => (overlay.style.opacity = "0"), 50);
}

function updateMeter() {
  const fill = document.getElementById("meter-fill");
  const percent = document.getElementById("meter-percent");
  const p = (sparkCount / targetSparks) * 100;
  fill.style.width = `${p}%`;
  percent.innerText = `${Math.floor(p)}%`;
}

function revealDiamondHands() {
  isDiamondHandsRevealed = true;
  const img = document.getElementById("buckaru-img");
  const card = document.getElementById("main-card");

  // Flash effect
  const overlay = document.getElementById("lightning-overlay");
  overlay.style.opacity = "1";
  setTimeout(() => (overlay.style.opacity = "0"), 200);

  // Swap asset
  img.src = "assets/buckaru_diamond.png";
  card.style.background = "linear-gradient(135deg, var(--diamond) 20%, #fff 100%)";
  card.style.boxShadow = "0 0 50px var(--diamond)";

  // Show Modal
  document.getElementById("reward-modal").style.display = "flex";
}

// --- CA Copier ---
function initCACopier() {
    const caPill = document.querySelector('.ca-pill');
    const caValue = document.getElementById('ca-value').innerText;
    const copyBtn = document.querySelector('.copy-btn');

    caPill.addEventListener('click', () => {
        navigator.clipboard.writeText(caValue).then(() => {
            copyBtn.innerText = "COPIED!";
            copyBtn.style.background = "var(--hodl)";
            setTimeout(() => {
                copyBtn.innerText = "COPY";
                copyBtn.style.background = "var(--secondary)";
            }, 2000);
        });
    });
}

// --- Init All ---
window.onload = () => {
  initCACopier();

  document.getElementById("sprite-trigger").addEventListener("click", handleSpark);

  // Modal Closers
  document.getElementById("modal-close").onclick = () => document.getElementById("reward-modal").style.display = "none";
  document.getElementById("modal-ok").onclick = () => document.getElementById("reward-modal").style.display = "none";

  // Parallax Card
  const card = document.getElementById("main-card");
  document.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
};
