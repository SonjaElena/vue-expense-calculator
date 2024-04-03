import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"; // style file for toastification from the github
import "./assets/style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(Toast);
app.mount("#app");
