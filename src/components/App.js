
import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import { Container,Row,Col } from 'reactstrap';
import Text from './Text';
import Card from './Card';
import Formulario from './Formulario';
import Question from './Question';
import Footer from './Footer';


export default class App extends Component {

  render() {
	
    return (
		<div>
			<Header></Header>
			<br></br><br></br><br></br>
			<About></About>
			<br></br><br></br><br></br>><br></br>
			<Card></Card>
			<Formulario></Formulario>
			<Question></Question>
			<Footer></Footer>
		
		</div>
    );
  }
}

