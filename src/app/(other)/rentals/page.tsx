import PropertiesData from '@/app/(admin)/property/grid/components/PropertiesData'
import PropertiesFilter from '@/app/(admin)/property/grid/components/PropertiesFilter'
import PageTitle from '@/components/PageTitle'
import MainFooter from '@/components/theme/MainFooter'
import MainHeader from '@/components/theme/MainHeader'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

function page() {
  return (
    <div className=''>

      <MainHeader />
      <Container>
        
        <Row>
          <PageTitle title="Find Rentals In Your Area That Fit Your Budget" subName="Home"  />
          <PropertiesData />
        </Row>
      </Container>
      <MainFooter/>
    </div>
  )
}

export default page
