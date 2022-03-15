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
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem et dicta adipisci deserunt, libero similique aspernatur? Exercitationem at, dolorum quasi iste numquam similique eius ullam error accusamus natus in alias.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About