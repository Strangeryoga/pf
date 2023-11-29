import React from 'react'

// import image
import Image from '../assets/img/about.webp'

const About = () => {
  return (
    <section id='about' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
            <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="" />
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                <div className='flex flex-col'>
                    <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                        Tejas Doke
                    </h2>
                    <p className='mb-4 text-cyan-500' >Developer</p>
                    <hr className='mb-8 opacity-5' />
                    <p className='mb-8'>
                    Passionate web developer skilled in full-stack development, specializing in HTML, CSS,JavaScript and ReactJs. Experienced in creating responsive, user-friendly websites with a focus on performance optimization and security. Proficient in API integration and e-commerce solutions. Committed to delivering innovative, visually appealing, and seamless digital experiences.
                    </p>
                </div>
                <button className='btn btn-md bg-cyan-500 hover:bg-cyan-700 transition-all'>
                    Contact Me
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About
