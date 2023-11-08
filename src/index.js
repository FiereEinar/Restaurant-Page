import '../src/style.css';
import { Details } from "./details";

const container = document.querySelector(".content")
const details = new Details(container);

details.render();

