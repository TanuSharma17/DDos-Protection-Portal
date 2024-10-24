// src/App.js
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <>
        <div className="App">
      <h1>DDoS Protection Portal</h1>
      <p>Welcome to the dashboard!</p>
    </div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">DDoS Protection Portal</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Dashboard />
      </Container>
    </>
  );
}

export default App;
