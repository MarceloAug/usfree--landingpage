import React, { Component } from 'react';
import { Row, Col} from 'reactstrap'; 
import Text from './Text';


export default class About extends Component {

    render() {
        const badOk = require('../Images/bad_v1.svg');
        const goodOk = require('../Images/good_v1.svg');
       
        return(
            <Row>

                <Col lg="4" sm="12" md="12">
                        <img src={badOk} className="img-fluid" alt = "não ok" />
                </Col>

                <Col  lg ="4" sm="12" md = "12">
                    <Text class = "tipography-purple-text" text = " Realizamos o processo de contratação entre pessoas jurídicas.Buscamos incentivar, por meio da educação, a autonomia e liberdade de negociação na contratação entre tomador e prestador de serviços, tornando a pejotização correta, simples e vantajosa para ambas as partes."></Text>
                </Col>	

                <Col lg="4" sm="12" md="12">
                        <img src={goodOk} className="img-fluid" alt="ok"/>
                </Col>	
					
            </Row>
        )
    }
}	