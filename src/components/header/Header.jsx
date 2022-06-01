import React from 'react'
import './header.css'
import 'moment-timezone'
import moment from 'moment'

const Header = () => {

  return (
    <div className="container header__container">
      <h1 className='header__title'>Latest News.</h1>
      <h2 className='header__date'>{moment().format('MMMM D, YYYY')}</h2>
    </div>
  )
}

export default Header