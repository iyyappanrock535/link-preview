import React, { useEffect } from 'react';
import { MetaTags } from 'react-meta-tags';
import { Helmet } from 'react-helmet';
// import Head from 'next/head';

const About = () => {
  // useEffect(() => {
  //   const ogTitle = "MyApp test 3 Iyyappan";
  //   const ogImage = "https://s3.ca-central-1.amazonaws.com/communiti-dev/public/images/Hosts/1024/banner-photo-337.png?v=1731258502914"
  //   const ogTitleMetaTag = document.getElementById('og-title');
  //   const ogImageMetaTag = document.getElementById('og-image');
  //   console.log('asdkasd',ogTitleMetaTag,ogImageMetaTag);
  //   if (ogTitleMetaTag && ogImageMetaTag) {
  //    console.log('asdaskdjsa',ogTitleMetaTag,ogImageMetaTag);
      
  //   if (ogTitle) {
  //     document.getElementById('og-title').setAttribute('content', ogTitle);
  //   }
  //   if (ogImage) {
  //     document.getElementById('og-image').setAttribute('content', ogImage);
  //   }
  //   }
  // }, []);
  useEffect(() => {
    // Get the values from localStorage
    const ogTitle = localStorage.getItem('og_title') || 'Default OG Title';
    const ogImage = localStorage.getItem('og_image') || 'https://s3.ca-central-1.amazonaws.com/communiti-dev/public/images/Hosts/1024/banner-photo-337.png?v=1731258502914';

    // Update the meta tags if they exist in the DOM
    const ogTitleMetaTag = document.querySelector('meta[property="og:title"]');
    const ogImageMetaTag = document.querySelector('meta[property="og:image"]');

    if (ogTitleMetaTag) {
      ogTitleMetaTag.setAttribute('content', ogTitle);
    }
    if (ogImageMetaTag) {
      ogImageMetaTag.setAttribute('content', ogImage);
    }
  }, []); 
  return (
    <div>
       <Helmet title='Iyyappan Dud' meta={[{ property: 'og:title', content: "Iyyappan Test 1" },]}>

     
      </Helmet>
      <h1>About Page Test 2ss</h1>
    </div>
  );
};

export default About;
