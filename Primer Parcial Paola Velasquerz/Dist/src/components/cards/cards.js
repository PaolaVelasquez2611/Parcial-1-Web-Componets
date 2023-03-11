class Cards extends HTMLElement {
    
    static get observedAttributes(){
        return["destino","costo","duracion","descripcion","actividades",]
    }
    
    constructor(){
        super();
        this.attachShadow ({mode:"open"});
    }
    
    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.render();
    }

    connectedCallback(){
        this.render();
    }
    
    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/cards/cards.css">
        <section id="card" class="card">
        <h1>${this.destino}</h1>
        <h2> COSTO: ${this.costo}</h2>
        <h3> DURACION: ${this.duracion}<h3>
        <p> DESCRIPCION: ${this.descripcion}<p>
        <p> ACTIVIDADES: ${this.actividades}<p>
        </section>
        `
    }
    
    
    }
    customElements.define("card-conteiner",Cards)
    export default Cards


