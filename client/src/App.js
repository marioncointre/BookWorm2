import React from "react";
import "./styles/styles.css";
import Header from "./Components/Elements/Header";
import Footer from "./Components/Elements/Footer";
import Login from "./Components/Login";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <section className="page-full" id="login-page">
          <Login />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
