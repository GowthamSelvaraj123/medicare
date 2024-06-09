// HomePage.js
import React from 'react';
import CollageComponent from './HeaderCollection';
import IndividualIntervalsExample from '../components/CustomSlider';
import ImageAndComponent from '../components/ImageAndComponent';
import ServiceThreeColumnComponent from '../components/ServicesThreeColumn';
import InfoColumnColumnComponent from '../components/InfoWrapColumn';
import ProfileSliderComponent from '../components/ProfileSlider';
import TestimonialSliderComponent from '../components/TestimonialSliderComponent';
import GetInTouch from '../components/GetInTouch';
import HomeBlogs from '../components/HomeBlogs';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="overall-wrap">
    <CollageComponent />
    <section class="slider"><IndividualIntervalsExample /></section>
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

export default HomePage;
