import FileUpload from '@/components/FileUpload'
import PageTitle from '@/components/PageTitle'
import { Metadata } from 'next'
import { Col, Row } from 'react-bootstrap'
import PropertyAdd from './components/PropertyAdd'
import PropertyAddCard from './components/PropertyAddCard'

export const metadata: Metadata = { title: 'Add Property' }

const PropertyAddPage = () => {
  return (
    <>
      <PageTitle title="Add Unit" subName="Real Estate" />
      <Row>
        {/* <PropertyAddCard /> */}
        <Col xl={12} lg={8}>
          <FileUpload title="Add Property Photo" />
          <PropertyAdd />
          
        </Col>
      </Row>
    </>
  )
}

export default PropertyAddPage
