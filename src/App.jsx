import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Pages/AboutUs";
import Insights from "./Pages/Insights";
import Products from "./Pages/Products";
import BookACall from "./Pages/BookACall";
import ReadMore from "./Pages/ReadMore";
import Signin from "./_layouts/LandingPageLayout/Signin/Signin";
import ScrollToTop from "./hooks/Scrolltotop";


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>

          <Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/products" element={<Products />} /> 
            <Route path="/book-a-call"element={<BookACall/>} />
            <Route path="/ReadMore"element={<ReadMore />} />
            <Route path="/Signin"element={<Signin />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
