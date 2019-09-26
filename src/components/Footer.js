import React, {Fragment} from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function Footer(props) {
    return  (
        <Fragment>
            <Container>
                <Row>
                    <Col className="text-center">
                        © 2017 by El Tablón Qac
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )

}
export default Footer;