
const template = document.createElement("template");
template.innerHTML = "<div><h1>Escuela: <span id='nombreEscuela'></span></h1></div><input type='text' id='myInput'>";


class EscuelaElemento extends HTMLElement {

    static get observedAttributes() {
        return ["value"];
    }

    constructor() {
        super();
        this.textContent="Kindergarden";
        const shadow = this.attachShadow({ mode: "open" });
        //this.append(template.content);

        const templateContent = template.content.cloneNode(true);

        this.country= this.getAttribute("pais");
        console.log("Pais ", this.country);
        templateContent.querySelector("#nombreEscuela").textContent=this.country;

        shadow.append(templateContent);

        console.log("Constructor ", this);

        this.input = shadow.querySelector("#myInput");
        this.input.addEventListener("input", this.handleInput.bind(this));   
    }

    handleInput() {
        console.log("Tecleaste...");
        this.setAttribute("value", this.input.value);
    }

    attributeChangedCallback(name, old, nw) {
        console.log(`Cambio ${name} de ${old} a ${nw}`); 
        if (name === "value") {
            this.shadowRoot.querySelector("#nombreEscuela").textContent = nw;
        }
    }
 }

 customElements.define("escuela-elemento", EscuelaElemento);

 
 