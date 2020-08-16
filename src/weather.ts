export default function loadWeather() {
  return new Promise((resolve, reject) => {
    getPosition().then(position => getWeather(position.coords.latitude, position.coords.longitude)
      .then(value => resolve)
      .catch(reason => reject))
  })
}

type Weather = {
  temperature?: number;
  description?: string;
  iconId?: string;
};

// @ts-ignore
const key = import.meta.env.SNOWPACK_PUBLIC_OPEN_WEATHER_MAP_KEY;

const KELVIN = 273;

function getWeather(latitude: number, longitude: number) {
  return new Promise((resolve, reject) => {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    let prevStr = localStorage.getItem('weather')
    if (prevStr) {
      let prev: {weather: Weather, date: string} = JSON.parse(prevStr)

      if (prev) {
        let tDiff = new Date().getSeconds() - new Date(prev.date).getSeconds();
        if (tDiff < 60 * 5) {
          displayWeather(prev.weather);
          resolve()
          return;
        }
      }
    }

    let weather: Weather = {}

    fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        weather.temperature = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        localStorage.setItem('weather', JSON.stringify({ weather, date: new Date() }))
        displayWeather(weather);
        resolve()
      })
      .catch(reason => reject(reason));
  })
}

function displayWeather(weather: Weather) {
  const iconElement = document.querySelector('.weather-icon');
  const tempElement = document.querySelector('.temperature-value p');
  const descElement = document.querySelector('.temperature-description p');
  iconElement!.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
  tempElement!.innerHTML = `${weather.temperature}°<span>C</span>`;
  descElement!.innerHTML = weather.description ?? '';
  document.getElementById('weather')!.classList.remove('hidden')
}

function getPosition (options?: PositionOptions) {
  return new Promise<Position>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
