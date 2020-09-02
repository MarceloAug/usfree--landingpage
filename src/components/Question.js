import React, { Component } from 'react';
import { Row, Col} from 'reactstrap'; 
import Text from './Text';


export default class Question extends Component {


    render(){
        const bordHigh = require('../Images/wave.svg');
     

        return( 
            <div>
                <Row >
                    <img src={bordHigh}  width="100%" className="img-fluid" alt="Perguntas frequentes inicio"/>
                    <Col sm='12' md='6' className="background-color-purple" >
                        <Col sm="12" md={{ size: 8, offset: 3 }} >
                            <Text class = "tipography-green" text = "Perguntas frequentes"></Text>

                            <Text class = "tipography-green-20px" text = "Por que trabalhar como prestador de serviço?"></Text>
                            <Text class = "tipography-white-text" text = "Para ter maior liberdade e autonomia na definição de horários, possibilidade de trabalhar em qualquer lugar, para mais de um cliente e negociar contratos mais justos com seu Contratante!"></Text>

                            <Text class = "tipography-green-20px" text = "Qual a diferença do modelo CLT para PJ?"></Text>
                            <Text class = "tipography-white-text" text = "Enquanto empregado, parte do seu salário é destinado ao acúmulo de reserva para pagamento de benefícios ou direitos sociais (INSS, FGTS, Seguro Desemprego e Aposentadoria). O empregador também deve pagar valores sobre o salário que é pago para o empregado. Então, todos perdem  o seu salário é diminuído pelos descontos em folha e o seu empregador paga cerca de 70% a mais sobre o seu salário. Já no modelo de Prestador de Serviço, existem impostos a ser pagos na emissão da Nota Fiscal, porém, infinitamente menores do que como empregador. Como esta é uma relação mais barata, é possível negociar melhores valores para o Contrato de Prestação de Serviços, que usualmente chega a ser 40% maior do que o salário de um empregado na mesma categoria."></Text>

                            <Text class = "tipography-green-20px" text = "Como criar um CNPJ?"></Text>
                            <Text class = "tipography-white-text" text = "Procure um contador de sua confiança. Este profissional saberá qual o melhor tipo de empresa abrir em seu nome e poderá lhe explicar todos os detalhes de cada tipo empresarial"></Text>

                            <Text class = "tipography-green-20px" text = "Eu vou ganhar mais trabalhando como prestador de serviço?"></Text>
                            <Text class = "tipography-white-text" text = "Sim! Como esta relação é mais barata, os valores definidos entre o Tomador e o Prestador de Serviços tende a ser cerca de 40% maior do que no modelo tradicional."></Text>
                        </Col>
                    </Col>
                    <Col sm='12' md='6' className="background-color-purple" >
                        <Col sm="12" md={{ size: 8, offset: 2 }} className="margin"> 

                            <Text class = "tipography-green-20px" text = "Trabalhando como prestador de serviço eu perco direito a aposentadoria?"></Text>
                            <Text class = "tipography-white-text" text = "Não! Você pode contribuir para a previdência social, se quiser. Contudo, é mais comum que prestadores de serviço invistam em previdência privada e tenham seus próprios investimentos financeiros, já que possuem rentabilidade e previsibilidade muito maiores do que a previdência social, gerida conforme as necessidades do Governo."></Text>

                            <Text class = "tipography-green-20px" text = "Se eu contratar alguém como prestador de serviço eu não preciso mais me preocupar com processos judiciais?"></Text>
                            <Text class = "tipography-white-text" text = "Errado! Ainda há termos de contrato a serem respeitados por ambas as partes! Se ficar comprovado o desvio da finalidade do contrato ou que alguma regra não foi cumprida, o conflito poderá ser encaminhado para arbitragem ou judiciário."></Text>

                            <Text class = "tipography-green-20px" text = "Se eu contratar alguém como MEI/PJ eu ainda serei chefe do meu funcionario?"></Text>
                            <Text class = "tipography-white-text" text = "Não! Prestador de serviço não é funcionário. A relação de contratação é a mesma da contratação de serviços de terceiros. Poderá existir a exigência do cumprimento dos termos do contrato, contudo, sem qualquer subordinação, pessoalidade, habitualidade ou “bater ponto” do empregado comum. Todos esses cuidados devem ser tomados para que não entre em conflito com o artigo 3º da CLT, que tem uma dinâmica de relações de trabalho distinta. "></Text>

                        </Col>

                    </Col>
                   
                    
                </Row>
                
              
             </div>     
        
       
        );
    }
}