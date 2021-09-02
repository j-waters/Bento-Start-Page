<template>
  <div class="columns is-desktop is-vcentered">
    <div class="column">
    <div class="tile is-vertical">
      <div class="tile">
        <shortcut-tile></shortcut-tile>
        <shortcut-tile></shortcut-tile>
        <shortcut-tile></shortcut-tile>
      </div>
      <div class="tile">
        <shortcut-tile></shortcut-tile>
        <shortcut-tile></shortcut-tile>
        <shortcut-tile></shortcut-tile>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShortcutTile from "@/components/ShortcutTile.vue";

export default defineComponent({
  name: "MainShortcuts",
  components: { ShortcutTile }
});
</script>

<style scoped>

</style>
