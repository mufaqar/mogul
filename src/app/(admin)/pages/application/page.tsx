import PageTitle from '@/components/PageTitle'
import { getAllTimeline } from '@/helpers/data'
import type { TimelineType } from '@/types/data'
import type { Metadata } from 'next'
import { Fragment } from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap'

export const metadata: Metadata = { title: 'Application' }

const CenteredTimeline = ({ timeline }: { timeline: TimelineType }) => {
  return (
    <div className="timeline">
      <p>Application Page</p>
    </div>
  )
}

const Timeline = async () => {
  const timelineData = await getAllTimeline()
  return (
    <>
      <PageTitle title="Application" subName="Pages" />
      <Row>
        <Col lg={12}>
          <CenteredTimeline timeline={timelineData} />
        </Col>
      </Row>
    </>
  )
}

export default Timeline
