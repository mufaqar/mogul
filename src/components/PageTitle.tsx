import { Col, Row } from 'react-bootstrap';

interface PageTitleProps {
  title: string;
  subName?: string;
}

const PageTitle = ({ title, subName }: PageTitleProps) => {
  return (
    <Row className="">
      <Col xs={10} md={10} className="text-center">
        <div className="page-title-box">
          <h4 className="mb-1 fw-semibold" style={{ fontSize: '40px' }}>{title}</h4>
        </div>
      </Col>
    </Row>
  );
};

export default PageTitle;
