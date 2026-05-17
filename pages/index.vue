<template>
  <div class="landing-page">
    <div class="rainbow-bg"></div>
    <div class="rainbow-bg-2"></div>
    <div class="rainbow-rings"></div>
    <div class="scanlines"></div>

    <div class="vulcan-background">
      <svg class="vulcan-svg" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FF4500">
              <animate attributeName="stop-color" values="#FF4500;#FF6600;#FF4500" dur="2s" repeatCount="indefinite"/>
            </stop>
            <stop offset="50%" stop-color="#FF6600">
              <animate attributeName="stop-color" values="#FF6600;#FF8800;#FF6600" dur="2s" repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stop-color="#CC3300">
              <animate attributeName="stop-color" values="#CC3300;#FF4500;#CC3300" dur="2s" repeatCount="indefinite"/>
            </stop>
          </linearGradient>
          <linearGradient id="smokeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#444" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#222" stop-opacity="0"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <!-- Smoke -->
        <g class="smoke" opacity="0.6">
          <ellipse cx="200" cy="80" rx="40" ry="30" fill="url(#smokeGradient)">
            <animate attributeName="cy" values="80;40;80" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="rx" values="40;50;40" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="ry" values="30;35;30" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.3;0.6" dur="4s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="170" cy="60" rx="30" ry="25" fill="url(#smokeGradient)">
            <animate attributeName="cy" values="60;20;60" dur="5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="5s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="230" cy="70" rx="35" ry="25" fill="url(#smokeGradient)">
            <animate attributeName="cy" values="70;30;70" dur="4.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="4.5s" repeatCount="indefinite"/>
          </ellipse>
        </g>

        <!-- Volcano body -->
        <path class="volcano-body" d="M100 500 L140 350 Q150 300 170 280 L200 250 L230 280 Q250 300 260 350 L300 500 Z" fill="#2D1B0E" stroke="#1A0F08" stroke-width="3"/>

        <!-- Crater rim -->
        <ellipse cx="200" cy="250" rx="60" ry="25" fill="#1A0F08"/>

        <!-- Lava pool -->
        <ellipse cx="200" cy="260" rx="45" ry="18" fill="url(#lavaGradient)" filter="url(#glow)">
          <animate attributeName="ry" values="18;22;18" dur="1.5s" repeatCount="indefinite"/>
        </ellipse>

        <!-- Lava bubbles -->
        <circle cx="180" cy="255" r="4" fill="#FFDD00" opacity="0.8">
          <animate attributeName="cy" values="255;245;255" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="210" cy="260" r="3" fill="#FFDD00" opacity="0.8">
          <animate attributeName="cy" values="260;248;260" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="195" cy="258" r="3" fill="#FFDD00" opacity="0.8">
          <animate attributeName="cy" values="258;246;258" dur="1.8s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.8s" repeatCount="indefinite"/>
        </circle>

        <!-- Magma veins -->
        <path d="M140 400 Q160 380 180 400" stroke="#FF4500" stroke-width="2" fill="none" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite"/>
        </path>
        <path d="M260 420 Q240 400 220 420" stroke="#FF4500" stroke-width="2" fill="none" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.5s" repeatCount="indefinite"/>
        </path>
        <path d="M150 450 Q175 430 200 450" stroke="#FF4500" stroke-width="2" fill="none" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite"/>
        </path>
      </svg>
    </div>

    <div class="eye-container">
      <Eye 
        :eye-color="'#FF6F37'"
        :intensity="1.8"
        :pupil-size="0.7"
        :glow-intensity="0.4"
        :scale="0.9"
      />
    </div>

    <div class="landing-content">
      <p class="coming-soon">Em Breve</p>

      <div class="title-wrapper">
        <h1 class="glitch-text" :data-text="titleText">
          {{ titleText }}
        </h1>
      </div>

      <p class="subtitle">Monitoramento Vulcânico em Tempo Real</p>
    </div>
  </div>
</template>

<script setup>
import Eye from '~/components/Eye.vue'

const titleText = 'OBSERVATÓRIO'
</script>

<style scoped>
.landing-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.vulcan-background {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: auto;
  z-index: 1;
  pointer-events: none;
}

.vulcan-svg {
  width: 100%;
  height: auto;
}

.eye-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  z-index: 2;
}

.landing-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 2rem;
}

.rainbow-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a0a0a 50%, #0a0505 100%);
  z-index: 0;
}

.rainbow-bg-2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center bottom, rgba(255, 69, 0, 0.15) 0%, transparent 60%);
  z-index: 0;
}

.rainbow-rings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(255, 100, 50, 0.03) 10deg 20deg);
  z-index: 0;
}

.scanlines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 4px);
  z-index: 10;
  pointer-events: none;
}

.coming-soon {
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  color: #FF6F37;
  letter-spacing: 0.3em;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.title-wrapper {
  margin-bottom: 1rem;
}

.glitch-text {
  font-family: 'Impact', sans-serif;
  font-size: clamp(3rem, 10vw, 6rem);
  color: #FF6F37;
  text-shadow: 0 0 10px rgba(255, 111, 55, 0.5), 0 0 20px rgba(255, 111, 55, 0.3), 0 0 40px rgba(255, 111, 55, 0.2);
  letter-spacing: 0.1em;
  position: relative;
}

.subtitle {
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  color: #888;
  letter-spacing: 0.1em;
}
</style>