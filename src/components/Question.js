import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap'; 
import Text from './Text';


export default class Question extends Component {


    render(){
        const bordHigh = require('../Images/wave.svg');
     

        return( 
            <div>
                <Row>
                    <img src={bordHigh}  width="100%" className="img-fluid" alt="Perguntas frequentes inicio"/>
                    <Col sm='12' md='6' className="background-color-purple" >
                        <Col sm="12" md={{ size: 8, offset: 3 }} >
                            <Text class = "tipography-green" text = "Perguntas frequentes"></Text>

                            <Text class = "tipography-green-25px" text = "Por que trabalhar como prestador de serviço?"></Text>
                            <Text class = "tipography-white-text" text = "Tenha maior liberdade para definir seus horários, trabalhar em casa e negociar de igual para igual com seu contratante"></Text>

                            <Text class = "tipography-green-25px" text = "Qual a diferença do modelo CLT para PJ?"></Text>
                            <Text class = "tipography-white-text" text = "No modelo tradicional de  carteira de trabalho, parte do seu dinheiro é pago ao governo, para que o colaborador possa usufruir do Seguro Desemprego, INSS, FGTS. Como Pessoa Jurídica, você pode receber o dinheiro que iria a esses benefícios, na sua mão, para investir como bem desejar"></Text>

                            <Text class = "tipography-green-25px" text = "Como criar um CNPJ?"></Text>
                            <Text class = "tipography-white-text" text = "Tenha maior liberdade para definir seus horários, trabalhar em casa e negociar de igual para igual com seu contratante"></Text>

                            <Text class = "tipography-green-25px" text = "Eu vou ganhar mais trabalhando como prestador de serviço?"></Text>
                            <Text class = "tipography-white-text" text = "Tenha maior liberdade para definir seus horários, trabalhar em casa e negociar de igual para igual com seu contratante"></Text>
                        </Col>
                    </Col>
                    <Col sm='12' md='6' className="background-color-purple" >
                        <Col sm="12" md={{ size: 8, offset: 3 }} className="margin"> 

                            <Text class = "tipography-green-25px" text = "Trabalhando como prestador de serviço eu perco direito a aposentadoria?"></Text>
                            <Text class = "tipography-white-text" text = "Tenha maior liberdade para definir seus horários, trabalhar em casa e negociar de igual para igual com seu contratante"></Text>

                            <Text class = "tipography-green-25px" text = "Se eu contratar alguém como prestador de serviço eu não preciso mais me preocupar com processos judiciais?"></Text>
                            <Text class = "tipography-white-text" text = "Tenha maior liberdade para definir seus horários, trabalhar em casa e negociar de igual para igual com seu contratante"></Text>

                            <Text class = "tipography-green-25px" text = "Se eu contratar alguém como MEI/PJ eu ainda serei chefe do meu funcionario?"></Text>
                            <Text class = "tipography-white-text" text = "Tenha maior liberdade para definir seus horários, trabalhar em casa e negociar de igual para igual com seu contratante"></Text>

                        </Col>

                    </Col>
                   
                    
                </Row>
                
              
             </div>     
        
       
        );
    }
}