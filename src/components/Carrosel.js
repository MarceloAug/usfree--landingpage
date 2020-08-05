import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const flex = require("../Images/flex.png");
const seg = require("../Images/seg.png");
const usfree = require("../Images/usfree.png");

const items = [
  {
    src: flex,
    altText: 'Flexibilidade',
    caption:"",
    key: '1'
  },
  {
    src:seg,
    altText: 'Segurança jurídica',
    caption: '',
    key: '2'
  },
  {
    src: usfree,
    altText: 'Experimente trabalhar como prestador de serviços!',
    caption: '',
    key: '3'
  }
];

const Carrosel = () => <UncontrolledCarousel interval={20000}  items={items} />;

export default Carrosel;