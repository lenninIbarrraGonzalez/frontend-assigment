import React from 'react';
import Banner from '../components/articles/Banner';
import ContentArticle from '../components/articles/ContentArticle';
import TittleArticle from '../components/articles/TittleArticle';
import News from '../components/newsletters/News';
import Tags from '../components/articles/Tags';
import InfoArticles from '../components/articles/InfoArticles';

const Home = () => (
  <section className="home">
    <section className="home__article">
      <Banner />
      <TittleArticle />
      <InfoArticles />
      <Tags />
      <ContentArticle />
    </section>

    <section className="home__new">
      <h3>Noticias relacionadas</h3>
      <News />
      <News />
      <News />
      <News />
    </section>
  </section>
);

export default Home;
