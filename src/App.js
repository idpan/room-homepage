import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
