import PropertiesData from '@/app/(admin)/property/grid/components/PropertiesData'
import PropertiesFilter from '@/app/(admin)/property/grid/components/PropertiesFilter'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import { Row } from 'react-bootstrap'

function page() {
  return (
    <div>
      <PageTitle title="Find Rentals In Your Area That Fit Your Budget" subName="Home" />
      <Row>
        <PropertiesData />
      </Row>
    </div>
  )
}

export default page
