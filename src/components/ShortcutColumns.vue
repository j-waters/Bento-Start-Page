<template>
  <div class="tile">
    <shortcut-column></shortcut-column>
    <shortcut-column></shortcut-column>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShortcutColumn from "@/components/ShortcutColumn.vue";

export default defineComponent( {
  name: "ShortcutColumns",
  components: { ShortcutColumn }
});
</script>

<style scoped>

</style>
