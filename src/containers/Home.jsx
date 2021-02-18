import React from 'react';
import Banner from '../components/articles/Banner';
import ContentArticle from '../components/articles/ContentArticle';
import TittleArticle from '../components/articles/TittleArticle';
import News from '../components/newsletters/News';
import Tags from '../components/articles/Tags';

const Home = () => (
  <section className="home">
    <section className="home__article">
      <Banner />

      <TittleArticle />
      <Tags />
      <ContentArticle />
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
