// ContactPage.js
import React from 'react';
import CollageComponent from './HeaderCollection';
import InnerPageBanner from '../components/innerPageBanner';
import ContactForm from '../components/Form';
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <div>
      <CollageComponent />
      <section class="custom-padding innerpage-banner"><InnerPageBanner BannerTitle="Contact Us"></InnerPageBanner></section>
      <section class="custom-padding contact-form"><ContactForm></ContactForm></section>
      <section class="custom-padding footer"><Footer></Footer></section>
    </div>
  );
}

export default ContactPage;
