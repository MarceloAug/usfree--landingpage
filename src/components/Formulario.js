import React, { Component } from 'react';
import { Row, Col} from 'reactstrap'; 
import {Form, FormGroup, Label, Input } from 'reactstrap';
import Text from './Text';

export default class Formulario extends Component {

    render(){
        const registerHere = require('../Images/hand2_v1.svg');
        return(
            <div>
                <Row className="margin">
                    <Col sm = "12"md = "6" className="mb-width" >
                       <Row>
                            <Col sm="12" md={{size:5,offset:3}}>
                                <Text class = "tipography-green" text = "Cadastre-se para saber mais"></Text>
                               
                            </Col>
                                
                            <Col  sm="12" md={{size:2,offset:6}}>
                               <img src={registerHere} className="img-fluid indicates" alt="indica usfree"/>
                             
                            </Col>

                            <Col sm="12" md={{size:5,offset:3}}>
                                <Text class = "tipography-purple-text" text = "Entraremos em contato com você"></Text>
                               
                            </Col>
                          
                        </Row>
                    </Col>

                    <Col sm = "12"md = "6" className="mb-width">
                        <Col sm="12" md={{ size: 6, offset:3 }}  className="spacing-card shadow-lg p-3 mb-5 rounded">
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Form>
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="nome">Nome</Label>
                                        <Input type="text" name="nome" id="nome" placeholder="Digite seu nome" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="nome">Idade</Label>
                                        <Input type="number" name="idade" id="idade" placeholder="Digite sua cidade" />
                                    </FormGroup>
                                    
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="nome">Cidade</Label>
                                        <Input type="text" name="cidade" id="cidade" placeholder="Digite sua idade" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="nome">Estado</Label>
                                        <Input type="text" name="estado" id="estado" placeholder="Digite seu estado" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="nome">Área de atuação</Label>
                                        <Input type="text" name="area" id="area" placeholder="Digite sua área de atuação" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="nome">Email</Label>
                                        <Input type="email" name="email" id="email" placeholder="Digite seu email" />
                                    </FormGroup>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                        <button className="btn-color">Cadastrar</button>
                                     </Col>
                                </Form>
                            </Col>
                            
                        </Col>
                        
                    </Col>
                   
                </Row>
               
            </div>
        );


    }
}