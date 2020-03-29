import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { faqData } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqData.title} image={faqData.image}/>
    <div><p>{faqData.text}</p></div>
  </Container>
);

export default FAQ;