import React from 'react';
import Banner from '../components/articles/Banner';
import News from '../components/newsletters/News';

const Home = () => (
  <section className='home'>
    <Banner />
    <section className='home__new'>
      <News />
      <News />
      <News />
      <News />
    </section>
   

  </section>
);

export default Home;
