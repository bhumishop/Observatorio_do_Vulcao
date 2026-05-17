<template>
  <div class="landing-page">
    <div class="rainbow-bg"></div>
    <div class="rainbow-bg-2"></div>
    <div class="rainbow-rings"></div>
    <div class="scanlines"></div>

    <div class="landing-content">
      <p class="coming-soon">Em Breve</p>

      <div class="title-wrapper">
        <h1 class="glitch-text" :data-text="titleText">
          {{ titleText }}
        </h1>
      </div>

      <p class="subtitle">Monitoramento Vulcânico em Tempo Real</p>

      <div class="volcano-icon">🌋</div>
    </div>
  </div>
</template>

<script setup>
const titleText = 'OBSERVATÓRIO'
</script>