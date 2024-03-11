import React from 'react'
import btc from '../Assets/traxer-No9sjMu5zpA-unsplash.jpg'

const Home = () => {
  return (
    <div bg-cover>
      <img src={btc}
      className='w-full h-screen object-cover min-h-48 '
       alt="bitcoin" />
    </div>
  )
}

export default Home
