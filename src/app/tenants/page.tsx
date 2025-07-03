import React from 'react'
import { Container, Row, Col, Button, Card, Form, Image } from 'react-bootstrap'
import MainHeader from '@/components/theme/MainHeader'
import MainFooter from '@/components/theme/MainFooter'
function page() {
  return (
    <>
      <MainHeader />
      <Container>
        <Row>
          <h2>Tenants</h2>
        </Row>
      </Container>

      <MainFooter />
    </>
  )
}

export default page
