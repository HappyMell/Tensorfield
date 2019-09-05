import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import How from "./How";
import Faq from "./Faq";
import News from "./News";
import Clients from "./Clients";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Header />
        <How />
        <Faq />
        <News />
        <Clients />
        <Footer />
      </div>
    );
  }
}

export default App;
