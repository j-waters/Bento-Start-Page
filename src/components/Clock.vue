<template>
  <div class="timeBlock">
    <div class="clock text-giant">
      <div>{{ hour }}</div>
      <div> : </div>
      <div>{{ minute }}</div>
      <div> : </div>
      <div>{{ second }}</div>
    </div>
    <div class="greetings text-medium">{{ greeting }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { GreetingsConfig } from "@/models/config";
export default defineComponent({
  name: "Clock",
  props: {
    config: {
      type: Object as PropType<GreetingsConfig & {name: string}>,
      required: true
    }
  },
  data() {
    return {
      hour: 0,
      minute: 0,
      second: 0,
    }
  },
  methods: {
    setTime () {
      const date = new Date()
      this.hour = date.getHours()
      this.minute = date.getMinutes()
      this.second = date.getSeconds()
    },
    pad(number: number) {
      return ('0' + number).slice(-2)
    }
  },
  computed: {
    greeting() {
      const today = new Date();
      const hour = today.getHours();

      let possibleGreetings: string[];
      if (hour >= 23 && hour < 5) {
        possibleGreetings = this.config.night
      } else if (hour >= 6 && hour < 12) {
        possibleGreetings = this.config.morning
      } else if (hour >= 12 && hour < 17) {
        possibleGreetings = this.config.afternoon
      } else {
        possibleGreetings = this.config.evening
      }

      const selectedGreeting = possibleGreetings[Math.floor(Math.random()*possibleGreetings.length)];

      return selectedGreeting.replaceAll('%', this.config.name)
    }
  },
  mounted () {
    this.setTime()
    setInterval(() => this.setTime(), 1000)
  },
});
</script>

<style lang="scss" scoped>
.timeBlock {
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.clock {
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: bolder;
  }
}

@media only screen and (max-width: 68.75em) {
  .timeBlock {
    grid-row: 1 / span 2;
    grid-column: 1 / span 4;
  }
}
</style>
