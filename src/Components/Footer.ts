class Footer extends HTMLElement {
  static name = "my-footer";

  constructor() {
    super();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = /*html*/ `
      <style>${this.styloFooter()}</style>
      <footer>
        <p>&copy; 2021 Jaluk Store</p>
      </footer>
    `;
  }

  connectedCallback() {
    this.render();
    console.log("Footer connected");
  }

  styloFooter() {
    return /*css*/ `
      footer {
        background-color: var(--dark);
        color: var(--light);
        text-align: center;
        padding: 10px;
      }
    `;
  }
}

export default Footer;
