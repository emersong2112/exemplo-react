import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'
import './style.scss'
const Back = () => {
  return (
    <a href='#' className='back'>
      <MdOutlineArrowBack size={16} />
      <span>VOLTAR</span>
      </a>
  )
}

export default Back
