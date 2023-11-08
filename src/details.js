import "../src/details.css";

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
        const img = document.createElement("img");
        img.src = "";
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
    }
}

// location 
// what we serve 
// 