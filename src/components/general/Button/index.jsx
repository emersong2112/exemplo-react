import React from 'react'
import './style.scss'
const Button = ({children, to = "#"}) => {
  return (
    <a href={to} className='button'>{children}</a>
  )
}

export default Button
