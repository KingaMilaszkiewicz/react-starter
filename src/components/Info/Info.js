import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { infoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoData.title} image={infoData.image}/>
    <div><p>{infoData.text}</p></div>
  </Container>
);

export default Info;