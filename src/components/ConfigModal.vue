<template>
  <transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container card" @click.stop>
          <h1 class="modal-header">Config</h1>

          <div class="modal-body">
            <textarea v-model="json" :class="{ invalid }"></textarea>
          </div>
          <div class="modal-footer">
            <button
              class="button primary text-small animated"
              @click="save()"
              :disabled="invalid"
            >
              Save
            </button>
            <button class="button text-small animated" @click="reset()">
              Reset
            </button>
            <button class="button text-small animated" @click="resetDefault()">
              Reset to default
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Config } from "@/models/config";
import defaultConfig from "@/assets/default-config";

export default defineComponent({
  name: "ConfigModal",
  props: {
    show: Boolean,
    config: {
      type: Object as PropType<Config>,
      required: true,
    },
  },
  emits: ["updateConfig", "close"],
  data() {
    return {
      json: this.getJSON(),
    };
  },
  methods: {
    reset() {
      this.json = this.getJSON();
    },
    getJSON(config?: Config) {
      return JSON.stringify(config ?? this.config, null, 4);
    },
    save() {
      this.$emit("updateConfig", JSON.parse(this.json));
      this.$emit("close");
    },
    resetDefault() {
      this.json = this.getJSON(defaultConfig);
    },
  },
  computed: {
    invalid() {
      try {
        JSON.parse(this.json);
      } catch (e) {
        return true;
      }
      return false;
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: fit-content;
  height: fit-content;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.button {
  border: none;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 6px;
  float: right;
  cursor: pointer;
  margin-left: 15px;

  background-color: var(--bg);
  color: var(--fg);

  &.primary {
    background-color: var(--accent);
    color: white;
  }

  &:hover:not(:disabled) {
    box-shadow: 0 3px 10px 3px rgb(0 0 0 / 35%);
  }

  &:disabled {
    cursor: default;
    background-color: lightgray;
    color: black;
  }
}

.modal-footer {
  display: inline-block;
  width: 100%;
}

textarea {
  width: 50vw;
  height: 50vh;
  background-color: var(--bg);
  color: var(--fg);
  border-color: black;

  &:focus-visible {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 10px var(--accent);
  }

  &.invalid {
    outline: none;
    border-color: red;
    &:focus-visible {
      box-shadow: 0 0 10px red;
    }
  }
}

::-webkit-resizer {
  background-color: var(--sbg);
}
</style>
