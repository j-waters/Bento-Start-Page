<template>
  <body>
    <config-button
      :config="config"
      @updateConfig="updateConfig($event)"
    ></config-button>
    <div class="container">
      <clock :config="{ ...config.greetings, name: config.name }"></clock>
      <weather></weather>

      <shortcut-tiles :config="config.tiles"></shortcut-tiles>
      <shortcut-columns :config="config.columns"></shortcut-columns>
    </div>
  </body>
</template>

<script lang="ts">
import { Component, defineComponent } from "vue";
import ShortcutTiles from "@/components/ShortcutTiles.vue";
import Clock from "@/components/Clock.vue";
import Weather from "@/components/Weather.vue";
import { Config } from "@/models/config";
import ShortcutColumns from "@/components/ShortcutColumns.vue";
import defaultConfig from "@/assets/default-config";
import ConfigButton from "@/components/ConfigButton.vue";

import { createToast, withProps } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import ConfigError from "@/components/ConfigError.vue";

export default defineComponent({
  name: "App",
  components: {
    ConfigButton,
    ShortcutColumns,
    ShortcutTiles,
    Weather,
    Clock,
  },
  data() {
    return {
      config: defaultConfig,
    };
  },
  methods: {
    updateConfig(config: Config) {
      this.config = config;
      localStorage.setItem("config", JSON.stringify(this.config));
    },
  },
  created() {
    const config = localStorage.getItem("config");
    if (config) {
      this.updateConfig(JSON.parse(config));
    }
  },
  errorCaptured(error, instance: Component | null, info) {
    const config = JSON.stringify(this.config, null, 4);

    this.updateConfig(defaultConfig);

    createToast(withProps(ConfigError, { error, config }), {
      type: "danger",
      timeout: -1,
    });
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap");

.text {
  &-giant {
    font-size: v-bind("config.style.fontSizes.giant");
  }

  &-large {
    font-size: v-bind("config.style.fontSizes.large");
  }

  &-medium {
    font-size: v-bind("config.style.fontSizes.medium");
  }

  &-small {
    font-size: v-bind("config.style.fontSizes.small");
  }
}

/* V A R I A B L E S */

* {
  --iconsize: v-bind("config.style.iconSize");

  /* Light theme  */
  --accent: v-bind("config.style.accent");
  --bg: v-bind("config.style.background");
  --sbg: v-bind("config.style.backgroundSecondary");

  --fg: v-bind("config.style.foreground");
  --sfg: v-bind("config.style.accentForeground");

  /* Image background  */

  /* Uncoment this section to get the
    image wallpaper. You can also
    change the --imgcol value
    to make the filter to your own */

  //--imgbg: url(assets/background.jpg);
  --imgcol: linear-gradient(
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.7)
  ); /* Filter color */

  --transition-duration: 0.2s;
}

/* S T Y L E S */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

div,
a {
  color: v-bind("config.style.foreground");
}

.withImageBackground {
  background-image: var(--imgcol), var(--imgbg);
  background-size: cover;
}

body {
  width: 100vw;
  height: 100vh;
  background-color: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

html {
  overflow: hidden;
}

.container {
  width: 145vh;
  height: 85vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 20px;
}

.animated {
  transition: var(--transition-duration) ease-in-out;
}

.card {
  background-color: var(--sbg);
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
}

.raise {
}

.card.animated:hover {
  transform: translateY(-0.2rem);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.35);
}

/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--accent);
}

/* M E D I A - Q U E R I E S */

@media only screen and (max-width: 68.75em) {
  .container {
    grid-gap: 20px;
    padding: 40px;
  }
}
</style>
