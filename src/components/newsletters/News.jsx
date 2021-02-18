import React from 'react'
import TittleCard from './TittleCard';
import ImagenCard from './ImagenCard';
import AutorCard from './AutorCard';
import IconsCard from './IconsCard';

const News = () => (
  <div className='card'>
    <div>
      <ImagenCard />
    </div>
    <div>
      <TittleCard />
      <AutorCard />
      <IconsCard />
    </div>
  </div>
)

export default News;
