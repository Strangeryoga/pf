import React from 'react'

// imp social data
import { social } from '../data'

// imp logo
import Logo from '../assets/img/reshot-icon-logo-design-7UZWV5ELKT.svg'


const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                {/* sc icons */}
                <div className='flex space-x-6 items-center justify-center'>
                    {social.map((item, index) => {
                        const { href, icon } = item;
                        return (
                            <a className='text-cyan-300 text-base' href={href} key={index}>
                                {icon}
                            </a>
                        )
                    })}
                </div>

                {/* logo */}
                <div>
                    <img src={Logo} alt="" />
                </div>

                {/* copyright */}
                <p>&copy: 2023 Tejas. All rights reserved.</p>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
