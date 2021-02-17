import React from 'react'

const Search = () => (
  <div className='search'>
    <button type='button' className='search__button'>
      <i className="fas fa-search-plus" />
    </button>
    <input type='text' placeholder='¿Que estas buscando?' className='search__box' />
  </div>
)

export default Search
