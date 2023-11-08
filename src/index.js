import '../src/style.css';
import { Details } from "./details";
import { Home } from "./home";

const container = document.querySelector(".content")
const home = new Home(container);
const details = new Details(container);

// details.render();
home.render();