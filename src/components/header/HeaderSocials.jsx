import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/soul-lee/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/sal59265' target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials