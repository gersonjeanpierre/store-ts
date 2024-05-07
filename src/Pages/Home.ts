class Home extends HTMLElement {
  static name = "my-home";

  constructor() {
    super();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = /*html*/ `
      <style>${this.styloHome()}</style>
      <main>
        <h2>Bienvenido a Jaluk Store</h2>
        <p>Encuentra los mejores productos en nuestro catálogo.</p>
      </main>
    `;
  }

  connectedCallback() {
    this.render();
    console.log("Home connected");
  }

  styloHome() {
    return /*css*/ `
      main {
        padding: 20px;
        text-align: center;
      }
    `;
  }
}

export default Home;
