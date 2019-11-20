import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

class Footer extends React.Component{
    render(){
        return(
            <Container className="footer">
                <Row justify="start" className="leftFooter">
                    <Col sm={4}>
                        <h4>
                            <a>MADE WITH ♡ BY A.S GRAPHIC STUDIO</a></h4>
                    </Col>
                    <Col sm={8} xs={12}>
                    <Row justify="end" style={{margin:0}}>
                        <Col sm={2} xs={3}>
                            <h4>                                
                                <a href="#">
                                EMAIL
                                </a></h4>
                        </Col>
                        <Col sm={2} xs={3}>
                            <h4>
                                <a href="#">
                                RESUME
                                </a>
                            </h4>
                        </Col>

                        <Col sm={2} xs={3}>
                            <h4>
                            <a href="#">
                                FACEBOOK
                                </a>
                            </h4>
                        </Col>
                        <Col sm={2} xs={3}>
                            <h4>
                            <a href="#">
                                LINKEDIN
                                </a>
                            </h4>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;