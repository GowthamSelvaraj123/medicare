import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ButtonComponent from '../components/ButtonComponents';
import aboutImage1 from '../assets/about-1.png';
import aboutImage2 from '../assets/about-2.png';
import aboutImage3 from '../assets/about-3.png';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ImageAndComponent = () => {
    const prgressBarList = [{progressBarName:"Manage Treatment", progressbarStatus:85}, {progressBarName:"Rehabilitation", progressbarStatus:65}, {progressBarName:"Production", progressbarStatus:80}];
    const prgressBarSet = prgressBarList.map((item, index) => (
        <div class="progressBarInternalWrap">
        <div class="progressBarTitle"><div class="name">{item.progressBarName}</div><div class="status">{item.progressbarStatus}</div></div>
        <ProgressBar now={item.progressbarStatus} label={`${item.progressbarStatus}%`} />
        </div>
    ));
  return (
    <Container>
      <Row>
        <Col sm={6}>
        <div class="image-wrap-overall">
          <div class="two-image-wrap">
            <img className="two-image-style" alt="test" src={aboutImage1} />
            <img className="two-image-style" alt="test" src={aboutImage2} />
          </div>
          <div class="single-image-wrap">
          <img alt="test" src={aboutImage3} />
          </div>
          </div>
        </Col>
        <Col sm={6}>
          <h3>ABOUT US</h3>
          <h2>We’re The Standards <br /> In Research & Clinical</h2>
          <div class="progress-bar-wrap">{prgressBarSet}</div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with </p>
          <ButtonComponent buttontext="See More" buttonstyle="primary" />
        </Col>
      </Row>
    </Container>
  );
}

export default ImageAndComponent;
