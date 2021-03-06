import React, { Fragment  } from 'react';
import './styles/Navbar.css';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { Navbar,Nav, Container, Col, Row, Image } from 'react-bootstrap';
import FollowUs from './FollowUs';

class ContainerNavbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // Takes active tab from props if it is defined there
            activeTab: props.activeTab || 1
        };

        // Bind the handleSelect function already here (not in the render function)
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedTab) {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
        console.log('selecttanb', selectedTab);
        this.setState({
            activeTab: selectedTab
        });
    }

    render(){
        return (
            <Fragment>
                <Container fluid className="Navbar mt-2"  >
                    <Row>
                        <Col xs={12} md={{ span: 3, offset: 3 }} >
                            <Link to="/">
                                <Image fluid src={logo} alt="logo" />
                            </Link>
                        </Col>
                        <Col xs={{span:11, offset:1}} md={{ span: 5, offset:1 }}>
                            <FollowUs/>
                        </Col>
                    </Row>
                </Container>
                <Container >
                    <Row>
                        <Col>
                            <Navbar expand="md" >
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="myClass ml-auto mr-auto text-uppercase" variant="tabs" activeKey={this.state.activeTab} onSelect={this.handleSelect}>
                                            <Nav.Link eventKey="1" as={Link} to="/">Inicio</Nav.Link>
                                            <Nav.Link eventKey="2" as={Link} to="/news">Noticias</Nav.Link>
                                            <Nav.Link eventKey="3" as={Link} to="voice">La voz del tablón</Nav.Link>
                                            <Nav.Link as="a" target="_blank" href="https://www.facebook.com/pg/ElTablonQac/photos/?tab=albums">Imágenes</Nav.Link>
                                            <Nav.Link eventKey="5" as={Link} to="/knowus">Conocenos</Nav.Link>
                                            <Nav.Link as="a" target="_blank" href="https://fm961radioplus.com/">Escuchanos</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>


            </Fragment>
            // <Container fluid className="Navbar">
            //     <Row>
            //         <Col xs={12} md={{ span : 3, offset:3 }} >
            //             <Link to="/">
            //                 <Image fluid src={logo} alt="logo"/>
            //             </Link>
            //         </Col>
            //         <Col xs={6} md={6}>
            //             <FollowUs/>
            //         </Col>
            //     </Row>

            //     <Row>
            //         <Col xs={{ span: 12, offset: 0 }} md={{ span : 6, offset:3 }}>
            //             <Nav defaultActiveKey="/"  justify variant="tabs" >
            //                 <Nav.Item>
            //                     <Nav.Link as={Link} 
            //                         to="/"
            //                         // className="nav-link"
            //                         // activeClassName="active"
            //                         >Inicio</Nav.Link>
            //                 </Nav.Item>
            //                 <Nav.Item>
            //                     <Nav.Link as={Link}
            //                         to="/news"
            //                         // className="nav-link"
            //                         // activeClassName="active"
            //                         >Noticias</Nav.Link>
            //                 </Nav.Item>
            //                 <Nav.Item>
            //                     <Nav.Link as={Link} 
            //                         to="voice"
            //                         // className="nav-link"
            //                         // activeClassName="active"
            //                         >La voz del tablón</Nav.Link>
            //                 </Nav.Item>
            //                 <Nav.Item>
            //                     <Nav.Link as="a"
            //                         target="_blank"
            //                         // className="nav-link"
            //                         href="https://www.facebook.com/pg/ElTablonQac/photos/?tab=albums">Imágenes</Nav.Link>
            //                 </Nav.Item>
            //                 <Nav.Item>
            //                     <Nav.Link as={Link} 
            //                         to="/knowus"
            //                         // className="nav-link"
            //                         // activeClassName="active"
            //                         >Conocenos</Nav.Link>
            //                 </Nav.Item>
            //                 <Nav.Item>
            //                     <Nav.Link as="a"
            //                         target="_blank"
            //                         // className="nav-link"
            //                         href="https://fm961radioplus.com/">Escuchanos</Nav.Link>
            //                 </Nav.Item>
            //             </Nav>
            //         </Col>
            //     </Row>
            // </Container>
        )
    }
}

export default ContainerNavbar;