import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Pages/AboutUs";
import Insights from "./Pages/Insights";
import Products from "./Pages/Products";
import BookACall from "./Pages/BookACall";
import ReadMore from "./Pages/ReadMore";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/products" element={<Products />} />
            <Route path="/BookACall"element={<BookACall/>} />
            <Route path="/ReadMore"element={<ReadMore />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
