import { useState } from "react";
import "./App.css";
import { Header } from "../components/Header";
import { Body } from "../components/Body";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
