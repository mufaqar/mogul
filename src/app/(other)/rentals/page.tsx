import PropertiesData from '@/app/(admin)/property/grid/components/PropertiesData'
import PropertiesFilter from '@/app/(admin)/property/grid/components/PropertiesFilter'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import { Container, Row } from 'react-bootstrap'


function page() {
  return (
    <div>
      <PageTitle title="Find Rentals In Your Area That Fit Your Budget" subName="Home" />
      <Container>
      <Row>
        <PropertiesData />
      </Row>
      </Container>
    </div>
  )
}

export default page
