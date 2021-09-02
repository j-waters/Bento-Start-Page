<template>
  <div class="tile is-parent">
    <div class="tile is-child">
      <div class="weather-block">
        <div class="date">
          <div id="month" class="">Sep</div>
          <div id="day" class="">2</div>
        </div>
        <div class="weather">
          <div class="weather-icon">
            <img :src="icon">
          </div>
          <div class="temperature-value">
            <p class="">{{ temperature }} °<span class="g">c</span></p>
          </div>
          <div class="temperature-description">
            <p class="">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OpenWeatherMap from 'openweathermap-ts';
import { CurrentResponse } from "openweathermap-ts/dist/types";
const openWeather = new OpenWeatherMap({
  apiKey: '8c0c08361dcb77fbc5ba11eddad850b7'
});

var tempUnit = 'C';

const KELVIN = 273.15;

export default defineComponent({
  name: "Weather",
  data() {
    return {
      weatherData: {} as CurrentResponse
    }
  },
  methods: {
    async updateWeather() {
      this.weatherData = await openWeather.getCurrentWeatherByCityName({
        cityName: "southampton"
      });
    }
  },
  computed: {
    temperature(): string {
      if (!this.weatherData?.main) {
        return ""
      }
      let temp = this.weatherData.main.temp
      console.log(temp)
      temp =
        tempUnit == 'C' ? temp : (temp * 9) / 5 + 32;

      return temp.toString();
    },
    icon(): string {
      if (!this.weatherData?.weather) {
        return ""
      }
      const weatherIcon = this.weatherData.weather[0].icon
      return require(`@/assets/icons/${weatherIcon}.png`)
    },
    description(): string  {
      if (!this.weatherData?.weather) {
        return ""
      }
      return this.weatherData.weather[0].description
    }
  },
  created() {
    this.updateWeather()
  }
});
</script>

<style scoped>
.weather-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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

.date div{
  font-size: 12vh;
  font-weight: bold;
  color: black;
}

.temperature-value p {
  font-size: 3vh;
  font-weight: bolder;
  margin-left: 15px;
  color: black;
}

.weather-icon img {
  width: 70px;
  height: 70px;
}

.temperature-description p {
  font-size: 3vh;
  margin-left: 15px;
  color: black;
}
</style>
