import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ButtonComponent from './ButtonComponents';
import React, { useState } from 'react';
import Diamond from '../assets/keyword-diamond.png';
import Testimonial1 from '../assets/testimonial-1.jpg';
import Testimonial2 from '../assets/testimonial-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const TestimonialSliderComponent = () => {
  const [lists, setList] = useState(['Keyword1', 'Keyword2', 'Keyword3', 'Keyword4', 'Keyword5','Keyword6', 'Keyword7', 'Keyword8']);
  const testimonialsColumnList = [{testimonialsImage:Testimonial1, testimonialsName:"Ramkumar", testimonialsLocation:"Coimbatore, TN", testimonialsContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"}, {testimonialsImage:Testimonial2, testimonialsName:"Manikandan", testimonialsLocation:"Coimbatore, TN", testimonialsContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"}, {testimonialsImage:Testimonial1, testimonialsName:"Parthiban",testimonialsLocation:"Coimbatore, TN", testimonialsContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"}, {testimonialsImage:Testimonial2, testimonialsName:"Ramkumar", testimonialsLocation:"Coimbatore, TN", testimonialsContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"}];
  // const [swiperInstance, setSwiperInstance] = useState(null); // State to hold the Swiper instance
   const testimonialsThreeColumnrepeat = testimonialsColumnList.map((item, index) => (
       <>
     <SwiperSlide>
     <div class="testimonial-details-wrap">
      <div class="testimonial-image"><img src={item.testimonialsImage} alt="First slide" /></div>
      <div class="testimonail-content">
       <p className="designation">{item.testimonialsContent}</p>
       <h4 className="testimonials-name">{item.testimonialsName}</h4>
       <h6 className="location">{item.testimonialsLocation}</h6>
       </div>
       </div>
     </SwiperSlide>
     </>
   ));
  return (
    <Container>
      <Row>
        <Col sm={5}>
        <h3>TESTIMONIALS</h3>
          <h2>Our Customers Praise Us For Our Great Results</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with </p>
          <h5>Most Attractive words from customers</h5>
          <Row className="mb-3">
          <Col sm={3}>
          <div class="keyword-image-wrap">
          <img src={Diamond}></img>
          </div>
          </Col>
          <Col sm={9} className='px-0'>
          <ul className="keyword-list">
          {lists.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
          </ul>
          </Col>
          </Row>
          <ButtonComponent buttontext="More Testimonials" buttonstyle="primary" />
        </Col>
        <Col sm={7}>
        <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  direction = "vertical"
  slidesPerView={2}
  navigation={true} 
  pagination={true}
  mousewheelControl= {true}
  loop={true}
  scrollbar={{ draggable: true }}
  className="mySwiper"  
  style={{ rowGap: '20px' }} // Add row gap using CSS
  onInit={(swiper) => {
    // Hide extra slides on initialization
    swiper.slides.forEach((slide, index) => {
        if (index >= 2) {
            slide.classList.add('swiper-slide-hidden');
        }
    });
}}
onSlideChange={(swiper) => {
    // Show/hide extra slides dynamically
    const currentSlideIndex = swiper.activeIndex;
    swiper.slides.forEach((slide, index) => {
        if (index >= currentSlideIndex && index < currentSlideIndex + 2) {
            slide.classList.remove('swiper-slide-hidden');
        } else {
            slide.classList.add('swiper-slide-hidden');
        }
    });
}}

    >{testimonialsThreeColumnrepeat}
      </Swiper>
        </Col>
      </Row>
    </Container>
  );
}

export default TestimonialSliderComponent;
