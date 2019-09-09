import React from 'react';
import './styles/Navbar.css';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <Link to="/">
                   <img src={logo} alt="logo"/>
                </Link>
                <Nav defaultActiveKey="/" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link as={NavLink} 
                            to="/"
                            className="nav-link"
                            activeClassName="active">Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={NavLink}
                            to="/news"
                            className="nav-link"
                            activeClassName="active">Noticias</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={NavLink} 
                            to="voice"
                            className="nav-link"
                            activeClassName="active">La voz del tablón</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as="a"
                            target="_blank"
                            className="nav-link"
                            href="https://www.facebook.com/pg/ElTablonQac/photos/?tab=albums">Imágenes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={NavLink} 
                            to="/knowUs"
                            className="nav-link"
                            activeClassName="active">Conocenos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as="a"
                            target="_blank"
                            className="nav-link"
                            href="https://fm961radioplus.com/">Escuchanos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Navbar;