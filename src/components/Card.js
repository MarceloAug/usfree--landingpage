import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap'; 
import Text from './Text';


export default class Card extends Component {


    render(){
        const flex = require('../Images/flexibilidade.svg');
        const segJur = require('../Images/seguranca_juridica.svg');
        return(
            <Row>
                <Col sm='12' md='6' >
                    <Col sm="12" md={{ size: 8, offset: 3 }}  className="spacing-card shadow-lg p-3 mb-5 rounded">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Col sm="12" md={{ size: 4, offset: 5 }}>
                                <Text class="tipography-purple" text = "Segurança Jurídica"></Text>
                            </Col>
                            <Col sm="12" md={{ size: 10, offset: 1  }}>
                                <img  className="img-fluid" src={segJur} alt="segurança jurídica" />
                            </Col>
                            <Text class="tipography-purple-text-20px" text = "como a adoção correta do modelo PJ pode beneficiar o ambiente de trabalho e evitar que problemas judiciais trabalhistas te impedem de investir no seu negócio."></Text>      
                        </Col>
                    </Col>
                </Col>
    
                <Col  sm="12" md="6">
                    <Col sm="12" md={{ size: 8, offset: 2 }} className=" shadow background-color-purple spacing-card shadow-lg p-3 mb-5 rounded ">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Col sm="12" md="4">
                                <Text class="tipography-green" text = "Flexibilidade"></Text>	
                            </Col>
                            <Col sm="12" md={{ size: 7, offset: 6  }}>
                                <img className="img-fluid" src={flex}  alt="flexibilidade"/>
                            </Col>
                            <Text class="tipography-white-text" text = "Consiga empregos com maior flexibilidade de horário, melhores salário e na área que você quer trabalhar."></Text>      
                        </Col>
                    </Col>
                </Col>
            </Row>
        );
    }
}