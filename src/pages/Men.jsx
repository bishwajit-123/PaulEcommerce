import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Men({AddToCart}) {
  const [section, SetSection] = useState([]);
  const [addedToCart, setAddedToCart] = useState({}); 

  useEffect (()=>{
    const updateMen = async () => {
      try{
        const res = await axios ("https://dummyjson.com/products/category/mens-shirts")
        SetSection(res.data.products)
        console.log(res)
      }catch(error){
        console.log(error)
      }
    
    };
    updateMen();
  }, []);

  const handleAddToCart = (item) => {
    AddToCart(item)
    setAddedToCart(prevState => ({...prevState,[item.id]: true // Track the item by its unique id
    }));
  };

  const handleGoToBag = () => {
    // Implement navigation to the bag
    console.log("Navigating to Bag...");
  };
  return (
    <>
       <div className="flex flex-wrap justify-center flex-row gap-4">
          {section.map((menSection, index) => (
            <div className="lg:w-1/3 md:w-[800px] p-4 w-full border rounded-lg mb-5" key={index}>
              <a className="block md:relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={menSection.thumbnail} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{menSection.category}</h3>
                <div className="flex justify-between">
                  <h2 className="text-gray-900 title-font text-sm md:text-lg font-medium">{menSection.title}</h2>
                  {addedToCart[menSection.id] ? (
                    <button className="text-white border rounded-lg bg-blue-500 p-2 text-sm md:text-lg cursor" onClick={() => handleGoToBag()}>Go to Bag &#8594;</button>
                  ) : (
                    <button className="text-white border rounded-lg bg-blue-500 p-2 text-sm md:text-lg cursor" onClick={() => handleAddToCart(menSection)}>Add to cart</button>
                  )}
                </div>
                <p className="mt-1">Price: $ {menSection.price}</p>
              </div>
            </div>
          ))}
        </div>
        </>

    
  )
}

export default Men