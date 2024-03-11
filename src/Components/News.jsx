// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const News = () => {
//   const [news, setNews] = useState([]);
//   const [error, setError] = useState(null); 

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=83488655236d44b695af7143fb388485');
//         setNews(response.data.articles); 
//       } catch (error) {
//         setError(error);
//         console.error('Error fetching news:', error); 
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className='container mx-auto  p-4'>
//       <h2 className='text-3xl font-bold text-center font-mono bg-red-600'>LATEST NEWS</h2>
//       {error ? (
//         <p>Error fetching news: {error.message}</p>
//       ) : news.length === 0 ? (
//         <p>Loading news...</p>
//       ) : (
//         <ul>
//           {news.map((article) => (
//             <li
//               className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100 rounded-lg shadow-lg'
//               key={article.urlToImage}
//             >
//               <a href={article.url} target="_blank" rel="noreferrer">
//                 <img
//                   className='w-1/2 h-full object-cover'
//                   src={article.urlToImage}
//                   alt={article.title}
//                 />
//               </a>
//               <div className="flex flex-col">  
//                 <h2 className='text-xl font-bold'>{article.title}</h2>
//                 <p className='text-lg'>{article.description}</p>  
//               </div>
//               <p className='text-lg flex-row-reverse font-mono'>{article.publishedAt}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default News;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=83488655236d44b695af7143fb388485');
      setNews(response.data.articles);
    } catch (error) {
      setError(error);
      console.error('Error fetching news:', error);
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
          {news.map((article) => (
            <li
              className='p-4 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105'
              key={article.urlToImage}
            >
              <a href={article.url} target='_blank' rel='noreferrer'>
                <img
                  className='w-full h-48 object-cover mb-4'
                  src={article.urlToImage}
                  alt={article.title}
                />
              </a>
              <div className='flex flex-col'>
                <h2 className='text-xl font-bold'>{article.title}</h2>
                <p className='text-gray-600 text-lg mb-2'>{article.description}</p>
                <a
                  className='text-blue-500 hover:underline self-end'
                  href={article.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  Read more
                </a>
              </div>
              <p className='text-gray-600 text-sm mt-2 self-end'>
                {moment(article.publishedAt).fromNow()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
