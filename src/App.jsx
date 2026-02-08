import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Ipad from "./Pages/Ipad/Ipad";
import Watch from "./Pages/Watch/Watch";
import Tv from "./Pages/Tv/Tv";
import Music from "./Pages/Music/Music";
import Support from "./Pages/Support/Support";
// import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";
import Four04 from "./Pages/Four04/Four04";
import Youtube from "./Components/Youtube/Youtube";
import "./css/styles.css";

function App() {
  return (
    <Router>
      <Navigation /> {/* Always visible at top */}
      <main style={{ marginTop: "80px" }}>
        {" "}
        {/* Push content below fixed navbar */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/music" element={<Music />} />
          <Route path="/support" element={<Support />} />
          {/* <Route path="/search" element={<Search />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="*" element={<Four04 />} /> {/* Catch-all 404 */}
        </Routes>
      </main>
      <Footer /> {/* Always visible at bottom */}
    </Router>
  );
}

export default App;
