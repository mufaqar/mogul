'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Container, Nav, Button, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';
import Image from 'next/image';
import logoDark from '/public/assets/images/logo-light.png';

// Dynamically import Navbar components to avoid SSR issues
// const Navbar = dynamic(
//   () => import('react-bootstrap').then((mod) => mod.Navbar),
//   { ssr: false }
// );

// const NavbarBrand = dynamic(
//   () => import('react-bootstrap').then((mod) => mod.Navbar.Brand),
//   { ssr: false }
// );

// const NavbarToggle = dynamic(
//   () => import('react-bootstrap').then((mod) => mod.Navbar.Toggle),
//   { ssr: false }
// );

// const NavbarCollapse = dynamic(
//   () => import('react-bootstrap').then((mod) => mod.Navbar.Collapse),
//   { ssr: false }
// );

function MainHeader() {
  return (
    <Navbar bg="black" expand="lg" className="sticky-top">
      <Container>
        {/* Logo on the left */}
        <NavbarBrand href="/dashboards/analytics" className="text-white">
          <Image 
            alt="Logo" 
            width={112} 
            height={24} 
            src={logoDark} 
            style={{ height: '6%', width: 'auto' }} 
            priority 
          />
        </NavbarBrand>

        {/* Mobile toggle button */}
        <NavbarToggle aria-controls="basic-navbar-nav" className="border-0 text-white">
          <span className="navbar-toggler-icon"></span>
        </NavbarToggle>

        {/* Navigation menu */}
        <NavbarCollapse id="basic-navbar-nav" className="justify-content-end">
          <Nav as="ul" className="align-items-center">
            {/* Navigation links */}
            <Nav.Item as="li">
              <Nav.Link href="/" className="px-3 fw-bold text-white">Tenants</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/rentals" className="px-3 fw-bold text-white">Rentals</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/landlords" className="px-3 fw-bold text-white">Landlords</Nav.Link>
            </Nav.Item>

            {/* CTA button */}
            <Nav.Item as="li" className="ms-lg-3 mt-3 mt-lg-0">
              <Button 
                variant="" 
                className="px-4 py-2 fw-bold rounded text-black bg-white"
                href="/auth/sign-up"
              >
                SIGN UP
              </Button>
            </Nav.Item>
            
            {/* Sign In link */}
            <Nav.Item as="li">
              <Nav.Link href="/auth/sign-in" className="px-3 fw-medium text-white">Sign In</Nav.Link>
            </Nav.Item>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;