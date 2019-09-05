import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../img/logowtext.png";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1
    };
  }

  handleScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({ opacity: 0.8 });
    } else {
      this.setState({ opacity: 1 });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollEvent);
  }

  render() {
    //  const opacity = Math.min(1500 / this.state.currentScrollHeight, 1);
    return (
      <nav style={{ opacity: this.state.opacity }} id='navbar'>
        <div className='logo'>
          <a href=''>
            <img src={logo} />
          </a>
        </div>

        <ul>
          <li>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='how'
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              How
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='faq'
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='news'
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='main-footer'
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
