class ProductsList extends HTMLElement {
  static name = "my-products-list";

  constructor() {
    super();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = /*html*/ `
      <style>${this.styloProductsList()}</style>
      <main>
        <h2>Lista de productos</h2>
        <ul>
          <li>
            <h3>Producto 1</h3>
            <p>Descripción del producto 1</p>
          </li>
          <li>
            <h3>Producto 2</h3>
            <p>Descripción del producto 2</p>
          </li>
          <li>
            <h3>Producto 3</h3>
            <p>Descripción del producto 3</p>
          </li>
        </ul>
      </main>
    `;
  }

  connectedCallback() {
    this.render();
    console.log("ProductsList connected");
  }

  styloProductsList() {
    return /*css*/ `
      main {
        padding: 20px;
        text-align: center;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      `;
  }
}

export default ProductsList;
