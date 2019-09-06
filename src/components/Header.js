import React, { Component } from "react";
import { Link } from "react-scroll";

class Header extends Component {
  render() {
    return (
      <header id='showcase'>
        <div id='home'>
          <div className='showcase-content'>
            <h1 className='l-heading'>
              Agricultural machines for a future without herbicides
            </h1>
            <Link
              activeClass='active'
              className='btn'
              to='faq'
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              Read More
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
