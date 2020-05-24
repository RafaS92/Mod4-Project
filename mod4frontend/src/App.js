import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Random from "./components/random";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Random />
    </div>
  );
}

export default App;
