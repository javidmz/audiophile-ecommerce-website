import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import HeadPhones from "./components/HeadPhones";
import Speakers from "./components/Speakers";
import EarPhones from "./components/EarPhones";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import ProductDetailed from "./components/ProductDetailed";
import Checkout from "./components/Checkout";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import jsonData from "./data/db.json";


function App() {
  const [data, setData] = useState(false);
  const [item, setItem] = useState(JSON.parse(localStorage.getItem('orders')) || []);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    console.log(JSON.stringify(jsonData))
    setData(JSON.parse(JSON.stringify(jsonData.products)));
  }, []);

  useEffect(() => {
    if(item)
      localStorage.setItem('orders', JSON.stringify(item));
  }, [item]);


  return (
        <div className="App">
        
        <div className="message-container">
                <Toaster position="top-left" toastOptions={ { style: {maxWidth: 500, minWidth: 200} } }/>
        </div>

        { data &&
          <>
            <NavBar props={data} item={item} setItem={setItem} isVisible={isVisible} setIsVisible={setIsVisible} mobileNav={mobileNav} setMobileNav={setMobileNav} />
            <Routes>
              <Route index path="/" element={<Home props={data} setMobileNav={setMobileNav} />} />
              <Route path="/headphones" element={<HeadPhones props={[data[1], data[2], data[3]]} setMobileNav={setMobileNav} />} />
              <Route path="/headphones/:id" element={<ProductDetailed props={data} item={item} setItem={setItem} />} />
              <Route path="/speakers" element={<Speakers props={[data[5], data[4]]} setMobileNav={setMobileNav} />} />
              <Route path="/speakers/:id" element={<ProductDetailed props={data} item={item} setItem={setItem} />} />
              <Route path="/earphones" element={<EarPhones props={[data[0]]} setMobileNav={setMobileNav} />} />
              <Route path="/earphones/:id" element={<ProductDetailed props={data} item={item} setItem={setItem} />} />
              <Route path="/checkout" element={<Checkout item={item} data={data} />} />
              <Route path="*" element={<NotFound />} />
            </Routes> 
            <Footer />
          </>  
        }
      </div>  
  );
}

export default App;
