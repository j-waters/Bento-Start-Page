<template>
  <div class="weather-block">
    <div class="date text-large">
      <div id="month">{{ month }}</div>
      <div id="day">{{ pad(date) }}</div>
    </div>
    <div class="weather">
      <div class="weather-icon">
        <img :src="icon" />
      </div>
      <div class="temperature-value text-medium">
        <p>{{ temperature }} °<span class="g">c</span></p>
      </div>
      <div class="temperature-description text-medium">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OpenWeatherMap from "openweathermap-ts";
import { CurrentResponse } from "openweathermap-ts/dist/types";

const openWeather = new OpenWeatherMap({
  apiKey: process.env.VUE_APP_WEATHER_API_KEY,
  units: "metric",
});

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default defineComponent({
  name: "Weather",
  data() {
    return {
      weatherData: {} as CurrentResponse,
    };
  },
  methods: {
    async updateWeather() {
      const cached = localStorage.getItem("weatherData");
      if (cached) {
        this.weatherData = JSON.parse(cached);
      }
      this.weatherData = await openWeather.getCurrentWeatherByCityName({
        cityName: "southampton",
      });

      if (this.weatherData) {
        localStorage.setItem("weatherData", JSON.stringify(this.weatherData));
      }
    },
    pad(number: number) {
      return ("0" + number).slice(-2);
    },
  },
  computed: {
    temperature(): string {
      if (!this.weatherData?.main) {
        return "";
      }
      let temp = this.weatherData.main.temp;
      return temp.toFixed(1);
    },
    icon(): string {
      if (!this.weatherData?.weather) {
        return "";
      }
      const weatherIcon = this.weatherData.weather[0].icon;
      return require(`@/assets/icons/${weatherIcon}.png`);
    },
    description(): string {
      if (!this.weatherData?.weather) {
        return "";
      }
      return this.weatherData.weather[0].description;
    },
    month(): string {
      return monthNames[new Date().getMonth()];
    },
    date(): number {
      return new Date().getDate();
    },
  },
  created() {
    this.updateWeather();
  },
});
</script>

<style lang="scss" scoped>
.weather-block {
  grid-column: 3 / span 2;
  grid-row: 1 / span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.date {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.weather {
  display: flex;
  align-items: center;
  justify-content: center;
}

.date div {
  font-weight: bold;
}

#day {
  margin-left: 20px;
}

.weather-icon img {
  width: 70px;
  height: 70px;
}

.temperature-value p {
  font-weight: bolder;
  margin-left: 15px;
}

.temperature-description p {
  margin-left: 15px;
}

@media only screen and (max-width: 68.75em) {
  .weather-block {
    display: none;
  }
}
</style>
