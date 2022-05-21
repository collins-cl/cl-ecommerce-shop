import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Home/Shop/Shop";

function App() {
  return (
    <>
      <Router>
        <div className="App"></div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
