import React from 'react';
import { CenteredContent, BannerImage } from './HomePage.styled';
import banner from '../images/home.png';

function HomePage() {
  return (
    <CenteredContent>
      <h1 style={{ marginBottom: '100px' }}>
        "Welcome to our car rental service! We take pride in offering you the
        best cars, the most competitive prices, and top-notch service. Our
        mission is to make your journey even more enjoyable and convenient.!"
      </h1>
      <BannerImage src={banner} alt="cars" />
    </CenteredContent>
  );
}

export default HomePage;
