import App from "./app";
import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import ProductsList from "./Components/ProductsList";
import "./style.css";
import Store from "./Pages/Store";

window.customElements.define(Filter.name, Filter);
window.customElements.define(Header.name, Header);
window.customElements.define(Home.name, Home);
window.customElements.define(Footer.name, Footer);
window.customElements.define(ProductsList.name, ProductsList);
window.customElements.define(Store.name, Store);

document.addEventListener("DOMContentLoaded", App);
