import feather from "feather-icons"
import loadWeather from "./weather"
import createClock from './time';
import setMessage from './greeting';
import setLinks from './links';

loadWeather()
setLinks()
feather.replace()
createClock()
setMessage()

document.getElementById('container')!.classList.remove('hidden')
