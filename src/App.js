import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Marketplace from './components/Marketplace/Marketplace';
import Sellers from "./components/Sellers/Sellers";
import NFTDetail from "./components/NFTDetail/NFTDetail";
import SellersDetail from "./components/SellersDetail/SellersDetail";

function App() {
  return (
    <div>
      <Header />

      <Routes>
      <Route path="*" element={<Home/>}>
        </Route>
        <Route path="/front-end-project" element={<Home/>}>
        </Route>
        <Route exact path="/marketplace" element={<Marketplace/>}>
        </Route>
        <Route exact path="/sellers" element={<Sellers/>}>
        </Route>
        <Route exact path="/sellersDetail/:ownerId" element={<SellersDetail/>}>
        </Route>
        <Route exact path="/nftDetail/:nftId" element={<NFTDetail/>}>
        </Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
