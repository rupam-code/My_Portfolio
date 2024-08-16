import React from 'react'

import java from "../../public/Images/Java.jpeg"
import python from "../../public/Images/Python.png"
import react from "../../public/Images/React image.png"
import c from "../../public/Images/C lan.png"
import cad from "../../public/Images/C ++.jpg"
import html from "../../public/Images/html.png"
import tail from "../../public/Images/Tail.png"
import js from "../../public/Images/JavaScript.png"

export default function Skills() {
    const cardItem= [
        {
        id:1 ,
        logo:java,
        name:"Java"
        },
        {
            id:2 ,
            logo:python,
            name:"Python"
            },
            {
                id:3 ,
                logo:react,
                name:"React"
                },
                {
                    id:4 ,
                    logo:html,
                    name:"HTML"
                    },
                    {
                        id:5 ,
                        logo:js,
                        name:"JavaScript"
                        },
                        {
                            id:6 ,
                            logo:c,
                            name:"C Language"
                            },
                            {
                                id:7 ,
                                logo:cad,
                                name:"C++"
                                },
                                {
                                    id:8 ,
                                    logo:tail,
                                    name:"Tailwind"
                                    },
                
        
    ]
  return (
    <>
     <div
      name="Language Known"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Language Known</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center md:w-[200px] md:h-[200px] border-[2px]  rounded-full shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full "
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
               
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  )
}
