import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Type Speed Test',
      github: 'https://github.com/sal59265/type_speed_test',
      demo: 'https://rapid-type-test.surge.sh/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'SnowBook',
      github: 'https://github.com/sal59265/snowbook',
      demo: 'https://snowbook.herokuapp.com/'
    }
  ]
  return (
    <section id = "portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
            <article key={id}className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio