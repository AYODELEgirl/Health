import React from "react";
import Background from "../_layouts/LandingPageLayout/Products/Background";
import OnboardSection from "../_layouts/LandingPageLayout/Products/OnboardSection";
import ProductsHomePage from "../_layouts/LandingPageLayout/Products/ProductsHomePage";
import MarketSection from "../_layouts/LandingPageLayout/Products/MarketSection";
import CommitmentSection from "../_layouts/LandingPageLayout/Products/CommitmentSection";
import FooterSection from "../_layouts/LandingPageLayout/FooterSection";
import ExploreSection from "../_layouts/LandingPageLayout/Products/Explore";
import SubscribeSection from "../_layouts/LandingPageLayout/Products/SubscribeSection";


export default function Products() {
  return (
    <div>
      <Background />
      <ProductsHomePage />
      <MarketSection />
      <ExploreSection />
      <SubscribeSection />
      <OnboardSection />
      <CommitmentSection />
      <FooterSection />
    </div>
  );
}
