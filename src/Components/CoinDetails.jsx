import React from 'react'
import { useState, useEffect } from 'react'
import Loader from './Loader'
import axios from 'axios'
import { server } from '../index'
import { useParams } from 'react-router-dom'
import ErrorComponent from './ErrorComponent'
import upArrow from '../Assets/Up.png'
import downArrow from '../Assets/Down.png'
import Chart from './Chart'








const CoinDetails = () => {

  const [ Coin,setCoin] = useState([])
  const params = useParams();
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(false)
  const [page,setPage] = useState(1)
  const [currency,setCurrency] = useState("inr");
  const [days,setDays] = useState("24");
  const [chartArray,setchartArray] = useState([]);

 const btns =["24h","7d","14d","30d","60d","200d","365d","max"];

 const switchChartStats = (key)=>{
   switch(key){
case "24h":
       setDays("24h");
       setLoading(true);
 break;
     case "7d":
      setDays("7d");
      setLoading(true)
       break;
     case "14d":
       setDays(14)
       setLoading(true)
       break;
     case "30d":
       setDays(30)
       setLoading(true)
       break;
     case "60d":
       setDays(60)
       setLoading(true)
       break;
     case "200d":
       setDays(200)
       setLoading(true)
       break;
     case "1y":
       setDays(365)
       setLoading(true)
       break;
     case "max":
       setDays("max")
       setLoading(true)
       break;
   }  
 }

 

  useEffect(()=>{
         
    const fetchCoin = async () =>{
        try{
            const {data} = await axios.get(`${server}/coins/${params.id}`);
             
          const {data:chartData} = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${"inr"}&days=${days}`);


            setCoin(data);
            setchartArray(chartData.prices)
        setLoading(false)
        }
        catch(error){
                setError(true)
            setLoading(false)
        }
    }
    fetchCoin()
            
}, [params.id,currency,days])


 
if(error) 
return <ErrorComponent message={'Error While Fetching Coin'} />;

  return (

    <div className='max-w-xl mx-auto'>
       {
        loading?<Loader />:(
          <>
          <box className='w-full text-center'>
          <Chart arr ={chartArray} currency={"inr"} days={days}/>
          </box>    

        <div className='p-4 justify-center flex overflow-auto'>
             {
              btns.map((btn)=>{
                return <button key={btn} onClick={()=>switchChartStats(btn)} className='text-sm p-2 m-2 bg-gray-200'>{btn}</button>
              })
             }
        </div>


  
     {/* <RadioGroup value={currency}
      onChange={setCurrency}
        className='p-8 bg-gray-100'>
 </RadioGroup> */}

      <div className='space-y-2 '>
       <p className='text-xl font-mono opacity-40 text-center'>last Updated on {Date(Coin.last_updated).split("G")[0]}</p>

       <img src={Coin.image.large} alt="coin"
       className='w-20 h-20 mx-auto object-contain' />
      
          <div>
           <div>
             <h1 className='text-3xl font-mono font-bold'>{Coin.name}</h1>
             <p className='text-xl font-mono'>({Coin.symbol})</p>
             <p className='text-2xl font-mono font-bold'>₹{Coin.market_data.current_price.inr}</p>
                <div>
                      
                    <p type={Coin.market_data.market_cap_change_percentage_24h_in_currency.inr > 0 ? (
                     <img src= {upArrow} alt="up arrow" className='w-10 h-10 object-contain' />) : (
                     <img src={downArrow} alt="down arrow" className='w-10 h-10 object-contain' />
                    )}>
                    {Coin.market_data.market_cap_change_percentage_24h_in_currency.inr}</p>

               
                  
                </div>
           </div>
              
          </div>

          <div className='text-2xl bg-black text-white'>
            {`Rank #${Coin.market_cap_rank}`}
          </div>

          <CustomBar high={`${Coin.market_data.high_24h.inr}`} low={`${Coin.market_data.low_24h.inr}`} range={Coin.market_data.market_cap_change_percentage_24h_in_currency.inr > 0 ? 'up' : 'down'} />
          
          <box className='w-full text-center p-4'> 
            <Item title ={'Max Supply'} value={Coin.market_data.max_supply}></Item>
            <Item title = {'Circulating Supply'} value={Coin.market_data.circulating_supply}></Item>
            <Item title = {'Total Supply'} value={Coin.market_data.total_supply}></Item>
            <Item title = {'Market Rank'} value={Coin.market_data.market_cap_rank}></Item>
            <Item title = {'Market Cap'} value={`₹${Coin.market_data.market_cap["inr"]}`}></Item>
            <Item title = {'All Time High'} value={`₹${Coin.market_data.ath["inr"]}`}></Item>
            <Item title = {'All Time Low'} value={`₹${Coin.market_data.atl["inr"]}`}></Item>

          </box> 
          
    </div>          
          </>
        )
       }
         
    </div>
  )
}


const Item = ({ title, value }) => (
               <div className='flex justify-between w-full my-4'>
                 <p className='text-xl font-mono '>{title}</p>
                 <p className='text-xl font-mono'>{value}</p>
               </div>
);



const CustomBar = ({ high, low, range }) => {
  return (
    <div className='w-full flex justify-between p-4 bg-gray-200'>
      <div className='text-center'>
        <p className='text-sm text-gray-500'>Low</p>
        <p className='text-lg bg-red-800 rounded-lg pl-1 pr-1'>{low}</p>
      </div>

      <div className='text-center'>
        <p className='text-sm text-gray-500'>24Hr Range</p>
        <div className='text-2xl text-green-500'>
          {range === 'up' ? <img src={upArrow} alt="up arrow" className='w-10 h-10 object-contain' /> : range === 'down' ? <img src={downArrow} alt="down arrow" className='w-10 h-10 object-contain' /> : null}
        </div>
      </div>

      <div className='text-center'>
        <p className='text-sm text-gray-500'>High</p>
        <p className='text-lg bg-green-600 rounded-lg pl-1 pr-1'>{high}</p>
      </div>
      
    </div>
      
      
  


  );
}

export default CoinDetails
