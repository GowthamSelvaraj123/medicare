import Carousel from 'react-bootstrap/Carousel';
import exampleImage from '../assets/home-banner.jpg';

const IndividualIntervalsExample = () => {
  const sliderList = [{image:exampleImage, alt:"First Sider", title:"First slide label", paragraph:"Nulla vitae elit libero a pharetra augue mollis interdum."}, {image:exampleImage, alt:"Second Sider", title:"Second slide label", paragraph:"Nulla vitae elit libero a pharetra augue mollis interdum."}, {image:exampleImage, alt:"Third Sider", title:"Third slide label", paragraph:"Nulla vitae elit libero a pharetra augue mollis interdum."}];
  const carouselSet = sliderList.map((item, index) => (
<Carousel.Item>
<img src={item.image} className="imagesize" alt="First slide" />
<Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.paragraph}</p>
        </Carousel.Caption>
</Carousel.Item>
  ));
  return (
    <Carousel>
      {carouselSet}
    </Carousel>
  );
}

export default IndividualIntervalsExample;
