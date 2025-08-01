import React from 'react'
import Img from "../assets/notes.jpg"

const Recent_publications = () => {
  return (


    <div className="container mx-auto">
      <div className='text-center'>
      <h1>Recent Publications</h1>
            <div className="menu-part gap-x-[30px]">
                <div className="menu rounded-[20px] p-5 text-left sm:mb-[20px]">
                        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row mb-6">

                        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3">
                        <img src={Img} alt="Publication" className="w-full h-full object-cover rounded" />
                        </div>
                        <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 p-4 bg-gray-100">
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil, quisquam aperiam sunt minus illo 
                            rerum blanditiis similique placeat ullam asperiores? Cum tempore ipsum libero, esse quod at voluptatibus! 
                            At rerum consectetur debitis alias minima doloribus esse eligendi voluptatibus modi, nihil sunt aperiam magni 
                            laboriosam est autem exercitationem eius.
                        </p>
                        </div>

                        </div>
                    
                </div>

              

                
            </div>

      </div>

        </div>
    
    // <div>
    //   <h1>Recent Publications</h1>
    // </div>
  )
}

export default Recent_publications
