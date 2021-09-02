<template>
<div class="tile is-parent">
  <div class="tile is-child">
    <div class="time">
      <div class="clock">
        <div>{{ pad(hour) }}</div>
        <div> : </div>
        <div>{{ pad(minute) }}</div>
        <div> : </div>
        <div>{{ pad(second) }}</div>
      </div>
      <div id="greetings" class="">Good evening,&nbsp;John</div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Clock",
  data() {
    return {
      hour: 0,
      minute: 0,
      second: 0,
    }
  },
  methods: {
    setTime () {
      setInterval(() => {
        const date = new Date()
        this.hour = date.getHours()
        this.minute = date.getMinutes()
        this.second = date.getSeconds()
      }, 1000)
    },
    pad(number: number) {
      return ('0' + number).slice(-2)
    }
  },
  mounted () {
    this.setTime()
  },
});
</script>

<style scoped>
.time {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.clock {
  display: flex;
  align-items: center;
  justify-content: center;
}

.clock div {
  font-size: 12vh;
  font-weight: bolder;
  color: black;
}
</style>
