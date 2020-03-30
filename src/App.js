import "./css/styles.css";
import React from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main";
const App = () => {
  return (
    <div className="wrapper">
      <Main />
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
