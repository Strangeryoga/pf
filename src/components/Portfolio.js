import React from 'react'

// import components
import Projects from '../components/Projects'

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] 
            before:-left-3/4
            before:hidden before:lg:block'>
                My Latest Work
            </h2>
            <p className='subtitle'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolor error vero commodi voluptatibus est aperiam officiis, reprehenderit quibusdam quidem 
            </p>
        </div>
        <Projects/>
      </div>
    </section>
  )
}

export default Portfolio
