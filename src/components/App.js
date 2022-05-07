import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./HomePage/HomePage";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
