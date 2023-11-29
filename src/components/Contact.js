import React from 'react'

// import contact data
import { contact } from '../data'

const Contact = () => {
  return (
    <section className='section bg-primary' id='contact'>
        <div className='container mx-auto'>
            {/* title */}
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
                    Contact me
                </h2>
                <p className='subtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, atque! Neque necessitatibus accusantium nostrum odio facere ratione quasi reiciendis repudiandae mollitia </p>
            </div>

            {/* info */}
            {/* <div className='flex flex-1 flex-row items-center space-y-2 ml-64 lg:mb-7 lg:pt-1'>
                {contact.map((item, index) => {
                    const { icon, title, subtitle, description} = item;
                    return (
                        <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                            <div className='text-cyan-500 rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mg-0 text-2xl'>
                                {icon}
                            </div>
                            <div>
                               <h4 className='font-body text-xl mb-1'>{title}</h4> 
                               <p className='mb-1'>{subtitle}</p>
                               <p className='text-cyan-500 font-normal'>{description}</p>
                            </div>
                        </div> 
                    );
                })}
            </div> */}

            {/* form */}
            <div className='flex flex-col items-center text-center'>
            <form className='space-y-8 w-full max-w-[750px]'>
                <div className='flex gap-8'>
                    <input className='input' type="text" placeholder='Your name' />
                    <input className='input' type="text" placeholder='Your email'/>
                </div>
                <input type="text" className="input" placeholder='Subject' />
                <textarea className="textarea" placeholder='Your message'></textarea>
                <button className='btn btn-lg bg-cyan-400 hover:bg-cyan-700'>
                    Send Message
                </button>
            </form>
            </div>

        </div>
      
    </section>
  )
}

export default Contact
