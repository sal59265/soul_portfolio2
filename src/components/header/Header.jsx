import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Soul Lee</h1>
        <h5 className="text-light">Fullstack Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className='container_header__aboutme'>
          <h5 className='text-left'>A full-stack software engineer with a passion to always grow as a person in a working and social environment and driven by a passion for programming. I am a logical thinker who likes to challenge myself with learning new algorithms, frameworks, and languages, and I enjoy applying new skills to current and future projects to improve efficiency and effectiveness of the deliverable.</h5>
          <div className="me">
          <img src={ME} alt='me'/>
          </div>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header