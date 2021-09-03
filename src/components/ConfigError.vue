<template>
  <b>Config error</b>
  <p>{{ error }}</p>
  <p>
    Config has been reset to default. See console for dump of current config and
    instructions on how to fix things.
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConfigError",
  props: {
    error: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
