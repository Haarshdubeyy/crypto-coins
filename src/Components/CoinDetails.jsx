import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import axios from 'axios';
import { server } from '../index';
import { useParams } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import upArrow from '../Assets/Up.png';
import downArrow from '../Assets/Down.png';
import Chart from './Chart';

const CoinDetails = () => {
  const [Coin, setCoin] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState('inr');
  const [days, setDays] = useState('24');
  const [chartArray, setchartArray] = useState([]);

  const btns = ['24h', '7d', '14d', '30d', '60d', '200d', '365d', 'max'];

  const switchChartStats = (key) => {
    switch (key) {
      case '24h':
        setDays('24h');
        setLoading(true);
        break;
      case '7d':
        setDays('7d');
        setLoading(true);
        break;
      case '14d':
        setDays(14);
        setLoading(true);
        break;
      case '30d':
        setDays(30);
        setLoading(true);
        break;
      case '60d':
        setDays(60);
        setLoading(true);
        break;
      case '200d':
        setDays(200);
        setLoading(true);
        break;
      case '1y':
        setDays(365);
        setLoading(true);
        break;
      case 'max':
        setDays('max');
        setLoading(true);
        break;
    }
  };

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );

        setCoin(data);
        setchartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  if (error) return <ErrorComponent message={'Error While Fetching Coin'} />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {loading ? (
        <Loader />
      ) : (
        <>
          <box className="w-full text-center">
            <Chart arr={chartArray} currency={'inr'} days={days} />
          </box>

          <div className="flex justify-center overflow-x-auto sm:justify-start">
            {btns.map((btn) => (
              <button
                key={btn}
                onClick={() => switchChartStats(btn)}
                className="text-sm p-2 m-2 bg-gray-200 sm:m-1"
              >
                {btn}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-xl font-mono opacity-40 text-center sm:text-base">
              last Updated on {Date(Coin.last_updated).split('G')[0]}
            </p>

            <img
              src={Coin.image.large}
              alt="coin"
              className="w-20 h-20 mx-auto object-contain sm:w-16 sm:h-16"
            />

            <div>
              <div>
                <h1 className="text-3xl font-mono font-bold sm:text-2xl">
                  {Coin.name}
                </h1>
                <p className="text-xl font-mono sm:text-lg">({Coin.symbol})</p>
                <p className="text-2xl font-mono font-bold sm:text-xl">
                  ₹{Coin.market_data.current_price.inr}
                </p>
                <div>
                  <p
                    type={
                      Coin.market_data.market_cap_change_percentage_24h_in_currency.inr > 0 ? (
                        <img
                          src={upArrow}
                          alt="up arrow"
                          className="w-10 h-10 object-contain sm:w-8 sm:h-8"
                        />
                      ) : (
                        <img
                          src={downArrow}
                          alt="down arrow"
                          className="w-10 h-10 object-contain sm:w-8 sm:h-8"
                        />
                      )
                    }
                  >
                    {Coin.market_data.market_cap_change_percentage_24h_in_currency.inr}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-2xl bg-black text-white sm:text-xl">
              {`Rank #${Coin.market_cap_rank}`}
            </div>

            <CustomBar
              high={`${Coin.market_data.high_24h.inr}`}
              low={`${Coin.market_data.low_24h.inr}`}
              range={
                Coin.market_data.market_cap_change_percentage_24h_in_currency.inr > 0
                  ? 'up'
                  : 'down'
              }
            />

            <box className="w-full text-center p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Item
                title={'Max Supply'}
                value={Coin.market_data.max_supply}
              ></Item>
              <Item
                title={'Circulating Supply'}
                value={Coin.market_data.circulating_supply}
              ></Item>
              <Item
                title={'Total Supply'}
                value={Coin.market_data.total_supply}
              ></Item>
              <Item
                title={'Market Rank'}
                value={Coin.market_data.market_cap_rank}
              ></Item>
              <Item
                title={'Market Cap'}
                value={`₹${Coin.market_data.market_cap['inr']}`}
              ></Item>
              <Item
                title={'All Time High'}
                value={`₹${Coin.market_data.ath['inr']}`}
              ></Item>
              <Item
                title={'All Time Low'}
                value={`₹${Coin.market_data.atl['inr']}`}
              ></Item>
            </box>
          </div>
        </>
      )}
    </div>
  );
};

const Item = ({ title, value }) => (
  <div className="flex flex-col justify-center items-center bg-gray-100 p-4 rounded-lg">
    <p className="text-xl font-mono sm:text-base mb-2">{title}</p>
    <p className="text-xl font-mono sm:text-base">{value}</p>
  </div>
);

const CustomBar = ({ high, low, range }) => {
  return (
    <div className="w-full flex justify-between p-4 bg-gray-200 sm:flex-col sm:items-center">
      <div className="text-center sm:mb-2">
        <p className="text-sm text-gray-500">Low</p>
        <p className="text-lg bg-red-800 rounded-lg pl-1 pr-1 sm:text-base">
          {low}
        </p>
      </div>

      <div className="text-center sm:mb-2">
        <p className="text-sm text-gray-500">24Hr Range</p>
        <div className="text-2xl text-green-500 sm:text-xl">
          {range === 'up' ? (
            <img
              src={upArrow}
              alt="up arrow"
              className="w-10 h-10 object-contain sm:w-8 sm:h-8"
            />
          ) : range === 'down' ? (
            <img
              src={downArrow}
              alt="down arrow"
              className="w-10 h-10 object-contain sm:w-8 sm:h-8"
            />
          ) : null}
        </div>
      </div>

      <div className="text-center sm:mb-2">
        <p className="text-sm text-gray-500">High</p>
        <p className="text-lg bg-green-600 rounded-lg pl-1 pr-1 sm:text-base">
          {high}
        </p>
      </div>
    </div>
  );
};

export default CoinDetails;