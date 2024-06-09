import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Facebook from '../assets/facebook.svg';
import Linkedin from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';
import Location from '../assets/location.svg';
import Mail from '../assets/mail.svg';
import Telephone from '../assets/telephone.svg';  

const Footer = () => {
  const footerMenu1 = ['Primary Care', 'Specialty Care' , 'Diagnostic Services', 'Emergency Care', 'Remote Consultations'];
  const footerMenu2 = ['Home', 'About', 'Our Sevices', 'Blog', 'Contact'];
  const footerMenuList = footerMenu1.map((item, index) => (
    <li className='list-group-item'>{item}</li>
  ));
  const footerMenuList2 = footerMenu2.map((item, index) => (
    <li className='list-group-item'>{item}</li>
  ));
  return (
    <Container>
      <Row>
        <Col sm={3} className='text-left'>
        <h4 className="text-light">About Healthcare</h4>
        <p className="text-light">Our Clinic has grown to provide a world class facility for the clinic advanced restorative dentistry.</p>
        <ul className="list-group list-group-horizontal mt-4">
          <li className="list-group-item"><img src={Facebook} alt="facebook" /></li>
          <li className="list-group-item"><img src={Linkedin} alt="linkedin" /></li>
          <li className="list-group-item"><img src={Instagram} alt="twitter"  /></li>
        </ul>
        </Col>
        <Col sm={3} className='text-left'>
        <h4 className="text-light">Services</h4>
        <ul className="list-group mt-2 remove-bootstrap-style">
        {footerMenuList}
        </ul>
        </Col>
        <Col sm={3} className='text-left'>
        <h4 className="text-light">Explore</h4>
        <ul className="list-group mt-2 remove-bootstrap-style">
        {footerMenuList2}
        </ul>
        </Col>
        <Col sm={3} className='text-left'>
        <h4 className="text-light">Contact us</h4>
        <ul className="list-group mt-2 remove-bootstrap-style image-white">
          <li className="list-group-item d-flex align-items-center"><div class="image-wrap"><img src={Location} alt="facebook" /></div><span className='ms-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></li>
          <li className="list-group-item d-flex align-items-center"><div class="image-wrap"><img src={Mail} alt="linkedin" /></div><span className='ms-2'>+91 9087654321</span></li>
          <li className="list-group-item d-flex align-items-center"><div class="image-wrap"><img src={Telephone} alt="twitter"  /></div><span className='ms-2'>test@gmail.com</span></li>
        </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
