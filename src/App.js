import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Coins from './Components/Coins'
import CoinDetails from './Components/CoinDetails'
import Exchanges from './Components/Exchanges'
import CurrencyConverter from './Components/CurrencyConverter'
import News from './Components/News'
import Footer from './Components/Footer'
function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
          <Route path="/News" element={<News/>}/>
           
          
        </Routes>

        <Footer/>
      </Router>
  );
}

export default App;
