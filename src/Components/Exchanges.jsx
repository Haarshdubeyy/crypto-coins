import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'

const Exchanges = () => {
    const [ exchanges,setExchanges] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    useEffect(()=>{
         
        const fetchExchanges = async () =>{
            try{
                const {data} = await axios.get(`${server}/exchanges`);
               
            setExchanges(data);

            setLoading(false)
            }
            catch(error){
                    setError(true)
                setLoading(false)
            }
        }
           fetchExchanges()
                
    }, [])
      
    if(error) 
    return <ErrorComponent/>

  return (
       <div className='w-full'>
            {loading? <Loader/> : <>

                  <div className='flex flex-wrap justify-evenly'>
                        {   
                            exchanges.map((i)=>(
                                <ExchangeCard 
                                key={i.id}
                                name={i.name}
                                img={i.image}
                                rank={i.trust_score_rank}
                                url={i.url}/>
                       
                            ))
                        }

                  </div>


            </>}
       </div>

  )
  
}
const ExchangeCard = ({name,img,rank,url}) => (
<a href={url} target={"blank"}>

    <div className= 'm-4 shadow-lg p-8 border-radius-10 hover:scale-105 ease-in-out duration-300 pl-8'>
        <img src={img}
         alt="Exchanges"
         className='h-[90px] w-[90px]' />
        <h1 className='text-xl font-mono'>{rank}</h1>

        <p>{name}</p>
    </div>
</a>
)
export default Exchanges
