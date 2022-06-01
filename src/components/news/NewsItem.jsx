import React from 'react'
import './newsitem.css'

const NewsItem = ({ title, url, image, source }) => {
  return (
    <div className='news__item__container'>
        <div className='news__item'>
          <a href={url} target="_blank">
            <img src={image} alt={title} className='news__img' />
          </a>

          <a href={url} target="_blank">
            <h3 className='news__title'>{title}</h3>
          </a>
            <p className="news__source">{source}</p>
        </div>
    </div>
  )
}

export default NewsItem