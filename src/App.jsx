import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Cars from './components/Cars';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Testemonial from './components/Testemonial';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='max-w-[1920px]  relative overflow-hidden bg-white mx-auto '>
      <Header />
      <Hero />
      <Cars />
      <About />
      <WhyUs />
      <Testemonial />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
