import '../src/style.css';
import { Details } from "./details";
import { Home } from "./home";

const container = document.querySelector(".content")
const home = new Home(container);
const details = new Details(container);
const navBtn = document.querySelectorAll(".navBtn");

function removeActiveClass() {
    navBtn.forEach((btn) => {
        btn.classList.remove("active");
    })
}

navBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        removeActiveClass();
        btn.classList.add("active");
        switch (btn.id) {
            case 'home':
                home.render();
                break;
            case 'details':
                details.render();
                break;
        }
    });
})


// details.render();
// home.render();