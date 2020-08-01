
import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Question from './Question';
import Footer from './Footer';
import Carrosel from './Carrosel';
import About from './About';


export default class App extends Component {

  render() {
	
    return (
		<div>
			<Header/>
			<br></br><br></br><br></br>
			<About/>
			<br></br><br></br><br></br><br></br>
			<Carrosel/>
			<Formulario/>
			<Question/>
			<Footer/>
		
		</div>
    );
  }
}

