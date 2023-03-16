import "./scss/style.scss";
import html from "./index.html";
import { Dropdown } from "bootstrap";

require.context("./img", true, /\.jpg\.svg\.png$/);

const progressBar = document.querySelector("#progressBar");

window.addEventListener("scroll", () => {
  const windowScroll = document.documentElement.scrollTop;
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollAmount = (windowScroll / windowHeight) * 100;

  progressBar.setAttribute("aria-valuenow", Math.round(scrollAmount));
  progressBar.style.width = scrollAmount + "%";
  console.log(scrollAmount);
});