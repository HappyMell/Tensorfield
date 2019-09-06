import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import logo from "../img/logowtext.png";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1
    };
  }

  handleScrollEvent = e => {
    if (window.scrollY > 100) {
      this.setState({ opacity: 0.9 });
    } else {
      this.setState({ opacity: 1 });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollEvent);
  }

  render() {
    return (
      <nav style={{ opacity: this.state.opacity }} id='navbar'>
        <div className='logo'>
          <Link to='home' spy={true} smooth={true} offset={-70} duration={800}>
            <img src={logo} />
          </Link>
        </div>

        <Menu right pageWrapId={"page-wrap"}>
          <ul>
            <li>
              <Link
                activeClass='active'
                to='showcase'
                spy={true}
                smooth={true}
                offset={-80}
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
                FAQs
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
          </ul>

          <div className='contact'>
            <p>
              Tensorfield Agriculture is building the next generation of
              agricultural machines with a focus on specialty row crops in a
              post-herbicide world
            </p>
          </div>

          <div className='contact text-center'>
            <p>
              <i className='fas fa-map-marker-alt fa-1x'></i> San Jose, CA
              95129, USA
            </p>
            <p>
              <i className='far fa-envelope fa-1x'></i> info@tensorfield.ag
            </p>
          </div>
        </Menu>
      </nav>
    );
  }
}

export default Navbar;
