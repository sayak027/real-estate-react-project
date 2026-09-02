import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'motion/react';

const Testimonials = () => {
  return (
    <motion.div 
      initial = {{opacity:0, x:100}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}

      id='Testimonials' className='container mx-auto w-full overflow-hidden py-10 lg:px-32'>
        <h1 className='text-2xl sm:text-4xl font-bold text-center mb-2'>Customer 
            <span className='underline underline-offset-4 under decoration-1 font-light'> Testimonials</span>
        </h1>
        <p className='text-center text-gray-500 max-w-80 mb-12 mx-auto'>Real Stories from Those Who Found Home with Us</p>


        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonial, index) => (
                <div key={index} className='max-w-85 border border-gray-200 shadow-lg rounded px-8 py-12 text-center'>
                    <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt}></img>
                    <h2 className='text-gray-700 font-medium text-lg'>{testimonial.name}</h2>
                    <p className='text-sm mb-4 text-gray-500'>{testimonial.title}</p>

                    <div className='flex justify-center gap-1 mb-4'>
                        {Array.from({length: testimonial.rating}, (item, index) => (
                            <img key={index} src={assets.star_icon} alt=''></img>
                        ))}
                    </div>

                    <p className='text-gray-600'>{testimonial.text}</p>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials;