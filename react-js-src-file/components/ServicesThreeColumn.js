import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GeneralSurgery from '../assets/general-surgery.svg';
import ChildcareServices from '../assets/childcare-services.png';
import Cardiology from '../assets/cardiology.png';
import LabTesting from '../assets/lab-testing.svg';
import physicalTherapy from '../assets/physical-therapy.svg';
import CounsellingServices from '../assets/counselling-services.svg';
import ButtonComponent from '../components/ButtonComponents';

const ServiceThreeColumnComponent = () => {
    const serviceColumnList = [{serviceIcon:GeneralSurgery, serviceTitle:"General Surgery", serviceContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"}, {serviceIcon:ChildcareServices, serviceTitle:"Childcare Services", serviceContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"}, {serviceIcon:Cardiology, serviceTitle:"Cardiology", serviceContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"}, {serviceIcon:LabTesting, serviceTitle:"Laboratory Testing", serviceContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"}, {serviceIcon:physicalTherapy, serviceTitle:"Physical Therapy", serviceContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"}, {serviceIcon:CounsellingServices, serviceTitle:"Counseling Services", serviceContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"}];
    const sliderThreeColumnrepeat = serviceColumnList.map((item, index) => (
        <Col sm={4}>
        <div class="service-wrap text-center">
            <img alt="servicesimage" src={item.serviceIcon} />
            <h4>{item.serviceTitle}</h4>
            <p>{item.serviceContent}</p>
        </div>
        </Col>
    ));
  return (
    <Container>
        <div class="title-wrap">
            <h6>SERVICES</h6>
            <h2>Services We Offer</h2>
            <p>Explore a comprehensive range of healthcare services designed to address your medical needs. Our expert team of healthcare professionals is here to guide you through every step of your wellness journey. Our services include</p>
        </div>
      <Row className='row-additional-styles'>
      {sliderThreeColumnrepeat}
      </Row>
      <div class="button-wrap">
  <ButtonComponent buttontext="All services" buttonstyle="primary" />
  </div>
    </Container>
  );
}

export default ServiceThreeColumnComponent;
