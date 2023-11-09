import "../src/home.css";

export class Home {
    constructor(parent) {
        this.parent = parent;
    }
    clear() {
        let prev = this.parent.querySelectorAll("div");
        prev.forEach(div => div.remove());
    }
    render() { 
        this.clear();

        const container = document.createElement("div");
        container.className = "container";
        this.parent.appendChild(container);
        //img
        const imgContainer = document.createElement("div");
        imgContainer.className = "imgContainer";
        imgContainer.backgroundImage = "url(../src/images/star.svg)";
        container.appendChild(imgContainer);
        //right side
        const rightContainer = document.createElement("div");
        rightContainer.className = "rightContainer";
        container.appendChild(rightContainer);
        //contents
        const p = document.createElement("p");
        p.innerHTML = "WELCOME TO OUR RESTAURANT!";
        rightContainer.appendChild(p);

        const h2 = document.createElement("h2");
        h2.innerHTML = "Filipino Deluxe Food and Wine Experience in Calocohan City";
        rightContainer.appendChild(h2);

        const button = document.createElement("button");
        button.innerHTML = "BOOK A TABLE";
        rightContainer.appendChild(button);
    }   
}   