import { createApp } from "vue";
import App from "./App.vue";
import "./style.scss";
import VueFeather from "vue-feather";

console.log("Current saved config:");
console.log(
  JSON.stringify(JSON.parse(localStorage.getItem("config") ?? "null"), null, 4)
);

console.log(
  "If the page isn't loading properly, copy the following into the console and hit enter:"
);
console.log("localStorage.clear()");
console.log("Then reload the page");

const app = createApp(App);

app.component(VueFeather.name!, VueFeather).mount("#app");
