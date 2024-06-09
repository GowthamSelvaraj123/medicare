import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ButtonComponent from './ButtonComponents';
import stethoScope from '../assets/stethoscope.png';


const GetInTouch = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} className='text-center'>
        <img src={stethoScope} width="80px" className="" alt="First slide" />
          <h3 className='pb-3 pt-3 text-light'>Need Help? Get In Touch.</h3>
          <ButtonComponent buttontext="Get in Touch" buttonstyle="secondary" />
        </Col>
      </Row>
    </Container>
  );
}

export default GetInTouch;
