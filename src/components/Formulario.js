import React, { Component } from 'react';
import { Row, Col} from 'reactstrap'; 
import {Form, FormGroup, Label, Input } from 'reactstrap';
import Text from './Text';
import { ToastContainer,toast } from 'react-toastify';



export default class Formulario extends Component {

    constructor(props){
        super(props);

        this.state = {
            customers:{
                name:"",
                idade:"",
                cidade:"",
                estado:"",
                profissao:"",
                email:""   
            },
        }
    }


    handleImputChange = event =>{
        
        const {value,name} = event.target;
        this.setState(prevState =>({
            customers:{...prevState.customers,[name]:value}
        }));
    }


    ///dispara para api 
    handleSubmit = event =>{
     
        fetch("http://localhost:3000/customers",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            mode:"cors",
            body:JSON.stringify(this.state.customers)
         
        }).then(data =>{
            console.log(data);
            if(data.ok){
            
                toast.success("Obrigado por se cadastrar , entraremos em contato com você em breve ");
                this.setState({
                    customers:{
                        name:"",
                        idade:"",
                        cidade:"",
                        estado:"",
                        profissao:"",
                        email:""   
                    },
                });
              
            } else{
                toast.error('Houve um problema ao enviar os seus dados , tente novamente mais tarde');
            }
      
        });
        event.preventDefault();
    
    }

    render(){
        const registerHere = require('../Images/hand2_v1.svg');
        return(
            <div>
                <ToastContainer />
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
                                <Form  onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="name">Nome</Label>
                                        <Input type="text" name="name" id="name" placeholder="Digite seu nome"  value={this.state.customers.name}  onChange={this.handleImputChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="idade">Idade</Label>
                                        <Input type="number" name="idade" id="idade" placeholder="Digite sua cidade"  value={this.state.customers.idade} onChange={this.handleImputChange}/>
                                    </FormGroup>
                                    
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="cidade">Cidade</Label>
                                        <Input type="text" name="cidade" id="cidade" placeholder="Digite sua idade" value={this.state.customers.cidade} onChange={this.handleImputChange}/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="estado">Estado</Label>
                                        <Input type="text" name="estado" id="estado" placeholder="Digite seu estado" value={this.state.customers.estado}  onChange={this.handleImputChange} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="profissao">Área de atuação</Label>
                                        <Input type="text" name="profissao" id="profissao" placeholder="Digite sua área de atuação" value={this.state.customers.profissao} onChange={this.handleImputChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="email">Email</Label>
                                        <Input type="email" name="email" id="email" placeholder="Digite seu email" value={this.state.customers.email} onChange={this.handleImputChange} />
                                    </FormGroup>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                        <button className="btn-color" type="submit">Cadastrar</button>
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