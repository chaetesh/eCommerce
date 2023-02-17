import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import { useState } from 'react';
import Signup from './components/SignUp';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import OrderSuccess from './components/OrderSuccess';

var products = [
  {
    img: "https://m.media-amazon.com/images/I/71CrNuzQaHL._SL1500_.jpg",
    tittle: "APPLE WATCH SERIES 7",
    price: "30,999",
    description: "Apple Watch Series 7 (GPS + Cellular, 45mm) - Midnight Aluminium Case with Midnight Sport Band - Regular",
    content: "Stay connected to family and friends with calls, texts and email, even when you don’t have your phone, Stream music and podcasts on the go, and leave your phone at home. Always-on Retina display has nearly 20% more screen area than Series 6, making everything easier to see and use;The most crack-resistant front crystal yet on an Apple Watch, IP6X dust resistance and swimproof design. Measure your blood oxygen with a powerful sensor and app;Take an ECG anytime, anywhere; Get high and low heart rate, and irregular heart rhythm notifications;Stay in the moment with the new Mindfulness app reach your sleep goals with the Sleep app."
  },
  {
    img: "https://m.media-amazon.com/images/I/61KVX-MbIUL._SL1500_.jpg",
    tittle: "Samsung Galaxy Buds2 Pro",
    price: "15,490",
    description: "Samsung Galaxy Buds2 Pro, Bluetooth Truly Wireless in Ear Earbuds with Noise Cancellation (Bora Purple, with Mic)",
    content: "24-bit Hi-Fi audio. The upgraded Samsung Seamless Codec encodes the full 24-bit audio and is decoded via Galaxy Buds2 Pro, maintaining that same 24-bit high-quality sound. (Samsung Galaxy device with One UI version 4.0 or higher required for 24-bit audio). Intelligent ANC puts your playlist in focus. With 3 high SNR (Signal-to-Noise Ratio) microphones, Galaxy Buds2 Pro track and eliminate more outside sound — even soft sounds like wind. Switching to in-person conversations is easy with Voice Detect. Simply start talking and Voice Detect will turn off ANC and activate Ambient sound — allowing you to clearly hear the conversation without removing your Buds2 Pro Comfort fit."
  },
  {
    img: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg",
    tittle: "Apple AirPods Pro",
    price: "26,900",
    description: "Apple AirPods Pro (2nd Generation)",
    content: "Active Noise Cancellation reduces unwanted background noise. Adaptive Transparency lets outside sounds in while reducing loud environmental noise. Personalised Spatial Audio with dynamic head tracking places sound all around you"
  },
  {
    img: "https://m.media-amazon.com/images/I/71--IQUHVwL._SL1500_.jpg",
    tittle: "Lenovo IdeaPad Gaming 3",
    price: "68,290",
    description: "Lenovo IdeaPad Gaming 3 Intel Core i5 11th Gen 15.6 FHD IPS Gaming Laptop 16GB/512 4GB NVIDIARTX3050/120Hz/Win11/Office 2021/Backlit/Shadow Black/2.25Kg",
    content: "Processor: 11th Gen Intel Core i5-11300H | Speed: 3.1 GHz (Base) - 4.4 GHz (Max) | 4 Cores | 8 Threads | 8MB Cache Display: 15.6 FHD (1920x1080) | IPS Technology | 120 Hz Refresh Rate | 250Nits Brightness | Anti-glare | 45% NTSC || Memory: 16GB RAM DDR4-3200 | Upgradable Up to 16GB || Storage: 512GB SSD Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 Dedicated Graphics || Cooling: 100%imporved ventilation rate | 21% larger thermal Area | 35% higher TDP"
  },
  {
    img: "https://m.media-amazon.com/images/I/71--IQUHVwL._SL1500_.jpg",
    tittle: "Lenovo IdeaPad Gaming 3",
    price: "68,290",
    description: "Lenovo IdeaPad Gaming 3 Intel Core i5 11th Gen 15.6 FHD IPS Gaming Laptop 16GB/512 4GB NVIDIARTX3050/120Hz/Win11/Office 2021/Backlit/Shadow Black/2.25Kg",
    content: "Processor: 11th Gen Intel Core i5-11300H | Speed: 3.1 GHz (Base) - 4.4 GHz (Max) | 4 Cores | 8 Threads | 8MB Cache Display: 15.6 FHD (1920x1080) | IPS Technology | 120 Hz Refresh Rate | 250Nits Brightness | Anti-glare | 45% NTSC || Memory: 16GB RAM DDR4-3200 | Upgradable Up to 16GB || Storage: 512GB SSD Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 Dedicated Graphics || Cooling: 100%imporved ventilation rate | 21% larger thermal Area | 35% higher TDP"
  },
  {
    img: "https://m.media-amazon.com/images/I/91zVSkGGZbS._SL1500_.jpg",
    tittle: "ASUS TUF Gaming",
    price: "67,990",
    description: "ASUS TUF Gaming A15, 15.6-inch (39.62 cms) FHD 144Hz, AMD Ryzen 7 4800H, 4GB NVIDIA GeForce RTX 3050, Gaming Laptop (8GB/512GB SSD/90WHrs Battery/Windows 11/Black/2.3 Kg)",
    content: "Processor: AMD Ryzen 7 4800H Mobile Processor (8-core/16-thread, 12MB Cache, 4.2 GHz max boost) Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your newFA506ICB-HN005Wand one month of Game Pass-including EA Play."
  },
  {
    img: "https://m.media-amazon.com/images/I/51DmOWr3rnL._SL1000_.jpg",
    tittle: "HP Pavilion",
    price: "73,229",
    description: "HP Pavilion AMD Ryzen 7 5800H 15.6 inches(39.6cm) FHD Gaming Laptop (16GB/512GB SSD/Windows 11 Home/NVIDIA RTX 3050 Graphics",
    content: "Processor:AMD Ryzen 7 5800H (up to 4.4 GHz max boost clock(2i), 16 MB L3 cache,8 cores, 16 threads) (2.1 GHz base clock speed, up to 3.7 GHz max boost clock, 4 MB L3 cache, 4 cores) Memory: 16 GB DDR4-3200 (2 x 8 GB), Up to 16 GB DDR4-3200 SDRAM | Storage: 512 GB PCIe NVMe M.2 SSD Display: 15.6-Inch (39.6 cm) FHD, anti-glare, micro-edge, 144 Hz, 300 nits, 72% NTSC (1920 x 1080)"
  },
  {
    img: "https://m.media-amazon.com/images/I/61Er61SxBhL._SL1500_.jpg",
    tittle: "Lenovo Legion 5",
    price: "72,490",
    description: "Lenovo Legion 5 Intel Core i5 10th Gen - 10500H 15.6 (39.62cm) FHD IPS Gaming Laptop (8GB/512GB SSD/4GB NVIDIA RTX 3050/120Hz",
    content: "Processor: 10th Gen Intel Core i5-10500H | Speed: 2.5 GHz (Base) - 4.5 GHz (Max) | 6 Cores | 12 Threads | 12MB Cache Display: 15.6 FHD (1920x1080) | IPS Technology | 120 Hz Refresh Rate | 250Nits Brightness Anti-glare | 45% NTSC || Memory: 8GB RAM DDR4-2933, Upgradable Up to 16GB || Storage: 512GB SSD || || Connectivity : Wifi 6 11ax (2x2), Bluetooth 5.1 Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6, Boost Clock 1500 / 1740MHz, TGP 95W || Cooling: Coldfront 2.0 with Dual Channel thermal mechanism | Q Control 3.0 to select between Quiet, Balance and Performance thermal modes"
  },
  {
    img: "https://m.media-amazon.com/images/I/61nJfQx0SlL._SL1080_.jpg",
    tittle: "Dell G5 AMD Ryzen",
    price: "81,490",
    description: "Dell G5 AMD Ryzen 5-5600H 168GB DDR4, 512GB SSD, Windows 10, 16GB NVIDIA RTX 3050 4GB GDDR6, 15.6 inches FHD AG 250 nits 120Hz Gaming Laptop",
    content: "Processor:AMD Ryzen 5 5600H (16MB Cache, up to 4 GHz, 6 cores 12 Threads), Memory & Storage: 8GB, DDR4 2933MHz | 512GB M.2 PCIe NVMe Solid State Drive Display: Display: 15.6 inch FHD (1920 x 1080) WVA AG 250 nits 120Hz Narrow Border Graphics: NVIDIA GEFORCE RTX 3050 (4GB GDDR6) Game Shift Technology at F9 Key to boost in game performance, Alienware Command Center allows for easy access to game settings;Nahimic 3D audio"
  },
]


function App() {
  const handler = (id)=>{
    setProductId(id);
  }
  // State Variable for cart
  const [cart, setCart] = useState(null);
  const [productId, setProductId] = useState(1);
  const [loginSuccess, setLoginSuccess] = useState(false);
  return (
    <>
    <Router>
    <Navbar loginSuccess={loginSuccess}></Navbar>
    <Routes>
      <Route exact path="/ecommerce/" element={<Home handler={handler}></Home>} />
      <Route exact path="/About" element={<About></About>} />
      {/* use this state variable and update onlclick cards */}
      <Route exact path="/productDetail" element={<ProductDetail product={products[productId]} handler={handler} cart={cart} setCart={setCart} ></ProductDetail>} />
      <Route exact path="/login" element={<Login setLoginSuccess={setLoginSuccess}></Login>} />
      <Route exact path="/signup" element={<Signup></Signup>} />
      <Route exact path="/cart" element={<Cart cart={cart}></Cart>} />
      <Route exact path="/checkout" element={<CheckOut cart = {cart}></CheckOut>} />
      <Route exact path="/ordersuccess" element={<OrderSuccess cart={cart}></OrderSuccess>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
