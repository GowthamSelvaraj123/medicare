import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const InnerPageBanner = ({BannerTitle}) => {
  return (
    <Container>
      <Row>
        <Col sm={12} className='text-center'>
          <h3 className='pb-3 pt-3 text-light'>{BannerTitle}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default InnerPageBanner;
