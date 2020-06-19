import React, { Component } from "react";
import { Link } from "react-router-dom";

// CSS
import "./Navbar.css";

// Import icons
import logo from '../../img/logo-color.svg'
import hamburger from '../../img/icon__menu.png'

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
    localStorage.removeItem('tokenapp');
    // console.log(`localStorage: ${localStorage}`)
    window.location.href = '/';
  }
  componentDidMount(){
    // get token
    const token = window.localStorage.getItem('tokenapp')
    //const typeUser = window.localStorage.getItem('typeuser')
    if(token === false) this.props.history.push(`/login`)
  }

  render() {
    const { isMenuActive } = this.state;
    const menuClass = isMenuActive ? "Menu-active" : "";
    const typeUser = window.localStorage.getItem('userapp')
    return (
    <div className='navbar-container'>
      <div className="desktop__header">
        <div className="wrap__inner">

          <div className="nav">
            <Link to="/home" className="d-flex">
            <img src={logo} className="logo"  alt=''/> 
            </Link>
            <ul>
                <li>
                  <Link to="/profile">Perfil</Link>
                </li>
                <li>
                  <Link to="/event">Crear evento</Link>
                </li>
                {
                typeUser === 'admin' ?
                <li>
                <Link to="/dashboard">Dashboard</Link>
                </li>
                :''}
                <li>
                  <Link to="/logout" className="active">Salir</Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="movil__header">
        <div className="nav">
          <Link to="/home" className="">
            <img src={logo} className="logo"  alt=''/> 
          </Link>
          <button onClick={this.toggleMenu} className="Menu-button"><img src={hamburger}  alt=''/></button>
        </div>
        <div className={`Menu ${menuClass}`}>
          <nav>
            <div>
              <ul>
                <li>
                  <Link to="/profile" className="nav__link">Perfil</Link>
                </li>
                <li>
                  <Link to="/event" className="nav__link">Evento</Link>
                </li>
                {
                typeUser === 'admin' ?
                <li>
                <Link to="/dashboard">Dashboard</Link>
                </li>
                :''}
                <li>
                  <Link to="/logout" className="nav__link">Salir</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    );
  }
}