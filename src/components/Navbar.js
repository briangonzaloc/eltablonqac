import React from 'react';
import './styles/Navbar.css';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Container, Col, Row, Image } from 'react-bootstrap';
import FollowUs from './FollowUs';

class Navbar extends React.Component{
    render(){
        return (
            // <div className="Navbar">
            <Container fluid className="Navbar">
                <Row>
                    <Col xs={12} md={{ span : 3, offset:3 }} >
                        <Link to="/">
                            <Image fluid src={logo} alt="logo"/>
                        </Link>
                    </Col>
                    <Col xs={6} md={6}>
                        <FollowUs/>
                    </Col>
                </Row>

                <Row>
                    <Col xs={{ span: 12, offset: 0 }} md={{ span : 6, offset:3 }}>
                        <Nav defaultActiveKey="/"  justify variant="tabs" >
                            <Nav.Item>
                                <Nav.Link as={Link} 
                                    to="/"
                                    // className="nav-link"
                                    // activeClassName="active"
                                    >Inicio</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link}
                                    to="/news"
                                    // className="nav-link"
                                    // activeClassName="active"
                                    >Noticias</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} 
                                    to="voice"
                                    // className="nav-link"
                                    // activeClassName="active"
                                    >La voz del tablón</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as="a"
                                    target="_blank"
                                    // className="nav-link"
                                    href="https://www.facebook.com/pg/ElTablonQac/photos/?tab=albums">Imágenes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} 
                                    to="/knowus"
                                    // className="nav-link"
                                    // activeClassName="active"
                                    >Conocenos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as="a"
                                    target="_blank"
                                    // className="nav-link"
                                    href="https://fm961radioplus.com/">Escuchanos</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Navbar;