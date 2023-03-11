import * as components from "./components/index2.js"
import data from "../../data.js"

class appConteiner extends HTMLElement {
constructor(){
    super();
    this.attachShadow ({mode:"open"});
}

connectedCallback(){
    this.render();
}

render(){ 
    data.forEach((data)=>{
        this.shadowRoot.innerHTML += `
        <card-conteiner destino="${data.destino}" costo="${data.costo}"duracion="${data.duracionEnDias}"descripcion="${data.descripcion}"actividades="${data.actividades}"> </card-conteiner>
        <button-reserve></button-reserve>
        `
       
    })
    
}


}
customElements.define("app-conteiner",appConteiner)