


import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';
import axios from 'axios';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest', {
          params: { from, to: Object.keys(exchangeRates).join(',') },
          headers: {
            'X-RapidAPI-Key': 'd57450a688mshe8597e58fc0648cp1edee2jsn3ac088d07b7f',
            'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
          },
        });

        setExchangeRates(response.data.rates);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, [from, to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    const isValidAmount = !isNaN(amount) && parseFloat(amount) >= 0;

   
    if (isValidAmount && exchangeRates[to] !== undefined && exchangeRates[from] !== undefined) {
      const baseAmount = from === 'USD' ? amount : amount / exchangeRates[from];
      const result = (baseAmount * exchangeRates[to]).toFixed(2);
      setConvertedAmount(result)
    } else {
    
      setConvertedAmount(0);
    }
  };
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('https://images.pexels.com/photos/14907338/pexels-photo-14907338.jpeg?auto=compress&cs=tinysrgb&w=400')` }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={Object.keys(exchangeRates)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={Object.keys(exchangeRates)}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
          {loading && <p className="mt-4 text-center text-gray-500">Loading exchange rates...</p>}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;