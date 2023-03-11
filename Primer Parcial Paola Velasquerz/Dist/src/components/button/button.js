

class MyButton extends HTMLElement {
    
    static get observedAttributes() {
      return ["yes"];
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.mount();
      
    }
    
    connectedCallback() {
      this.mount();
      
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.onButtonClicked = this.changeButton.bind(this);
      this.yes = "No"
    }
  
    mount() {
      this.render();
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .addEventListener("click", this.changeButton);
    }
  
    render() {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/button/button.css">
          <section id="contain">
            <h1 >Reservado</h1>
            
            <button id="button"> ${this.yes || "No"}  </button>
          </section>
      `;
    }
  
    changeButton() {
        addEventListener("click", currentValue(yes));
        const currentValue = (this.getAttribute("yes"));
        this.setAttribute("yes");
      }

  }
  
  customElements.define("button-reserve", MyButton);
  export default MyButton;




