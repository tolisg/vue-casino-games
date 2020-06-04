<template>
  <div id="app">
    <div class="main-section">
      <router-view />
    </div>
  </div>
</template>
<script>
import 'bootstrap';

export default {
  name: 'App',
};
</script>
<style lang="scss">
@import '@/assets/styles/index.scss';
</style>
