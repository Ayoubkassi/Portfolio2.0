import React from 'react';
import { Section , Title , List , Item } from './Feature.styles';

const Feature = ({item}) => {
  return (
    <Section>
      <Title>{item.title}</Title>
      <List>
        { item.items.map((element)=>(
          <Item>{element}</Item>
        )) }
      </List>
    </Section>
  )
}

export default Feature;
