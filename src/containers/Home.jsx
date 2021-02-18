import React from 'react';
import Banner from '../components/articles/Banner';
import TittleArticle from '../components/articles/TittleArticle';
import News from '../components/newsletters/News';

const Home = () => (
  <section className="home">
    <section className="home__article">
      <Banner />
      <TittleArticle />
    </section>

    <section className="home__new">
      <News />
      <News />
      <News />
      <News />
    </section>
  </section>
);

export default Home;
