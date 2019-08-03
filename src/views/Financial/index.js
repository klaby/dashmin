// Imports
import React, { useEffect } from 'react';
import styled               from 'styled-components';

// Styles
const Title = styled.h1`
  color: #656565;
  font-size: 1.2rem;
`;

// Main
export default function Main() {

    // Mount
    useEffect(() => {
      document.title ='Dashmin - Financial';
    }, []);
  
    // Unmount
    useEffect(() => {
      return () => {
        document.title = '';
      };
    }, []);

    return <Title>Financial</Title>
}
