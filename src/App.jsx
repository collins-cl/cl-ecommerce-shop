import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";


function App() {
  return (
    <>
      <Router>
        <div className="App"></div>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
          <Route path="/#email"/>
          <Route path="/shop:id"/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
