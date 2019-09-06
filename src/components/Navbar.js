import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../img/logowtext.png";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      activeClass: ""
    };
  }

  scrollToBottom = () => {
    scroll.scrollToBottom();
    this.setState({
      activeClass: "active"
    });
  };

  handleScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({ opacity: 0.8 });
    } else {
      this.setState({ opacity: 1 });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollEvent);
    window.addEventListener("click", this.scrollToBottom);
  }

  render() {
    //  const opacity = Math.min(1500 / this.state.currentScrollHeight, 1);
    return (
      <nav style={{ opacity: this.state.opacity }} id='navbar'>
        <div className='logo'>
          <Link to='home' spy={true} smooth={true} offset={-70} duration={800}>
            <img src={logo} />
          </Link>
        </div>

        <ul>
          <li>
            <Link
              activeClass='active'
              to='showcase-content'
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
          <li>
            <Link
              to='footer'
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={this.scrollToBottom}
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
