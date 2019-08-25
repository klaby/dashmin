// Imports
import React     from 'react';
import { Alert } from 'reactstrap';

// Main
export default function Main({ type, status, message }) {
  return (
    <Alert
      isOpen={status}
      color={type}
      style={{ transition: 'all .5s' }}
      fade={status}
    >
    { message }
    </Alert>
  )
}