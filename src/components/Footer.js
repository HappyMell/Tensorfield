import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id='main-footer' className='bg-dark text-center py-1'>
        <div id='footer' className='container'>
          <div className='text'>
            <p>
              Tensorfield Agriculture is building the next generation of
              agricultural machines with a focus on specialty row crops in a
              post-herbicide world
            </p>
          </div>
          <div className='info text-center'>
            <p>
              <i className='fas fa-map-marker-alt fa-2x'></i> San Jose, CA
              95129, USA
            </p>
            <p>
              <i className='far fa-envelope fa-2x'></i> info@tensorfield.ag
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
