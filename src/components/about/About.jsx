import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BiAward} from 'react-icons/bi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt='about image' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>Many Completed</small>
            </article>
          </div>
          <p>
          A full-stack software engineer with a background in biological and dental science. I am a logical
thinker and have a passion for learning new languages to implement into current and future
projects. I pride myself on my dedication to completing my assigned projects while allowing for
growth and change management.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About