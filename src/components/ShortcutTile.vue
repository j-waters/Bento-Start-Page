<template>
  <a :href="config.url" target="_blank" class="tile card">
    <vue-feather :type="config.icon"></vue-feather>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TileLink } from "@/models/link";

export default defineComponent({
  name: "ShortcutTile",
  props: {
    index: {
      type: Number,
      required: true
    },
    config: Object as PropType<TileLink>
  },
});
</script>

<style lang="scss" scoped>
.tile {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.tile:hover {
  background-color: var(--accent);
}
.tile:hover ::v-deep svg {
  stroke: var(--sfg);
}

::v-deep .vue-feather__content {
  width: var(--iconsize);
  height: var(--iconsize);
}
</style>
