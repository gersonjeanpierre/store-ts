import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";

let firstRender = true;

const App = () => {
  const app = document.getElementById("app");

  if (firstRender && app) {
    app.appendChild(new Header());
    app.appendChild(new Home());
    app.appendChild(new Footer());
    firstRender = false;
  }
};

export default App;
