import React from 'react'

function Seameraffect() {
    const arrayData = new Array(30).fill("")
  return (
    <div className="flex flex-wrap justify-center flex-row gap-6 mt-10 mb-10 p-5">  

        {
            arrayData.map((element, id)=>(
               

                <div className="lg:w-[400px] md:w-[500px] p-4 w-full border rounded-lg mb-5 shadow-2xl mt-5"key={id} >
                   
                  <div className="block lg:relative h-48 rounded lg:overflow-hidden">
                    
                  <div className="w-full h-[200px] bg-[#ccc]"></div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font rounded mb-1 bg[#ccc] w-[120px] h-5 bg-[#ccc]"></h3>
                    <div className="flex justify-between">
                      <h2 className="text-gray-900 title-font text-sm md:text-lg font-medium rounded w-[120px] h-5 bg-[#ccc] mt-2"></h2>
                        <button className="hover:scale-110 duration-300 text-white border rounded-full p-2 text-sm md:text-lg cursor w-[100px] h-10 bg-[#ccc]"></button>
                    </div>
                    <div className="bg-blue-200 w-10 rounded">
                    <h3 className="text-center rounded w-[60px] h-5 bg-[#ccc]"></h3>
                    </div>
                    <p className="mt-2 w-[120px] h-5 bg-[#ccc] rounded"></p>
                  </div>
                </div>

            ))
        }
        
    </div>
  )
}

export default Seameraffect