import React from 'react'
import { Container, Row, Col, Button, Card, Form, Image } from 'react-bootstrap';
import Link from 'next/link';
import p2 from '@/assets/images/properties/p-15.jpg';
function page() {
  return (
    <Container fluid className="bg-white py-4">
      <Container>
        {/* Top Tags */}
        <div className="mb-2 d-flex gap-2">
          <span className="badge bg-light text-dark border">Apartment for rent</span>
          <span className="badge bg-light text-dark border">Pet friendly</span>
        </div>

        {/* Title Section */}
        <Row className="align-items-center mb-3">
          <Col md={8}>
            <h2 className="fw-bold">Santa Monica Palms Apartments</h2>
            <p className="text-muted mb-0">2501 Pico Blvd, Santa Monica, CA 90405, USA</p>
            <span className="badge bg-success me-2">Excellent</span>
            <span className="text-muted">✔ Verified</span>

          </Col>
          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <p className="mb-1"><strong>Monthly Rent:</strong> $2,300–$2,400</p>
            <p className="mb-1"><strong>Beds:</strong> 1 &nbsp;&nbsp; <strong>Bath:</strong> 1 &nbsp;&nbsp; <strong>Sqft:</strong> 375</p>
          </Col>
        </Row>

        {/* Image Gallery + Sidebar */}
        <Row>
          <Col md={8}>
            <Image src="/assets/images/properties/p-2.jpg" fluid rounded className="mb-3" />
            <Row className="mb-3">
              <Col xs={6} md={4}>
                <Image src="/assets/images/properties/p-2.jpg" fluid rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src="/assets/images/properties/p-2.jpg" fluid rounded />
              </Col>
              <Col xs={12} md={4} className="mt-2 mt-md-0">
                <Image src="/assets/images/properties/p-2.jpg" fluid rounded />
              </Col>
            </Row>
          </Col>

          {/* Sidebar */}
          <Col md={4}>
            <Card className="p-3 mb-4 shadow-sm">
              <Button variant="danger" className="w-100 mb-3">Check availability</Button>
              <p><strong>Call:</strong> <a href="tel:3105582591">(310) 558-2591</a></p>

              <hr />

              <h6>Tour Santa Monica Palms</h6>
              <Row className="text-center mb-2">
                <Col><div className="border py-2 rounded">Wed<br /><strong>2</strong></div></Col>
                <Col><div className="border py-2 rounded">Thu<br /><strong>3</strong></div></Col>
                <Col><div className="border py-2 rounded">Fri<br /><strong>4</strong></div></Col>
                <Col><div className="border py-2 rounded">Sat<br /><strong>5</strong></div></Col>
              </Row>
              <Button variant="outline-dark" size="sm" className="w-100">Request tour</Button>
            </Card>

            <Card className="p-3 shadow-sm mb-3 bg-dark text-white">
              <h6>Zoë<sup>™</sup></h6>
              <p>Hi! Let’s figure out if this property is right for you.</p>
              <Button variant="light" size="sm" className="fw-bold">Ask me anything</Button>
            </Card>

            <Card className="p-3 shadow-sm">
              <h6>Location</h6>
              <Image src={p2} fluid className="mb-2" />
              <p className="mb-0">2501 Pico Blvd, Santa Monica, CA 90405, USA</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container >
  )
}

export default page
