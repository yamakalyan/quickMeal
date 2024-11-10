import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./Store.js";

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});

const loader = document.querySelector("#preloader");

if (loader) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("loaded");
    }, 1000);
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
