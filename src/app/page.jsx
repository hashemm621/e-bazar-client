import React from 'react';
import Banner from './components/Banner';
import MemberShip from './components/MemberShip';
import FeaturedOwner from './components/FeaturedOwner';
import AboutUs from './components/AboutUs';

function page(props) {
  return (
    <div>
      <Banner/>
      <MemberShip/>
      <FeaturedOwner/>
      <AboutUs/>
      
    </div>
  );
}

export default page;
