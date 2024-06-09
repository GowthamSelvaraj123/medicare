// AboutPage.js
import React from 'react';
import CollageComponent from './HeaderCollection';
import ImageAndComponent from '../components/ImageAndComponent';
import ServiceThreeColumnComponent from '../components/ServicesThreeColumn';
import InfoColumnColumnComponent from '../components/InfoWrapColumn';
import ProfileSliderComponent from '../components/ProfileSlider';
import HomeBlogs from '../components/HomeBlogs';
import GetInTouch from '../components/GetInTouch';
import TestimonialSliderComponent from '../components/TestimonialSliderComponent';
import Footer from '../components/Footer';  
import InnerPageBanner from '../components/innerPageBanner';

function ServicesPage() {
  return (
    <div>
      <CollageComponent />
      <section class="custom-padding innerpage-banner"><InnerPageBanner BannerTitle="Services"></InnerPageBanner></section>
      <section class="custom-padding about"><ImageAndComponent /></section>
    <section class="custom-padding services"><ServiceThreeColumnComponent /></section>
    <section class="custom-padding info-section"><InfoColumnColumnComponent /></section>
    <section class="custom-padding profile-slider-section"><ProfileSliderComponent /></section>
    <section class="custom-padding testimonial-slider-section"><TestimonialSliderComponent /></section>
    <section class="custom-padding get-in-touch"><GetInTouch/></section>
    <section class="custom-padding homeblogs"><HomeBlogs></HomeBlogs></section>
    <section class="custom-padding footer"><Footer></Footer></section>
    </div>
  );
}

export default ServicesPage;
