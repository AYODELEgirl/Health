import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Pages/AboutUs";
import Insight from "./Pages/Insight";
import Products from "./Pages/Products";
import BookACall from "./Pages/BookACall";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/insight" element={<Insight />} />
            <Route path="/products" element={<Products />} />
            <Route path="/BookACall"element={<BookACall/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
