import React from 'react';
import "../styles/App.scss";
import {Container, Row, Col} from 'react-grid-system';
import {spacer2, spacer1, spacer3, spacer5} from "./constants.js";
import Navbar from './navbar';
import WOW from 'wowjs';

class LandingPage extends React.Component{

    componentDidMount(){
        const wow= new WOW.WOW();
        wow.init();
    }

    render(){
        return(
                <div className="container"> 
                    <Navbar />
                    <h1 className="mobileTitle wow fadeIn" data-wow-duration="200">
                        Lorem Ipsum
                    </h1>
                    <div className="landingPage wow fadeInUp">
                        <div class="title wow fadeIn" data-wow-delay="1.5s">
                            <h1> Lorem Ipsum </h1>
                        </div>
                    </div>

                </div>
        );
    };
}

export default LandingPage;