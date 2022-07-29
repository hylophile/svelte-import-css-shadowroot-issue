import App from "./App.svelte";
import './app.css'

const target = document.getElementById("app");
const shadowRoot = document.getElementById("app2").attachShadow({ mode: "open" });

const app = new App({
  target: shadowRoot
  // target
});

export default app;
