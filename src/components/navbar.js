import React from 'react'
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { spacer3, spacer2, spacer1 } from './constants';

class Navbar extends React.Component{
    render(){
        return(
            <div className="navb">
                <div style={{float: "left", display: "flex"}}>
                    <h4>LOREM IPSUM</h4>

                </div>
                <span className="rightButtons">
                    <h4>
                        <a href="#">
                            HOME
                        </a>
                    </h4>
                    <h4>
                        <a href="#">
                            ABOUT
                        </a>
                    </h4>
                    <h4>
                        <a href="#">
                            WORK
                        </a>
                    </h4>
                    <h4>
                        <a href="#">
                            CONTACT
                        </a>
                    </h4>
                </span>
                <br style={{clear: "both"}} />
            </div>
        );
    }
}

export default Navbar;