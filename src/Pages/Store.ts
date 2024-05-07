class Store extends HTMLElement {
  static name = "my-store";

  constructor() {
    super();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = /*html*/ `
      <style>${this.styloStore()}</style>
      <main>
        <h2>Bienvenido a Jaluk Store</h2>
        <p>Encuentra los mejores productos en nuestro catálogo.</p>
        <ul>
          <li>Producto 1</li>
          <li>Producto 2</li>
          <li>Producto 3</li>
          <li>Producto 4</li>
        </ul>
      </main>
    `;
  }

  connectedCallback() {
    this.render();
    console.log("Store connected");
  }

  styloStore() {
    return /*css*/ `
      main {
        padding: 20px;
        text-align: center;
      }
    `;
  }
}

export default Store;
