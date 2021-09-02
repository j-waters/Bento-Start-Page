<template>
  <div class="tile is-parent"><div class="tile is-child box shortcut-column">
    <div class="header">
      <vue-feather type="briefcase"></vue-feather>
    </div>
    <div v-for="link in links" class="item" :key="link.url">{{link.title}}</div>
  </div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent( {
  name: "ShortcutColumn",
  data() {
    return {
      links: [
        {title: "reddit", url: "reddit.com"},
        {title: "mail", url: "mail.google.com"}
      ]
    }
  }
});
</script>

<style lang="scss" scoped>
.shortcut-column {
  width: 22vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  &:hover {
     transform: translateY(-0.2rem);
     box-shadow: 0 10px 10px rgb(0 0 0 / 35%);
   }
}

.header {
  margin-top: 3vh;
  margin-bottom: 2vh;
  color: black;
}

::v-deep .vue-feather__content {
  width: var(--icon-size);
  height: var(--icon-size);
}
</style>
