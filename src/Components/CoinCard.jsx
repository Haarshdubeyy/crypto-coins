import React from 'react';

import { Link } from 'react-router-dom';

const CoinCard = ({ id, name, img, coinSymbol, price, currencySymbol = '₹' }) => {
  return (
    <Link to={`/coin/${id}`}>
      <div className='m-4 shadow-lg p-8 border-radius-10 hover:scale-105 ease-in-out duration-300 pl-8'>
        <img src={img} alt="Coin logo" aria-label={`Logo of ${name}`} className='h-[90px] w-[90px]' />
        <h1 className='text-xl font-mono'>{coinSymbol}</h1>
        <p>{name}</p>
        <p>{price && `${currencySymbol}${price}`}</p>
      </div>
    </Link>
  );
};

export default CoinCard;
