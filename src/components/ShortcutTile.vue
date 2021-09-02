<template>
  <div class="tile is-parent">
    <div class="tile is-child box shortcut-tile">
      <div class="level-item has-text-centered">
        <vue-feather type="star" size="32"></vue-feather>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShortcutTile"
});
</script>

<style lang="scss" scoped>
.shortcut-tile {
  padding: 4vh 4vw;

  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 10px 10px rgb(0 0 0 / 35%);
    background-color: var(--accent);
  }

  ::v-deep .vue-feather__content {
    width: var(--icon-size);
    height: var(--icon-size);
  }
}
</style>
