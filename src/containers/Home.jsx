import React from 'react';
import ArticleContent from '../components/articles/ArticleContent';
import Newslettercontens from '../components/newsletters/Newlettercontens';

const Home = () => (
  <section className="home">
    <section className="home__article">
      <ArticleContent />
    </section>

    <section className="home__new">
      <Newslettercontens />
    </section>
  </section>
);

export default Home;
