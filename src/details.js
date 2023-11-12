import "../src/details.css";
import Location from "../src/images/location.jpg"
import ServedFood from "../src/images/served-food-sample.jpg";

const locationImg = new Image();
locationImg.src = Location;
const servedFoodImg = new Image();
servedFoodImg.src = ServedFood;

export class Details {
    constructor(parent) {
        this.parent = parent;
        this.detailsContainer;
    }
    render() {
        this.container();
        this.location();
        this.serve();
    }
    container() {
        this.detailsContainer = document.createElement("div");
        this.detailsContainer.className = "detailsContainer";
        this.parent.appendChild(this.detailsContainer);
    }
    location() {
        const location = document.createElement("div");
        location.className = "location";
        this.detailsContainer.appendChild(location);
        // header/location
        const head = document.createElement("h1");
        head.innerHTML = "Location";
        location.appendChild(head);
        // image of location
        const img = locationImg;
        location.appendChild(img);
        // location details
        const locationDetails = document.createElement("p");
        locationDetails.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel velit illo, eligendi consectetur numquam deleniti eius at doloribus, ex asperiores obcaecati blanditiis? Ratione est alias repellendus vitae! Eos, cum ex!";
        location.appendChild(locationDetails);
    }
    serve() {
        const serve = document.createElement("div");
        serve.className = "serve";
        this.detailsContainer.appendChild(serve);
        //header
        const head = document.createElement("h1");
        head.innerHTML = "What We Serve";
        serve.appendChild(head);
        //img
        const servedImg = servedFoodImg;
        serve.appendChild(servedImg);
        //details
        const serveDetails = document.createElement("p");
        serveDetails.innerHTML = "Mauris sed nunc turpis. Integer tempus, nunc eu efficitur aliquam, nisl lacus dapibus lorem, eu volutpat mauris turpis sit amet libero. Donec non ligula in sem posuere porta. Aenean non erat lectus."
        serve.appendChild(serveDetails);
    }
}

// location 
// what we serve 
// 