import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ButtonComponent from './ButtonComponents';
import Blog1 from '../assets/blog1.jpg';
import Blog2 from '../assets/blog2.png';


const HomeBlogs = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col sm={6}>
          <h3>Blogs</h3>
          <h2>Latest Blogs  </h2>
        </Col>
        <Col sm={6} className='d-flex justify-content-end align-items-end'>
        <ButtonComponent buttontext="Get in Touch" buttonstyle="primary" />
        </Col>
        </Row>
        <Row>
        <Col sm={6}>
        <div class="image-wrap">
        <img src={Blog1} className="w-50 pe-2" alt="First slide" />
        <img src={Blog2} className="w-50 ps-2" alt="First slide" />
        </div>
        </Col>
        <Col sm={6}>
        <div className='d-flex flex-column justify-content-center h-100'>
        <h6>Blogs First</h6>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className='meta-tags'>
          <span>Category</span>
          <span>Tags</span>
        </div>
        </div>
        </Col>
      </Row>
      <Row className='flex-row-reverse mt-4'>
        <Col sm={6}>
        <div class="image-wrap">
        <img src={Blog1} className="w-50 pe-2" alt="First slide" />
        <img src={Blog2} className="w-50 ps-2" alt="First slide" />
        </div>
        </Col>
        <Col sm={6}>
        <div className='d-flex flex-column justify-content-center h-100'>
        <h6>Blogs First</h6>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className='meta-tags'>
          <span>Category</span>
          <span>Tags</span>
        </div>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeBlogs;
