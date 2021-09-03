<template>
  <div :style="style" class="card list">
    <div class="head">
      <vue-feather :type="config.icon"></vue-feather>
    </div>
    <a
      v-for="link in config.links"
      :key="link.label"
      :href="link.url"
      aria-expanded="false"
      class="link text-small"
      target="_blank"
      >{{ link.label }}</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ColumnConfig } from "@/models/config";
import { PropertiesHyphen } from "csstype";

export default defineComponent({
  name: "ShortcutColumn",
  props: {
    gridColumn: {
      type: Number,
      required: true,
    },
    config: {
      type: Object as PropType<ColumnConfig>,
    },
  },
  computed: {
    style(): PropertiesHyphen {
      return {
        "grid-column": this.gridColumn,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-row: 3 / span 2;
}

.head {
  margin-top: 3vh;

  margin-bottom: 0;
  color: var(--fg);

  ::v-deep .vue-feather__content {
    width: var(--iconsize);
    height: var(--iconsize);
  }
}

.link {
  text-decoration: none;
  margin-top: 1vh;
  padding: 8px 12px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  width: 80%;
}

.link:hover {
  background-color: var(--accent);
  color: var(--sfg);
}

@media only screen and (max-width: 68.75em) {
  .list {
    display: none;
  }
}
</style>
