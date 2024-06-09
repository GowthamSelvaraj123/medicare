// AboutPage.js
import React from 'react';
import CollageComponent from './HeaderCollection';
import InnerPageBanner from '../components/innerPageBanner';
import Footer from '../components/Footer';

function BlogPage() {
  return (
    <div>
      <CollageComponent />
      <section class="custom-padding innerpage-banner"><InnerPageBanner BannerTitle="Blogs"></InnerPageBanner></section>
      <section class="custom-padding footer"><Footer></Footer></section>
    </div>
  );
}

export default BlogPage;
