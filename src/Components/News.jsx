

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    const options = {
      url:'https://newsdata.io/api/1/news?apikey=pub_39430033698e7c829562a5d5e495e74ea663f&q=pizza'

    };

        
      
    try {
      const response = await axios.request(options);
      console.log(response.data.results);
      setNews(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className='container mx-auto p-4 bg-slate-900'>
      <h2 className='text-3xl font-bold text-center font-mono rounded-xl bg-blue-700 text-white p-2'>
        LATEST NEWS
      </h2>

      {error ? (
        <div className='text-red-500'>
          <p>Error fetching news: {error.message}</p>
          <button className='mt-2 text-blue-500 underline' onClick={fetchNews}>
            Retry
          </button>
        </div>
      ) : news.length === 0 ? (
        <p className='text-center'>Loading news...</p>
      ) : (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {news.map((news) => (
            <li
              className='p-4 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105'
              key={news.Image}
            >
              <a href={news.link} target='_blank' rel='noreferrer'>
                <img
                  className='w-full h-48 object-cover mb-4'
                  src={news.image_url}
                  alt={news.title}
                />
              </a>
              <div className='flex flex-col'>
                <h2 className='text-xl font-bold'>{news.title}</h2>
                <p className='text-gray-600 text-lg mb-2'>{news.description}</p>
                <a
                  className='text-blue-500 hover:underline self-end'
                  href={news.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  Read more
                </a>
              </div>
              <p className='text-gray-600 text-sm mt-2 self-end'>
                {moment(news.pubDate).fromNow()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;

