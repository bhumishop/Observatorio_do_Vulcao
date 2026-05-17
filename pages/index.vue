<template>
  <div class="landing-page">
    <div class="bg-layer"></div>
    <div class="fog-layer"></div>
    <div class="scanlines"></div>

    <!-- Jungle Background SVG -->
    <div class="jungle-bg">
      <svg class="jungle-svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="jungleGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0a1a0a"/>
            <stop offset="40%" stop-color="#0d260d"/>
            <stop offset="100%" stop-color="#051505"/>
          </linearGradient>
          <linearGradient id="lavaGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FF6F37" stop-opacity="0.8"/>
            <stop offset="50%" stop-color="#FF4500" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#8B0000" stop-opacity="0"/>
          </linearGradient>
          <filter id="jungleGlow">
            <feGaussianBlur stdDeviation="2" result="glow"/>
            <feMerge>
              <feMergeNode in="glow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <!-- Background layers -->
        <rect width="100%" height="100%" fill="url(#jungleGradient)"/>

        <!-- Distant mountains/jungle silhouettes -->
        <path class="mountain-back" d="M0 800 Q200 600 400 750 Q600 500 800 700 Q1000 450 1200 650 Q1400 400 1600 600 Q1800 350 1920 550 L1920 1080 L0 1080 Z" fill="#0a120a"/>
        <path class="mountain-mid" d="M0 850 Q300 700 600 800 Q900 600 1200 780 Q1500 550 1920 750 L1920 1080 L0 1080 Z" fill="#0d180d"/>

        <!-- Jungle canopy silhouettes -->
        <g class="canopy" fill="#061206">
          <!-- Left trees -->
          <path d="M0 900 Q50 700 80 750 Q100 600 150 700 Q180 550 220 680 Q250 520 300 650 L300 1080 L0 1080 Z"/>
          <path d="M150 750 Q200 600 230 650 Q260 500 300 600 Q330 480 380 580 L380 1080 L150 1080 Z"/>
          <!-- Right trees -->
          <path d="M1600 720 Q1650 580 1700 640 Q1750 500 1800 600 Q1850 480 1920 580 L1920 1080 L1600 1080 Z"/>
          <path d="M1700 650 Q1750 520 1800 580 Q1850 450 1920 550 L1920 1080 L1700 1080 Z"/>
        </g>

        <!-- Ferns and plants foreground -->
        <g class="ferns" fill="#051005">
          <ellipse cx="100" cy="1050" rx="150" ry="80"/>
          <ellipse cx="1800" cy="1050" rx="180" ry="100"/>
          <ellipse cx="50" cy="1020" rx="100" ry="60"/>
          <ellipse cx="1870" cy="1020" rx="120" ry="70"/>
        </g>

        <!-- Lava river at bottom -->
        <path class="lava-river" d="M0 1000 Q400 950 600 980 Q900 920 1200 960 Q1600 910 1920 970 L1920 1080 L0 1080 Z" fill="url(#lavaGlow)">
          <animate attributeName="d" 
            values="M0 1000 Q400 950 600 980 Q900 920 1200 960 Q1600 910 1920 970 L1920 1080 L0 1080 Z;
                    M0 1000 Q400 970 600 950 Q900 960 1200 940 Q1600 950 1920 960 L1920 1080 L0 1080 Z;
                    M0 1000 Q400 950 600 980 Q900 920 1200 960 Q1600 910 1920 970 L1920 1080 L0 1080 Z" 
            dur="8s" repeatCount="indefinite"/>
        </path>

        <!-- Glowing lava cracks -->
        <g class="lava-cracks" filter="url(#jungleGlow)">
          <path d="M300 1050 Q400 1000 500 1030" stroke="#FF6F37" stroke-width="3" fill="none" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
          </path>
          <path d="M800 1020 Q900 980 1000 1010" stroke="#FF4500" stroke-width="2" fill="none" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
          </path>
          <path d="M1400 1040 Q1500 1000 1600 1030" stroke="#FF6F37" stroke-width="3" fill="none" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite"/>
          </path>
        </g>

        <!-- Floating particles/spores -->
        <g class="spores">
          <circle cx="200" cy="400" r="2" fill="#4a7c4a" opacity="0.4">
            <animate attributeName="cy" values="400;350;400" dur="6s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="500" cy="300" r="1.5" fill="#3d6b3d" opacity="0.5">
            <animate attributeName="cy" values="300;250;300" dur="7s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="900" cy="350" r="2" fill="#4a7c4a" opacity="0.4">
            <animate attributeName="cy" values="350;300;350" dur="5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="1400" cy="280" r="1.5" fill="#3d6b3d" opacity="0.5">
            <animate attributeName="cy" values="280;230;280" dur="6s" repeatCount="indefinite"/>
          </circle>
          <circle cx="1700" cy="380" r="2" fill="#4a7c4a" opacity="0.4">
            <animate attributeName="cy" values="380;330;380" dur="7s" repeatCount="indefinite"/>
          </circle>
        </g>

        <!-- Volcano silhouette in distance -->
        <g class="volcano-silhouette" opacity="0.3">
          <path d="M850 600 Q900 450 960 520 Q1000 380 1080 480 Q1150 350 1250 480 Q1320 400 1400 550 L1400 1080 L800 1080 Z" fill="#080808"/>
          <ellipse cx="1080" cy="480" rx="80" ry="25" fill="#FF4500" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite"/>
          </ellipse>
        </g>
      </svg>
    </div>

    <!-- Central Eye Container -->
    <div class="eye-container">
      <Eye 
        :eye-color="'#7CFC00'"
        :intensity="2.0"
        :pupil-size="0.65"
        :iris-width="0.28"
        :glow-intensity="0.5"
        :scale="1.0"
        :noise-scale="1.2"
        :flame-speed="0.8"
        :background-color="'#000000'"
      />
    </div>

    <!-- Content overlay -->
    <div class="content-wrapper">
      <div class="content">
        <p class="coming-soon">
          <span class="coming-letter" v-for="(letter, i) in 'EM BREVE'.split('')" :key="i">{{ letter }}</span>
        </p>

        <h1 class="title">
          <span class="title-line" v-for="(line, i) in titleLines" :key="i">{{ line }}</span>
        </h1>

        <p class="subtitle">
          <span class="subtitle-word" v-for="(word, i) in subtitleWords" :key="i">{{ word }}&nbsp;</span>
        </p>

        <div class="decorative-line"></div>

        <div class="status-indicator">
          <span class="pulse-dot"></span>
          <span class="status-text">Monitoramento Ativo</span>
        </div>
      </div>
    </div>

    <!-- Corner decorations -->
    <div class="corner corner-tl">
      <svg viewBox="0 0 100 100">
        <path d="M0 50 Q0 0 50 0" stroke="#2d5a2d" stroke-width="2" fill="none"/>
        <circle cx="5" cy="5" r="3" fill="#7CFC00"/>
      </svg>
    </div>
    <div class="corner corner-tr">
      <svg viewBox="0 0 100 100">
        <path d="M100 50 Q100 0 50 0" stroke="#2d5a2d" stroke-width="2" fill="none"/>
        <circle cx="95" cy="5" r="3" fill="#7CFC00"/>
      </svg>
    </div>
    <div class="corner corner-bl">
      <svg viewBox="0 0 100 100">
        <path d="M0 50 Q0 100 50 100" stroke="#2d5a2d" stroke-width="2" fill="none"/>
        <circle cx="5" cy="95" r="3" fill="#FF6F37"/>
      </svg>
    </div>
    <div class="corner corner-br">
      <svg viewBox="0 0 100 100">
        <path d="M100 50 Q100 100 50 100" stroke="#2d5a2d" stroke-width="2" fill="none"/>
        <circle cx="95" cy="95" r="3" fill="#FF6F37"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import Eye from '~/components/Eye.vue'

const titleLines = ['OBSERVATÓRIO', 'DO VULCÃO']
const subtitleWords = ['Monitoramento', 'Vulcânico', 'em', 'Tempo', 'Real']
</script>

<style scoped>
.landing-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #050a05;
}

.bg-layer {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 30% 80%, rgba(124, 252, 0, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 70%, rgba(255, 69, 0, 0.08) 0%, transparent 40%),
    radial-gradient(ellipse at 50% 90%, rgba(45, 90, 45, 0.1) 0%, transparent 60%);
  z-index: 0;
}

.fog-layer {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(5, 21, 5, 0.3) 50%, rgba(10, 26, 10, 0.5) 100%);
  z-index: 1;
  pointer-events: none;
}

.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 2px,
    rgba(0, 0, 0, 0.15) 2px,
    rgba(0, 0, 0, 0.15) 4px
  );
  z-index: 100;
  pointer-events: none;
  opacity: 0.5;
}

.jungle-bg {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.jungle-svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.eye-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 350px;
  z-index: 10;
}

.content-wrapper {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  pointer-events: none;
}

.content {
  text-align: center;
  padding: 2rem;
}

.coming-soon {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.4em;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 0.1em;
}

.coming-letter {
  color: #7CFC00;
  opacity: 0.7;
  animation: letterGlow 2s ease-in-out infinite;
}

.coming-letter:nth-child(odd) {
  animation-delay: 0.1s;
}

@keyframes letterGlow {
  0%, 100% { opacity: 0.5; text-shadow: none; }
  50% { opacity: 1; text-shadow: 0 0 10px rgba(124, 252, 0, 0.5); }
}

.title {
  font-family: 'Bebas Neue', 'Impact', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  margin-bottom: 1rem;
}

.title-line {
  font-size: clamp(2.5rem, 8vw, 5rem);
  color: #7CFC00;
  letter-spacing: 0.15em;
  text-shadow: 
    0 0 20px rgba(124, 252, 0, 0.4),
    0 0 40px rgba(124, 252, 0, 0.2),
    0 2px 0 #2d5a2d;
  line-height: 1;
}

.title-line:last-child {
  font-size: clamp(2rem, 6vw, 4rem);
  color: #FF6F37;
  text-shadow: 
    0 0 20px rgba(255, 111, 55, 0.4),
    0 0 40px rgba(255, 111, 55, 0.2),
    0 2px 0 #8B4513;
}

.subtitle {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: clamp(0.7rem, 2vw, 0.9rem);
  color: #5a8a5a;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.subtitle-word {
  transition: all 0.3s ease;
}

.subtitle-word:hover {
  color: #7CFC00;
  text-shadow: 0 0 10px rgba(124, 252, 0, 0.5);
}

.decorative-line {
  width: 200px;
  height: 2px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(90deg, transparent, #2d5a2d, #7CFC00, #2d5a2d, transparent);
}

.status-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #3d6b3d;
  letter-spacing: 0.2em;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #7CFC00;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(124, 252, 0, 0.7);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 10px 5px rgba(124, 252, 0, 0);
    transform: scale(1.2);
  }
}

.corner {
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 30;
  pointer-events: none;
}

.corner-tl { top: 0; left: 0; }
.corner-tr { top: 0; right: 0; transform: scaleX(-1); }
.corner-bl { bottom: 0; left: 0; transform: scaleY(-1); }
.corner-br { bottom: 0; right: 0; transform: scale(-1); }

.corner svg {
  width: 100%;
  height: 100%;
}
</style>