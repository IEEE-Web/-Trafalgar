import React from "react";
import OurServices from './ourServices'

export const Services =()=>{
    return( //our services section 
        <section style={{backgroundImage: "URL('./Images/serviceSvgs/servicesBackground.svg')"}} className='bg-cover'>
              <div className= 'container mx-auto px-24'>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold pb-4'>Our services</h2>
                    <div className='flex justify-center'>
                    <hr className='w-8 border border-black '/>
                    </div>
                    <p className='font-light text-gray-500 px-12 py-6'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                </div>
               {/**services cards  */}
                <OurServices/>
                {/**buttom to learn more about services */}
                <div className='flex justify-center'>
                    <button className='border md:px-10 py-2 m-12 rounded-full font-bold border-blue-500 text-blue-500 cursor-pointer tracking-wider hover:bg-blue-500 hover:text-white transition ease-in-out duration-700'>
                        Learn more
                    </button>
                </div>
                </div>
        </section>
  
    )
}