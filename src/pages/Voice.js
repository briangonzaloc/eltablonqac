import React, { Fragment, Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Voice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            voices: undefined,
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            // const advertisements = await advertisementService.list()
            const voices = [
                {
                    id :1,
                    title: "VOlver",
                    description: "",
                    picture: "https://static.wixstatic.com/media/d255c3_39d1897e026e4ba8bd79a84860ded18e~mv2.jpg/v1/fill/w_970,h_642,al_c,q_85,usm_0.66_1.00_0.01/IMG-20190828-WA0036.webp",
                },
                {
                    id: 2,
                    title: " VICTORIA QUERIDA ",
                    description: "",
                    picture: "https://static.wixstatic.com/media/d255c3_489d0a00c26b42fe92bc90fda94e22bf~mv2.jpg/v1/fill/w_642,h_481,al_c,q_80,usm_0.66_1.00_0.01/IMG-20190821-WA0077.webp",
                },
                {
                    id: 3,
                    title: "Confiteria Oddone",
                    description: "",
                    picture: "https://static.wixstatic.com/media/d255c3_103ff770483d4e9d81bd258ffea0f4c4~mv2.jpeg/v1/fill/w_796,h_448,al_c,q_80,usm_0.66_1.00_0.01/ALIVIO.webp"
                },
            ]
            this.setState({ loading: false, voices: voices })
        } catch (err) {
            this.setState({ loading: false, error: err })
        }
    }

    showContentVoices = () => {
        if( !this.state.voices ){
            return '';
        }

        return this.state.voices.map( voice=>(
            <Row style={{ backgroundColor: '#041B38' }} className="m-2" key={voice.id}>
                <Col md={3}>
                    <Image thumbnail src={voice.picture} />
                </Col>
                <Col md={9}>
                    <h2 className="text-uppercase">{voice.title}</h2>
                </Col>
            </Row>
        ))

    }

    render(){
        return (
            <Fragment>
                <Container style={{ backgroundColor: '#002E5D' }} className="pt-2 pb-2">
                    <Row className="m-2">
                        <Col className="text-center">
                            <h2 className="text-uppercase">La voz del Tablón</h2>
                            <small>En esta sección te vas a encontrar con notas diferentes a la mayoría. Acá vamos a hablar del Cervecero desde el lugar del hincha, con opiniones subjetivas que no necesariamente van a ser las más correctas, y puede que tampoco sean dichas de la mejor manera. La pasión, con menos filtro y más sinceridad.</small>
                        </Col>
                    </Row>
                    {this.showContentVoices()}
                </Container>
            </Fragment>
        )
    }
}

export default Voice;