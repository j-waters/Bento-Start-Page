<template>
  <div class="columns is-desktop is-vcentered" :style="cssVars">
    <div class="column">
    <div class="tile is-ancestor top">
      <clock></clock>
      <weather></weather>
    </div>
    <div class="tile is-ancestor bottom">
      <main-shortcuts></main-shortcuts>
      <shortcut-columns></shortcut-columns>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainShortcuts from "@/components/MainShortcuts.vue";
import ShortcutColumns from "@/components/ShortcutColumns.vue";
import Clock from "@/components/Clock.vue";
import Weather from "@/components/Weather.vue";

export default defineComponent({
  name: "App",
  components: {
    Weather,
    Clock,
    ShortcutColumns,
    MainShortcuts
    // MainShortcuts,
  },
  computed: {
    cssVars() {
      return {
        // '--bg-color': this.bgColor,
        // '--height': this.height + 'px'
        '--accent': '#ff0000',
        '--icon-size': '4vh',
        '--background': '#00ff00'
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.bottom {
  height: 40vh;
}

.top {
  height: 40vh;
}
</style>

<style lang="scss">
body {
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  transition: 0.2s ease-in-out;
}

app {
  width: 100vw;
}

html {
  overflow: hidden !important;
}
</style>
