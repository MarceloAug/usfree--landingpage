import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'; 
import Text from './Text';


export default class Question extends Component {


    render(){
      
        const bordlow = require('../Images/wave2.svg');
        const linkedin = require('../Images/linkedin.svg');
        const facebook = require('../Images/facebook.svg');
        const istagram = require('../Images/instagram.svg');
       /*  const WhatsApp = require('../Images/whatsapp.svg');
        const youtube = require('../Images/youtube.svg'); */

        return( 
            <div >
                 
                <Row  className="background-color-green">
                    <img src={bordlow} width="100%" className="img-fluid" alt="Perguntas frequentes fim"></img>
                    <Col sm="12" md={{ size: 6, offset: 3 }} >
                        <Text class = "tipography-black" text = "CONTATOS"></Text>
                        <Row>
                            <Col sm="12" md="6" >
                                <Text class = "tipography-black-20px" text = "querose@usfree.com.br"></Text>
                            </Col>
                            <Col sm="12" md="6" >
                                <Text class = "tipography-black-20px" text = "(51)99999-5562"></Text>
                            </Col>

                            <Col sm="12" md={{ size: 6, offset: 3 }} className="spacing-card flex-father" >
                                <Col className="flex-son">
                                    <a href="https://www.linkedin.com/company/usfree"><img src={linkedin} className="img-fluid" alt="Linkedin"></img></a>
                                </Col>
                                <Col className="flex-son">
                                    <a href="https://www.facebook.com/usfreebrasil/"> <img src={facebook} className="img-fluid" alt="Facebook"></img></a>
                                </Col>
                                <Col className="flex-son">
                                    <a href="https://www.instagram.com/usfreebrasil/"> <img src={istagram} className="img-fluid" alt="Instagram"></img></a>
                                </Col>
                           {/*      <Col className="flex-son">
                                    <a href="default.asp"> <img src={WhatsApp} className="img-fluid" alt="WhatsApp"></img></a>
                                </Col> */}
                             {/*    <Col className="flex-son">
                                    <a href="default.asp">  <img src={youtube} className="img-fluid" alt="Youtube"></img></a>
                                </Col> */}
                            </Col>
                        </Row>
                    </Col> 
                </Row>
             
            </div>

          
        );
    }
}