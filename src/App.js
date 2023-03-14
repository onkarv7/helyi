import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Advantages from "./components/Advantages/Advantages";
import Products from "./components/Products/Products";
import Keyadvantages from "./components/Keyadvantages/Keyadvantages";
import Community from "./components/Community/Community";
import Fotter from "./components/Footer/Fotter";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Advantages />
      <Products />
      <Keyadvantages />
      <Community />
      <Fotter />
    </div>
  );
}

export default App;
