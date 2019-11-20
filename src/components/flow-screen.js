import React from 'react';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import {spacer1, spacer5, spacer2,spacer4, spacer3} from "./constants";
import WOW from "wowjs"

const textElement={
    marginTop: spacer2,
    marginBottom: spacer4,
}

class FlowScreen extends React.Component{

    componentDidMount(){
        const wow= new WOW.WOW();
        wow.init();
    }

    render(){
        return(
            <Container fluid style={{marginLeft: spacer4, marginRight: spacer4}}>
                <Row justify="center" style={{marginTop: spacer5}}>
                    <Col lg={8} md={10} xs={12}>
                        <h2 className='wow fadeIn' data-wow-duration='3s'>
                            Sed volutpat, risus id ultricies blandit, arcu 
                            elit consectetur tellus, laoreet ornare purus 
                            nulla in ipsum ac augue vitae turpis.
                        </h2>
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop: spacer2, textAlign: "center"}}>
                    <Col lg={8} md={10} xs={12}>
                        <p className='wow fadeIn'>
                        Mauris vel nisl ante. Vivamus sagittis 
                        ullamcorper quam, sit amet tincidunt enim 
                        sollicitudin ut. Vestibulum at elementum leo.
                         Aliquam erat volutpat. Nullam magna orci, 
                         accumsan at arcu lobortis, volutpat cursus nisl.
                          Suspendisse metus purus, gravida vehicula eros 
                          in, malesuada posuere magna.
                        </p>
                    </Col>
                </Row>
                <Row align="end" justify="center" className="centerImages">
                    <Col lg={8} md={10} className="desktopImages">
                         <div className="middle">
                                <div>
                                    <img src={require("../images/SierraDesk.png")} alt="High Sierra" className="wow fadeInUp"/>
                                    <div className="content">
                                    
                                    </div>
                                </div>
                                <div>
                                    <img src={require("../images/CapitanDesk.png")} alt="Sierra" style={{marginTop: spacer4}} className="wow fadeInUp" data-wow-delay="0.5s"/>
                                </div>
                                <div>
                                    <img src={require("../images/MojaveDesk.png")} alt="Mojave" style={{marginTop: spacer5}} className="wow fadeInUp" data-wow-delay="1s"/>
                                </div>
                            </div> 
                            
                    </Col>
                    <Col xs={12}>
                        <Visible sm xs>
                            <img src={require("../images/SierraMobile.png")} alt="High Sierra" className="mobileImg" style={{marginTop: spacer4}}/>
                        </Visible>
                    </Col>
                    <Col xs={12}>
                        <Visible sm xs>
                            <img src={require("../images/CapitanMobile.png")} alt="High Sierra" className="mobileImg" style={{marginTop: spacer4}}/>
                        </Visible>
                    </Col>
                    <Col xs={12}>
                        <Visible sm xs>
                            <img src={require("../images/MojaveMobile.png")} alt="High Sierra" className="mobileImg" style={{marginTop: spacer4}}/>
                        </Visible>
                    </Col>
                </Row>
                <Row justify="center"  style={{marginTop: spacer5}}>
                    <Col lg={4} md={5} xs={12}>
                        <h3 class="wow slideInUp">
                        Yosemite
                        </h3>
                        <p style={textElement} class="wow fadeIn">
                        Lorem ipsum dolor sit amet, consectetur ad
                        ipiscing elit. Suspendisse varius eu metus et sceleri
                        sque. Nullam gravida eu elit at rutrum. Aliquam sit am
                        et sollicitudin est. Suspendisse potenti. Donec portti
                        tor tempor pulvinar. Sed congue elementum placerat. Ma
                        ecenas nec rhoncus est. 
                        </p>
                    </Col>
                    <Col lg={4} md={5} xs={12}>
                        <h3 class="wow slideInUp">
                        El Capitan
                        </h3>
                        <p style={textElement} class="wow fadeIn">
                        Mauris vel nisl ante. Vivamus sagittis 
                        ullamcorper quam, sit amet tincidunt 
                        enim sollicitudin ut. Vestibulum at 
                        elementum leo. Aliquam erat volutpat.
                         Nullam magna orci, accumsan at arcu 
                         lobortis, volutpat cursus nisl. Suspendisse
                          metus purus, gravida vehicula eros in, 
                          malesuada posuere magna. 
                        </p>
                    </Col>
                </Row>
                <Row justify="center" style={{marginBottom: spacer5}}>
                    <Col lg={4} md={5} xs={12}>
                                <h3 class="wow slideInUp">                
                                High Sierra
                                </h3>

                        <p style={textElement} class="wow fadeIn">
                        Nulla ac dolor nibh. Vestibulum feugiat 
                        convallis posuere. Pellentesque vestibulum 
                        eleifend turpis vel consequat. Cras tempor 
                        turpis in nunc finibus sollicitudin. Morbi 
                        malesuada sodales urna, quis pulvinar nunc 
                        interdum ultrices. Nullam id risus velit. 
                        Ut fringilla eleifend mollis. Phasellus in 
                        dui tellus. Nam euismod mattis quam porttitor ornare.
                        </p>
                    </Col>
                    <Col lg={4} md={5} xs={12}>
                        <h3 class="wow slideInUp">
                        Mojave
                        </h3>
                        <p style={textElement} class="wow fadeIn">
                            Integer tempor enim lacus, 
                            sit amet dapibus diam elementum et. Pellentesque 
                            congue libero id enim dignissim consequat. Fusce 
                            et sagittis magna, in feugiat felis. Sed volutpat, 
                            risus id ultricies blandit, arcu elit consectetur 
                            tellus, laoreet ornare purus nulla in ipsum. 
                            Praesent ac augue vitae turpis ullamcorper 
                            hendrerit eleifend in odio.
                        </p>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default FlowScreen;
