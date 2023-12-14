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
            In my recent web development projects, I proficiently utilized HTML, CSS, and JavaScript for the frontend, adopting the MERN stack (MongoDB, Express.js, React, Node.js) for a dynamic user interface. For backend functionality, I employed both Java and Spring Boot, ensuring robust server-side operations. These projects showcase my versatility in combining MERN and Java technologies for comprehensive full-stack development.
            </p>
        </div>
        <Projects/>
      </div>
    </section>
  )
}

export default Portfolio
