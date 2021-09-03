<template>
  <div id="buttonsContainer" class="tiles">
    <shortcut-tile
      v-for="(link, i) in config"
      :key="link.icon"
      :config="link"
      :index="i"
    ></shortcut-tile>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ShortcutTile from "@/components/ShortcutTile.vue";
import { TileLink } from "@/models/link";

export default defineComponent({
  name: "ShortcutTiles",
  components: { ShortcutTile },
  props: {
    config: Array as PropType<TileLink[]>,
  },
});
</script>

<style lang="scss" scoped>
.tiles {
  grid-row: 3 / span 2;
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
  padding: 20px;
}

@media only screen and (max-width: 68.75em) {
  .tiles {
    grid-column: 1 / span 4;
    grid-gap: 3vw;
    padding-left: 100px;
    padding-right: 100px;
  }
}
</style>
