import "./App.css";
import { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";


const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Router>
        <div className="App"></div>
        <Routes>
          <Route path="/home" exact element={<Home count={count} />} />
          <Route path="/shop" exact element={<Shop count={count} dispatch={dispatch} />} />
          <Route path="/cart" exact element={<Cart count={count} dispatch={dispatch} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
