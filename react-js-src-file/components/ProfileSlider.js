import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ButtonComponent from '../components/ButtonComponents';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import profiles1 from '../assets/dr-matthew-wood.jpg';
import profiles2 from '../assets/emiley-jackson.jpg';
import profiles3 from '../assets/michael-rodriguez.jpg';

const ProfileSliderComponent = () => {
    const profileColumnList = [{profileImage:profiles1, profileName:"Dr. Matthew wood", profileContent:"Chief Cardiologist"}, {profileImage:profiles2, profileName:"Dr. Emily Johnson", profileContent:" Head Obstetrician-Gynecologist"}, {profileImage:profiles3, profileName:"Dr. Michael Rodriguez", profileContent:"Neurosurgeon"}, {profileImage:profiles2, profileName:"Ramkumar", profileContent:"Neurosurgeon"}];
    const profileThreeColumnrepeat = profileColumnList.map((item, index) => (
        <>
      <SwiperSlide>
      <img src={item.profileImage} className="imagesize" alt="First slide" />
      <div class="doctor-details">
        <h4 className="profile-name">{item.profileName}</h4>
        <h6 className="designation">{item.profileContent}</h6>
        </div>
      </SwiperSlide>
      </>
    ));
  return (
    <Container>
        <div class="title-wrap text-center">
            <h6 className="text-light">MEET OUR EXPERIENCED TEAM</h6>
            <h2 className="text-light">Our Dedicated Doctors Team</h2>
            <p className="text-light">We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery</p>
        </div>
      <Row>
      <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  slidesPerView={3}
  navigation={true} 
  pagination={true}
  loop={true}
  scrollbar={{ draggable: true }}
  className="mySwiper"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >{profileThreeColumnrepeat}
      </Swiper>
      </Row>
      <div class="button-wrap">
  <ButtonComponent buttontext="View Our Team" buttonstyle="primary" />
  </div>
    </Container>
  );
}

export default ProfileSliderComponent;
