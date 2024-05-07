class Filter extends HTMLElement {
  static name = "my-filter";

  constructor() {
    super();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = /*html*/ `
      <style>${this.styloFilter()}</style>
      <input type="text" placeholder="Buscar producto" />
    `;
  }

  connectedCallback() {
    this.render();
    console.log("Filter connected");
  }

  styloFilter() {
    return /*css*/ `
      input {
        width: 400px;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    `;
  }
}

export default Filter;
