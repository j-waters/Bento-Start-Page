<template>
  <button id="config-button" class="animated" @click="showModal = !showModal">
    <vue-feather type="settings" size="25"></vue-feather>
  </button>
  <config-modal
    :show="showModal"
    :config="config"
    @close="showModal = false"
    @updateConfig="$emit('updateConfig', $event)"
  ></config-modal>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ConfigModal from "@/components/ConfigModal.vue";
import { Config } from "@/models/config";

export default defineComponent({
  name: "ConfigButton",
  components: { ConfigModal },
  props: {
    config: {
      type: Object as PropType<Config>,
      required: false,
    },
  },
  emits: ["updateConfig"],
  data() {
    return {
      showModal: false,
    };
  },
});
</script>

<style lang="scss" scoped>
#config-button {
  position: absolute;
  margin: 2em 2em 0 0;
  right: 0;
  top: 0;
  color: var(--sbg);
  border: none;
  cursor: pointer;
  background-color: #00000000;
  transition: var(--transition-duration) ease-in-out;

  &:hover {
    color: var(--fg);
  }
}
</style>
