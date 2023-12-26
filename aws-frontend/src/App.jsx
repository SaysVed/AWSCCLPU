import "./App.css";
import { Routes, Route } from "react-router-dom";
import  HomePage  from "./Components/Home/HomePage";

function App() {
  return (
      <Routes>
        <Route path="/" Component={ HomePage } /> 
      </Routes> 
  );
}

export default App;
