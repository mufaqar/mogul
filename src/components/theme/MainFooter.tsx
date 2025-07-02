'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function MainFooter() {
  return (
    <footer className="bg-light py-4 border-top">
      <Container>
        <Row className="justify-content-between align-items-center">
          {/* Left: Navigation Links */}
          <Col xs={12} md="auto" className="mb-3 mb-md-0">
            <Nav className="flex-wrap gap-3">
              <Nav.Item>
                <Link href="/" className="nav-link text-primary fw-medium p-0">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/about" className="nav-link text-primary fw-medium p-0">About</Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/privacy" className="nav-link text-primary fw-medium p-0">Privacy</Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/terms" className="nav-link text-primary fw-medium p-0">Terms</Link>
              </Nav.Item>
            </Nav>
          </Col>

          {/* Right: Copyright */}
          <Col xs={12} md="auto">
            <div className="text-muted small">© MOGUL 2025</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MainFooter;