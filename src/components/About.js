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
                        <img src={badOk} className="img-fluid" />
                </Col>

                <Col  lg ="4" sm="12" md = "12">
                    <Text class = "tipography-purple-text" text = "Experimente trabalhar como prestador de serviço! Veja como você pode e deveria trabalhar como prestador, com transparência com seu contratante e outros tomadores de serviço!"></Text>
                </Col>	

                <Col lg="4" sm="12" md="12">
                        <img src={goodOk} className="img-fluid" />
                </Col>	
					
            </Row>
        )
    }
}	