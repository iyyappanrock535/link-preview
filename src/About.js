import React, { useEffect } from 'react';
import { MetaTags } from 'react-meta-tags';
import { Helmet } from 'react-helmet';
// import Head from 'next/head';

const About = () => {
 
  return (
    <div>
       <Helmet title='Iyyappan Dud' meta={[{ property: 'og:title', content: "Iyyappan Test 1" },]}>

     
      </Helmet>
      <h1>About Page Test 2dd</h1>
    </div>
  );
};

export default About;
