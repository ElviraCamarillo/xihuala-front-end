import React, { Component } from "react";
import { Link } from "react-router-dom";
// CSS
import "./Navbar.css";
import logo from '../../img/logo-color.svg'
import hamburger from '../../img/hamburger-menu.png'
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuActive: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.logOut = this.logOut.bind(this)
  }
  toggleMenu() {
    const { isMenuActive } = this.state;
    this.setState({
      isMenuActive: !isMenuActive,
    });
  }
  logOut() {
    this.props.logOut()
    this.toggleMenu()
  }
  render() {
    const { isUserLogedIn } = this.props
    const { isMenuActive } = this.state;
    const menuClass = isMenuActive ? "Menu-active" : "";
    return (
    <div>
      <div className="desktop">
        <div className="nav">
          <img src={logo} className="logo"  alt=''/> 
          <ul>
              <li>
                <Link to="/Perfil">Perfil</Link>
                </li>
                <li>
                <Link to="/Evento">Evento</Link>
              </li>
              <li>
                <Link to="/logout">Salir</Link>
              </li>
            {/* <li>
              {
                isUserLogedIn ? (
                  <li>
                    <Link to="/Perfil" onClick={this.toggleMenu}>Perfil</Link>
                  </li>
                ) : null
              }
              </li>
              <li>
              {
                isUserLogedIn ? (
                  <li>
                    <Link to="/Evento" onClick={this.toggleMenu}>Evento</Link>
                  </li>
                ) : null
              }
            </li> */}
          </ul>
        </div>
      </div>
      <div className="movil">
        <div className="nav">
          <img src={logo} className="logo"  alt=''/> <button onClick={this.toggleMenu} className="Menu-button"><img src={hamburger}  alt=''/></button>
        </div>
        <div className={`Menu ${menuClass}`}>
          <h2>Hola user</h2>
          <nav>
            <div>
              <ul>
                <li>
                <Link to="/Perfil">Perfil</Link>
                </li>
                <li>
                <Link to="/Evento">Evento</Link>
                </li>
                <li>
                <Link to="/logout">Salir</Link>
              </li>
              {/* <li>
                {
                  isUserLogedIn ? (
                    <li>
                      <Link to="/Perfil" onClick={this.toggleMenu}>Perfil</Link>
                    </li>
                  ) : null
                }
                </li>
                <li>
                {
                  isUserLogedIn ? (
                    <li>
                      <Link to="/Evento" onClick={this.toggleMenu}>Evento</Link>
                    </li>
                  ) : null
                }
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    );
  }
}