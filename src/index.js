import '../src/style.css';
import { Details } from "./details";
import { Home } from "./home";
import { Menu } from './menu';
import { Staff } from './staff';

const container = document.querySelector(".content")
const home = new Home(container);
const details = new Details(container);
const menu = new Menu(container);
const staff = new Staff(container);
const navBtn = document.querySelectorAll(".navBtn");

function removeActiveClass() {
    navBtn.forEach((btn) => {
        btn.classList.remove("active");
    });
}

function clear() {
    let prev = container.querySelectorAll("div");
    prev.forEach(div => div.remove());
}

function handleCLick(btn) {
    btn.classList.add("active");
    switch (btn.id) {
        case 'home':
            clear();
            home.render();
            break;
        case 'details':
            clear();
            details.render();
            break;
        case 'menu':
            clear();
            menu.render();
            break;
        case 'staff':
            clear();
            staff.render();
            break;
    }
}

home.render();
navBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        removeActiveClass();
        handleCLick(btn);
    });
});


// details.render();
// home.render();