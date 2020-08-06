import React, { Component } from 'react';
import { Row, Col} from 'reactstrap'; 
import {Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import Text from './Text';
import { ToastContainer,toast } from 'react-toastify';



export default class Formulario extends Component {

    constructor(props){
        super(props);

        this.state = {
            customers:{
                nome:"",
                date:"0000-00-00",
                cidade:"",
                estado:"",
                profissao:"",
                email:"",
                tipo:""   
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
        console.log(JSON.stringify(this.state.customers));
        fetch("http://localhost:3000/customers",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body:JSON.stringify(this.state.customers)
         
        }).then(data =>{
            if(data.ok){
            
                toast.success("Obrigado por se cadastrar , entraremos em contato com você em breve ");
                this.setState({
                    customers:{
                        nome:"",
                        date:"0000-00-00",
                        cidade:"",
                        estado:"",
                        profissao:"",
                        email:"",
                        tipo:""   
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
                            <Col sm="12" md={{size:6,offset:3}}>
                                <Text class = "tipography-green" text = "Participe dessa transformação com a gente! "></Text>
                            </Col>
                                
                            <Col  sm="12" md={{size:2,offset:7}}>
                               <img src={registerHere} className="img-fluid indicates" alt="indica usfree"/>
                            </Col>

                            <Col sm="12" md={{size:6,offset:3}}>
                                <Text class = "tipography-purple-text" text = "Cadastre-se para receber maiores informações e nos ajude a transformar o mercado"></Text>
                            </Col>
                          
                        </Row>
                    </Col>

                    <Col sm = "12"md = "6" className="mb-width">
                        <Col sm="12" md={{ size: 6, offset:3 }}  className="spacing-card shadow-lg p-3 mb-5 rounded">
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Form  onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="nome">Nome</Label>
                                        <Input type="text" name="nome" id="nome" placeholder="Digite seu nome" value={this.state.customers.nome}  onChange={this.handleImputChange} required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="idade">Data de Nascimento(opcional)</Label>
                                        <Input type="date" name="date" id="date" placeholder="Digite sua data de nascimento" value={this.state.customers.date} onChange={this.handleImputChange}  />
                                    </FormGroup>
                                    
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="cidade">Cidade</Label>
                                        <Input type="text" name="cidade" id="cidade" placeholder="Digite sua cidade" value={this.state.customers.cidade} onChange={this.handleImputChange} required />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="estado">Estado</Label>
                                        <CustomInput type="select" name="estado" id="estado" placeholder="Digite seu estado" value={this.state.customers.estado}  onChange={this.handleImputChange} required >
                                            <option value="">Selecione</option>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espírito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                        </CustomInput>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="profissao">Área de atuação</Label>
                                        <Input type="text" name="profissao" id="profissao" placeholder="Digite sua área de atuação" value={this.state.customers.profissao} onChange={this.handleImputChange} required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="email">Email</Label>
                                        <Input type="email" name="email" id="email" placeholder="Digite seu email" value={this.state.customers.email} onChange={this.handleImputChange} required />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="tipography-purple-text-20px" for="tipo">Selecione o seu tipo de perfil</Label>
                                        <CustomInput  value={this.state.customers.tipo} onChange={this.handleImputChange} type="select" id="tipo" name="tipo" required>
                                            <option value="">Selecione</option>
                                            <option value="1">Prestador de serviço</option>
                                            <option value ="0">Tomador</option>
                                        </CustomInput>
                                    </FormGroup>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                        <button className="btn-color btn-block  btn-lg" type="submit">Cadastrar</button>
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