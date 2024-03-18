import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    const options = {
      url: 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json'
    };

    try {
      const response = await axios.request(options);
      setNews(response.data.articles);
      console.log(response.data.articles);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center font-mono rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 mb-8">
        LATEST NEWS
      </h2>

      {error ? (
        <div className="text-red-500 text-center">
          <p>Error fetching news: {error.message}</p>
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={fetchNews}
          >
            Retry
          </button>
        </div>
      ) : news.length === 0 ? (
        <p className="text-center">Loading news...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((newsItem, index) => (
            <li
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <a href={newsItem.link} target="_blank" rel="noreferrer">
                  <img
                    className="w-full h-48 object-cover"
                    src={newsItem.urlToImage}
                    alt={newsItem.title}
                  />
                </a>
                <div className="absolute top-0 left-0 bg-blue-500 text-white font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                  NEWS
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{newsItem.title}</h2>
                <p className="text-gray-300 mb-4">{newsItem.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    className="text-blue-400 hover:underline"
                    href={newsItem.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read more
                  </a>
                  <div className="text-gray-400 font-semibold">
                    {moment(newsItem.pubDate).fromNow()}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
