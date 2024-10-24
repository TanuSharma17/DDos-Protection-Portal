// src/components/Dashboard.js
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function Dashboard() {
  const [domain, setDomain] = useState('');
  const [rateLimit, setRateLimit] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Domain: ${domain}, Rate Limit: ${rateLimit} requests/sec`);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Add Domain and Set Protection</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="domain">
            <Form.Label>Domain/URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="rateLimit">
            <Form.Label>Rate Limit (requests/sec)</Form.Label>
            <Form.Control
              type="number"
              value={rateLimit}
              onChange={(e) => setRateLimit(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Save Settings
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Dashboard;
