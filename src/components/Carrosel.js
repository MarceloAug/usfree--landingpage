import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const flex = require("../Images/flex.png");
const seg = require("../Images/seg.png");
const usfree = require("../Images/usfree.png");

const items = [
  {
    src: flex,
    altText: 'Flexibilidade',
    header: 'Flexibilidade',
    caption:"Flexibilidade",
    key: '1'
  },
  {
    src:seg,
    altText: 'Segurança jurídica',
    header: 'Segurança juridica',
    caption: 'Flexibilidade',
    key: '2'
  },
  {
    src: usfree,
    altText: 'O que fazemos?',
    header: 'O que fazemos?',
    caption: 'O que fazemos?',
    key: '3'
  }
];

const Carrosel = () => <UncontrolledCarousel items={items} />;

export default Carrosel;