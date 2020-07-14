import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap'; 
import Text from './Text';


export default class Header extends Component {


    render(){
        const logo = require('../Images/logousfree.png');
        const handHeader = require('../Images/hand1_v1.svg');
        const linkedin = require('../Images/linkedin.svg');
        const facebook = require('../Images/facebook.svg');
        const istagram = require('../Images/instagram.svg');
        const WhatsApp = require('../Images/whatsapp.svg');
        const youtube = require('../Images/youtube.svg');
        return(
            <Container className="themed-container" fluid={true}>
                <Row>
                    <Col sm={{ size:2, offset: 1 }} >
                        <img src={handHeader} className="img-fluid" alt="indica usfree"/>
                    </Col>

                    <Col sm="6"  >
                        <img src={logo} className="img-fluid" alt="Usfree"/>
                        <Col sm="5" md={{  offset: 3 }}>
                            <Text class="tipography-green" text = "Trabalhe com PJ da maneira certa"></Text>
                        </Col>						
                    </Col>
                    <Col sm="12" md={{ size: 2,offset: 1 }} className="flex-father-row" >
                        <Col className="flex-son">
                            <a href="default.asp"><img src={linkedin} className="img-fluid" alt="Linkedin"></img></a>
                        </Col>
                        <Col className="flex-son">
                            <a href="default.asp"> <img src={facebook} className="img-fluid" alt="Facebook"></img></a>
                        </Col>
                        <Col className="flex-son">
                            <a href="default.asp"> <img src={istagram} className="img-fluid" alt="Instagram"></img></a>
                        </Col>
                        <Col className="flex-son">
                            <a href="default.asp"> <img src={WhatsApp} className="img-fluid" alt="WhatsApp"></img></a>
                        </Col>
                        <Col className="flex-son">
                            <a href="default.asp">  <img src={youtube} className="img-fluid" alt="Youtube"></img></a>
                        </Col>
                    </Col>
                </Row>

                
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Text class="tipography-purple" text = "de igual"></Text>
                        <Text class="tipography-purple" text = "para igual"></Text> 
                    </Col>
                </Row>
            </Container>
        );
    }
}