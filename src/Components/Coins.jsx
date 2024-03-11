import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'
import CoinCard from './CoinCard'




const Coins = () => {
    const [ Coins,setCoins] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [page,setPage] = useState(1)
    const [currency,setCurrency] = useState("inr")
      

    const currencySymbol = currency==="inr" ? "₹" : currency==="eur" ? "€" : "$"


    const changePage = (page)=>{
       setPage(page);
       setLoading(true)
    }
        
    useEffect(() => {
        const fetchCoins = async () => {
          try {
            const { data } = await axios.get(
              `${server}/coins/markets?vs_currency=${currency}&page=${page}`
            );
            setCoins(data);
            setLoading(false);
          } catch (error) {
            setError(true);
            setLoading(false);
          }
        };
        fetchCoins();
      }, [currency, page]);

      
    if(error) 
    return <ErrorComponent message={'Error While Fetching Coin'} />

  return (
   
       <div className='bg-gray-100'>
            {loading? <Loader/> : <>      
                  <div className='flex flex-wrap justify-evenly'>
                        {   
                            Coins.map((i)=>(
                                <CoinCard
                                id={i.id}
                                key={i.id}
                                name={i.name}
                                price={i.current_price}
                                img={i.image}
                                symbol={i.symbol}
                                currencySymbol={currencySymbol}
                                />
                       
                            ))
                        }

                  </div>

                  <div className='flex justify-center'>
                  <button
                     className=' h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800' 
                     onClick={()=>changePage(1)}>1</button>


                    <button
                     className=' h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800' 
                     onClick={()=>changePage(2)}>2</button>

                     <button
                     className=' h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800' 
                     onClick={()=>changePage(3)}>3</button>

                     <button
                     className=' h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800' 
                     onClick={()=>changePage(4)}>4</button>

                     <button
                     className=' h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800' 
                     onClick={()=>changePage(5)}>4</button>


                      
                  </div>

                  


            </>}
       </div>

  )
  
}

export default Coins
