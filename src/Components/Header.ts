import Filter from "./Filter";

class Header extends HTMLElement {
  static name = "my-header";
  private filter: HTMLElement;

  constructor() {
    super();
    this.filter = document.createElement(Filter.name);
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = /*html*/ `
      <style>${this.styloHeader()}</style>
      <header>
        <div class="headerContainer">
          <h1 class="logo">Jaluk Store</h1>
          ${this.filter.outerHTML}
          <nav>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Productos</a>
              </li>
            </ul>
          </nav>
        </div>
    </header>
    `;
  }

  connectedCallback() {
    this.render();
    console.log("Header connected");
  }

  styloHeader() {
    return /*css*/ `
      header {
        background-color: var(--dark);
      }
      .headerContainer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
      }
      h1 {
        color: var(--light);
        padding: 10px;
        margin: 0;
      }
      ul {
        width: 200px;
        display: flex;
        list-style: none;
        justify-content: space-between;
        margin: 0;
        padding: 0;
      }
      a {
        color: var(--light);
        text-decoration: none;
      }
    `;
  }
}

export default Header;
