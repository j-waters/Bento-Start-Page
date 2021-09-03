<template>
  <shortcut-column :config="config[0]" :grid-column="3"></shortcut-column>
  <shortcut-column :config="config[1]" :grid-column="4"></shortcut-column>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ShortcutColumn from "@/components/ShortcutColumn.vue";
import { ColumnsConfig } from "@/models/config";

export default defineComponent({
  name: "ShortcutColumns",
  components: { ShortcutColumn },
  props: {
    config: {
      type: Object as PropType<ColumnsConfig>,
    },
  },
});
</script>
