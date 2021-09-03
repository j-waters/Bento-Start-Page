<template>
  <body>
    <div class="container">
      <clock :config="{ ...config.greetings, name: config.name }"></clock>
      <weather></weather>

      <shortcut-tiles :config="config.tiles"></shortcut-tiles>
      <shortcut-columns :config="config.columns"></shortcut-columns>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShortcutTiles from "@/components/ShortcutTiles.vue";
import ShortcutColumn from "@/components/ShortcutColumn.vue";
import Clock from "@/components/Clock.vue";
import Weather from "@/components/Weather.vue";
import { Config } from "@/models/config";
import ShortcutColumns from "@/components/ShortcutColumns.vue";

export default defineComponent({
  name: "App",
  components: {
    ShortcutColumns,
    ShortcutTiles,
    Weather,
    Clock,
    ShortcutColumn,
  },
  data() {
    return {
      config: {
        columns: [
          {
            icon: "briefcase",
            links: [
              { url: "https://secure.ecs.soton.ac.uk", label: "ECS" },
              {
                url: "https://home.blackboard.soton.ac.uk/",
                label: "Blackboard",
              },
              { url: "https://notion.so", label: "Notion" },
            ],
          },
          {
            icon: "coffee",
            links: [
              { url: "https://smile.amazon.co.uk", label: "Amazon" },
              { url: "https://reddit.com/", label: "Reddit" },
              { url: "https://twoseven.xyz/", label: "TwoSeven" },
              { url: "https://netflix.com", label: "Netflix" },
              { url: "https://messenger.com", label: "Messenger" },
            ],
          },
        ],
        tiles: [
          {url: 'https://github.com/', icon: 'github'},
          {url: 'https://youtube.com/', icon: 'youtube'},
          {url: 'https://mail.google.com/', icon: 'mail'},
          {url: 'https://maps.google.com/', icon: 'map'},
          {url: 'https://calendar.google.com/', icon: 'calendar'},
          {url: 'https://drive.google.com/', icon: 'folder'},
        ],
        style: {
          iconSize: '4vh',
          foreground: "#d8dee9",
          fontSizes: {
            giant: '12vh',
            large: '8vh',
            medium: '3vh',
            small: '2vh'
          },
          accent: "#ab47bc",
          background: "#292D3E",
          backgroundSecondary: "#32364C",
          accentForeground: "#d8dee9"
        },
        greetings: {
          morning: [
            "Good morning %!"
          ],
          afternoon: [
            "Good afternoon %!"
          ],
          evening: [
            "Good evening %!"
          ],
          night: [
            "Good night %!"
          ],
        },
        name: "James",
      } as Config,
    };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap");

.text {
  &-giant {
    font-size: v-bind('config.style.fontSizes.giant');
  }

  &-large {
    font-size: v-bind('config.style.fontSizes.large');
  }

  &-medium {
    font-size: v-bind('config.style.fontSizes.medium');
  }

  &-small {
    font-size: v-bind('config.style.fontSizes.small');
  }
}

/* V A R I A B L E S */

* {
  --iconsize: v-bind('config.style.iconSize');

  /* Light theme  */
  --accent: v-bind('config.style.accent');
  --bg: v-bind('config.style.background');
  --sbg: v-bind('config.style.backgroundSecondary');

  --fg: v-bind('config.style.foreground');
  --sfg: v-bind('config.style.accentForeground');

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
}

/* S T Y L E S */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  transition: 0.2s ease-in-out;
}

div, a {
  color: v-bind('config.style.foreground')
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

.container {
  width: 145vh;
  height: 85vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 20px;
}

.card {
  background-color: var(--sbg);
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
}

.card:hover {
  transform: translateY(-0.2rem);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.35);
}
/* M E D I A - Q U E R I E S */

@media only screen and (max-width: 68.75em) {
  .container {
    grid-gap: 20px;
    padding: 40px;
  }
}
</style>
