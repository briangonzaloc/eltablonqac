import React, { Fragment, Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; 
import advertisementService from '../apis/AdvertisementService';

class Advertisements extends Component {

    constructor(props){
        super(props);
        this.state = {
            advertisements: undefined,
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        // await manager.login({
        //     username: 'bcespedes',
        //     password: 'brian12345'
        // })

        this.setState({ loading: true, error: null })
        try {
            const advertisements = await advertisementService.list()
            console.log(advertisements);
           /* const advertisements = [
                {
                    id : 1,
                    title : "Buquebus Quilmes",
                    description: "",
                    link: "https://www.facebook.com/people/Fernando-Kachu/100011441197073",
                    picture: "https://static.wixstatic.com/media/d255c3_2635b6ce70274bfa8bb914f21f968d11~mv2.jpeg/v1/fill/w_292,h_292,al_c,q_80,usm_0.66_1.00_0.01/WhatsApp%20Image%202019-02-27%20at%2020_12_41%20(2.webp",
                },
                {
                    id: 2,
                    title: "Occhipinti Inmobiliaria",
                    description: "Inmobiliearia papa",
                    link: "https://www.facebook.com/carlos.occhipinti.1",
                    picture: "https://static.wixstatic.com/media/d255c3_ad8e2946a42f4c5eb9deb5e2e5022784~mv2.jpg/v1/fill/w_292,h_164,al_c,q_80,usm_0.66_1.00_0.01/Occhipinti.webp",
                },
                {
                    id : 3,
                    title: "Confiteria Oddone",
                    description: "La mejor confi de zona sur monooo",
                    link: "http://www.confiteriaoddone.com.ar/",
                    picture: "https://static.wixstatic.com/media/d255c3_b73f372eb39f44c1a3a2e80bc754229a~mv2.jpeg/v1/fill/w_292,h_111,al_c,q_80,usm_0.66_1.00_0.01/d255c3_b73f372eb39f44c1a3a2e80bc754229a~mv2.webp",
                },
            ]*/
            this.setState({ loading: false, advertisements: advertisements })
        } catch (err) {
            this.setState({ loading: false, error: err })
        }
    }

    showContentAdvertisiments = () => {
        if( !this.state.advertisements || !this.state.advertisements.length  ){
            return '';
        }

        return this.state.advertisements.map( (adv) =>(
            <Col xs={12} md={6} lg={4} className="mb-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={adv.picture} />
                    <Card.Body className="text-white bg-dark">
                        <Card.Title>{adv.title}</Card.Title>
                        <Card.Text>
                            {adv.description}
                            </Card.Text>
                        <a target="_blank" href={adv.link}>
                            <Button variant="primary">Visitar</Button>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
        ))
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.showContentAdvertisiments()}
                </Row>
            </Container>
        )
    }
    
}

export default Advertisements;