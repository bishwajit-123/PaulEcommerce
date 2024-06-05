import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Seameraffect from './Seameraffect';

function Allproducts({ AddToCart }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [everyproducts, setEveryProducts] = useState([]);
  const [makingtrue, setMakingtrue] = useState(false);
  const [selectproducts, setSelectproducts] = useState("");
  const [addedToCart, setAddedToCart] = useState({}); // Track added items for each category
  const [searchproducts, setSearchProducts] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // This is what reflecting in the starting of AllProducts 30 items
  useEffect(() => {
    const maxproducts = async () => {
      try {
        const res = await axios("https://dummyjson.com/products")
        setEveryProducts(res.data.products)
      } catch (error) {
        console.log(error)
      }
    };
    maxproducts();
  }, []);


  // This items are list of filter by categories 20 items
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/category-list");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const filterProducts = (items) => {
    setSelectproducts(items);
    setMakingtrue(true);
  }

  // This is 5 items wala 
  useEffect(() => {
    const allcategories = async () => {
      try {
        if (selectproducts) {
          const res = await axios(`https://dummyjson.com/products/category/${selectproducts}`);
          setCategories(res.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    allcategories();
  }, [selectproducts]);

//Reloading data after pressing backspace for 30 items
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("https://dummyjson.com/products");
        setEveryProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchproducts === "") {
      fetchData();
    }
  }, [searchproducts]);

  // Reloading data for 5 items

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(`https://dummyjson.com/products/category/${selectproducts}`);
        setCategories(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchproducts === "") {
      fetchData();
    }
  }, [searchproducts]);

  // Add to bag wala 
  const handleAddToCart = (item) => {
    AddToCart(item);
    setAddedToCart(prevState => ({...prevState,[item.id]: true }));
    toast.success("product Added to cart")
  };

  const handleGoToBag = () => {
    console.log("Navigating to Bag...");
  };

  
  // Changing while clicking on search products
  const handlebutton = () => {
    const searchitems = everyproducts.filter((searcheverything)=>
      searcheverything.title.toLowerCase().includes(searchproducts.toLowerCase())
    );
    setEveryProducts(searchitems);
    
    const searchitem = categories.filter((searcheverythings)=>(
      searcheverythings.title.toLowerCase().includes(searchproducts.toLowerCase())
    ))
    setCategories(searchitem)
  }

  // Changing min and max price 

  const handlePriceChange = () => {
    let min = parseFloat(minPrice);
    let max = parseFloat(maxPrice);

    const pricechange = everyproducts.filter((searchprice)=>(
      (!min || searchprice.price >=min) && (!max || searchprice.price <=max)
    ))
    setEveryProducts(pricechange);

    const pricechanges = categories.filter((searchprice)=>(
      (!min || searchprice.price >=min) && (!max || searchprice.price <=max)
    ))
    setCategories(pricechanges);
  }

  return (
    <> 
      <div className="py-5">
        <div className="flex justify-center">
          <select className="rounded-full bg-[#EED3D9] p-1" onChange={(e) => filterProducts(e.target.value)}>
            <option>&#x25BC; Filter categories</option>
            {products.map((items, id) => (
              <option value={items} key={id}>
                {items}
              </option>
            ))}
          </select>
        </div>
        <div className='flex justify-center items-center gap-2 mt-4 '>
          <input placeholder="search products... " className='p-5 rounded-full w-50 md:w-[500px] h-7 text-center border-3 bg-[#EED3D9] ' onChange={(e)=> setSearchProducts(e.target.value)} value={searchproducts}></input>
          <button className='bg-[#86A7FC] text-white rounded-full p-1 w-20 text-center cursor-pointer' onClick={handlebutton}>Search</button>
        </div>

        <div className='flex justify-center gap-4 py-5'>
          <div>
            <input placeholder = "max price" className="shadow-2xl p-1 w-20 md:w-[100px] text-center bg-[#EED3D9] rounded-full"  onChange={(e)=> setMaxPrice(e.target.value)} />
          </div>
          <div>
            <input placeholder = "min price" className="shadow-2xl p-1 w-20  md:w-[100px] text-center bg-[#EED3D9] rounded-full"  onChange={(e)=> setMinPrice(e.target.value)} />
          </div>
          <div className=" bg-[#86A7FC] rounded-full">
            <h1 className="w-25 md:w-30 cursor-pointer text-white  p-1 text-center" onClick = {handlePriceChange}>Filter by price</h1> 
          </div>
        </div>
      </div>

      {makingtrue ? (
        <section className="flex flex-wrap justify-center flex-row gap-6 mb-10 p-5">
          {categories.length === 0 ? (
            <div className="text-center text-gray-500">No match found</div>
          ) : (
            categories.map((allProducts, index) => (
              <div className="lg:w-[500px] md:w-[500px] p-4 w-full border rounded-lg mb-5 shadow-2xl mt-5" style={{ backgroundImage: `url(${"https://images.pexels.com/photos/7130497/pexels-photo-7130497.jpeg?auto=compress&cs=tinysrgb&w=600"})`, backgroundSize: 'cover', backgroundPosition: 'center' }} key={index}>
                <a className="block lg:relative h-48 rounded lg:overflow-hidden">
                  <Link to={`/singleproducts/${allProducts.id}`}><img alt="ecommerce" className="object-cover object-center w-full h-full block" src={allProducts.thumbnail} /></Link>  
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{allProducts.category}</h3>
                  <div className="flex justify-between">
                    <h2 className="text-gray-900 title-font text-sm md:text-lg font-medium">{allProducts.title}</h2>
                    {addedToCart[allProducts.id] ? (
                      <button className="hover:scale-110 duration-300 bg-[#647D87] text-white border rounded-full  p-2 text-sm md:text-lg cursor" onClick={() => handleGoToBag()}>Go to Bag &#8594;</button>
                    ) : (
                      <button className="hover:scale-110 duration-300 bg-[#647D87] text-white border rounded-full p-2 text-sm md:text-lg cursor" onClick={() => handleAddToCart(allProducts)}>Add to cart</button>
                    )}
                  </div>
                  <div className="bg-blue-200 w-10 rounded">
                    <h3 className="text-center">{allProducts.rating}</h3>
                  </div>
                  <p className="mt-1">Price: $ {allProducts.price}</p>
                </div>
              </div>
            ))
          )}
        </section>
      ) : (
        <section className="flex flex-wrap justify-center flex-row gap-6 mb-10 p-5">
          {everyproducts.length === 0 ? (
            <div className="text-center text-gray-500">No match found</div>
          ) : (
            everyproducts.map((maxitems, index) => (
              <div className="lg:w-[500px] md:w-[500px] p-4 w-full border rounded-lg mb-5 shadow-2xl mt-5" style={{ backgroundImage: `url(${"https://images.pexels.com/photos/7130497/pexels-photo-7130497.jpeg?auto=compress&cs=tinysrgb&w=600"})`, backgroundSize: 'cover', backgroundPosition: 'center' }} key={index}>
                <a className="block lg:relative h-48 rounded lg:overflow-hidden">
                  <Link to={`/singleproducts/${maxitems.id}`}><img alt="ecommerce" className="object-cover object-center w-full h-full block" src={maxitems.thumbnail} /></Link>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{maxitems.category}</h3>
                  <div className="flex justify-between">
                    <h2 className="text-gray-900 title-font text-sm md:text-lg font-medium">{maxitems.title}</h2>
                    {addedToCart[maxitems.id] ? (
                      <button className="hover:scale-110 duration-300 bg-[#647D87] text-white border rounded-full p-2 text-sm md:text-lg cursor" onClick={() => handleGoToBag()}>Go to Bag &#8594;</button>
                    ) : (
                      <button className="hover:scale-110 duration-300 bg-[#647D87] text-white border rounded-full p-2 text-sm md:text-lg cursor" onClick={() => handleAddToCart(maxitems)}>Add to cart</button>
                    )}
                  </div>
                  <div className="bg-blue-200 w-10 rounded">
                    <h3 className="text-center">{maxitems.rating}</h3>
                  </div>
                  <p className="mt-1">Price: $ {maxitems.price}</p>
                </div>
              </div>
            ))
          )}
        </section>
      )}
      <Footer></Footer>
    </>
  )
}

export default Allproducts;
