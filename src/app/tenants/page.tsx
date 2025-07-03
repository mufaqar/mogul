import React from 'react'
import { Container, Row, Col, Button, Card, Form, Image } from 'react-bootstrap';
import Link from 'next/link';
import p2 from '@/assets/images/properties/p-1.jpg'
import MainHeader from '@/components/theme/MainHeader';
import MainFooter from '@/components/theme/MainFooter';
function page() {
  return (
    <>
    <MainHeader/>
    <Container><h2>Tenants</h2></Container>
    
    <MainFooter />
    </>
  )
}

export default page
