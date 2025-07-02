'use client'; // Required for Next.js 13+ when using interactivity

import React from 'react';
import dynamic from 'next/dynamic';
import { Container, Nav, Button } from 'react-bootstrap';
import Image from 'next/image';
import logoDark from '@/assets/images/logo-light.png'
// Dynamically import Navbar components to avoid SSR issues
const Navbar = dynamic(
  () => import('react-bootstrap').then((mod) => mod.Navbar),
  { ssr: false }
);

const NavbarBrand = dynamic(
  () => import('react-bootstrap').then((mod) => mod.Navbar.Brand),
  { ssr: false }
);

const NavbarToggle = dynamic(
  () => import('react-bootstrap').then((mod) => mod.Navbar.Toggle),
  { ssr: false }
);

const NavbarCollapse = dynamic(
  () => import('react-bootstrap').then((mod) => mod.Navbar.Collapse),
  { ssr: false }
);

function MainHeader() {


  return (
     <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        {/* Logo on the left */}
        <NavbarBrand href="/">
          <Image alt="Logo" width={112} height={24} src={logoDark} style={{ height: '6%', width: 'auto' }} priority />
        </NavbarBrand>

        {/* Mobile toggle button */}
        <NavbarToggle aria-controls="basic-navbar-nav" className="border-0">
          <span className="navbar-toggler-icon"></span>
        </NavbarToggle>

        {/* Navigation menu */}
        <NavbarCollapse id="basic-navbar-nav" className="justify-content-end">
          <Nav as="ul" className="align-items-center">
            {/* 5 navigation links */}
            <Nav.Item as="li">
              <Nav.Link href="/Tenants" className="px-3 fw-medium">Tenants</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/Rentals" className="px-3 fw-medium">Rentals</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/Landlords" className="px-3 fw-medium">Landlords</Nav.Link>
            </Nav.Item>
        

            {/* 1 CTA button */}
            <Nav.Item as="li" className="ms-lg-3 mt-3 mt-lg-0">
              <Button 
                variant="primary" 
                className="px-4 py-2 fw-medium rounded"
                href="/get-started"
              >
                SING UP
              </Button>
            </Nav.Item>
                <Nav.Item as="li">
              <Nav.Link href="/Sign In" className="px-3 fw-medium">Sign In</Nav.Link>
            </Nav.Item>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;