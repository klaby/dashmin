// Imports
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styles
const Breadcrumb = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  height: 40px;
  width: 100%;
  background: #ddd;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px 0 10px;
`;

const Main = () => {
  let path = document.location.pathname;
  let paths = path.split('/');

  const newPaths = [];
  paths.map(route => (
    route !== '' ? newPaths.push(`/${route}`) : newPaths.push('')
  ));

  return (
    <Breadcrumb>
      {newPaths.map(route => (
        <Link to={route}>{route}</Link>
      ))}
    </Breadcrumb>
  );
}
export default Main;
