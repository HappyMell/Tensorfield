import React, { Component } from "react";
import logo1 from "../img/clients/haxlogo.png";
import logo2 from "../img/clients/westernlogo.png";
import logo3 from "../img/clients/thrivelogo.png";
import logo4 from "../img/clients/agolablogo.png";

export class Clients extends Component {
  render() {
    return (
      <section id='clients' className='py-1'>
        <div className='container'>
          <div className='items'>
            <div>
              <img src={logo1} alt='Client' />
            </div>
            <div>
              <img src={logo2} alt='Client' />
            </div>
            <div>
              <img src={logo3} alt='Client' />
            </div>
            <div>
              <img src={logo4} alt='Client' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Clients;
