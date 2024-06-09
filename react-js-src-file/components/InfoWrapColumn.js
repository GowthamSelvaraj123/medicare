import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DoctorInfo from '../assets/doctorinfo.jpg';
import QualifiedDoctors from '../assets/qualified-doctors.png';
import QualifiedStaff from '../assets/qualified-staff.png';
import NumberofBeds from '../assets/number-of-beds.png';
import GreenInitiatives from '../assets/green-initiatives.png';

const InfoColumnColumnComponent = () => {
    const infoColumnList = [{infoIcon:QualifiedDoctors, InfoCount:"100+", infoTitle:"Qualified Doctors", infoDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}, {infoIcon:QualifiedStaff, InfoCount:"2500", infoTitle:"Qualified Staff", infoDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}, {infoIcon:NumberofBeds, InfoCount:"1000+", infoTitle:"Number of beds", infoDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}, {infoIcon:GreenInitiatives, InfoCount:"50+", infoTitle:"Green initiatives", infoDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}];
    const infoThreeColumnrepeat = infoColumnList.map((item, index) => (
        <Col sm={6}>
        <div class="service-wrap text-left">
        <div class="image_and_count_wrap">
            <img alt="test" style= {{objectFit:'contain'}} src={item.infoIcon} />
            <div class="content_wrap">
            <div class="count">{item.InfoCount}</div>
            <h4>{item.infoTitle}</h4></div></div>
            <p>{item.infoDescription}</p>
        </div>
        </Col>
    ));
  return (
    <Container>
        <Row className="align-items-center">
        <Col sm={6}>
        <div class="title-wrap">
            <img alt="test" width="100%" style= {{objectFit:'cover'}} src={DoctorInfo} />
        </div>
        </Col>
        <Col sm={6}>
            <div class="row">
      {infoThreeColumnrepeat}
      </div>
      </Col>
      </Row>
      <div class="button-wrap">
  </div>
    </Container>
  );
}

export default InfoColumnColumnComponent;
