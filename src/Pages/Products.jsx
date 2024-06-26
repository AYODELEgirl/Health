import React from "react";
import Background from "../_layouts/LandingPageLayout/Products/Background";
// import OnboardSection from "../_layouts/LandingPageLayout/Products/OnboardSection";
import ProductsHomePage from "../_layouts/LandingPageLayout/Products/ProductsHomePage";
// import MarketSection from "../_layouts/LandingPageLayout/Products/MarketSection";
// import CommitmentSection from "../_layouts/LandingPageLayout/Products/CommitmentSection";
// import FooterSection from "../layouts/LandingPageLayout/FooterSection";
// import ExploreSection from "../_layouts/LandingPageLayout/Products/Explore";
import SubscribeSection from "../_layouts/LandingPageLayout/Products/SubscribeSection";
import RegulatorySection from "../_layouts/LandingPageLayout/Products/RegulatorySection";
import TrustedSection from "../_layouts/LandingPageLayout/Products/TrustedSection";
import ExploreSection from "../_layouts/LandingPageLayout/Products/ExploreSection";
import FooterSections from "../_layouts/LandingPageLayout/FooterSections";
// import FooterSection from "../_layouts/LandingPageLayout/footerSection";


export default function Products() {
  return (
    <div>
      <Background />
      <ProductsHomePage />
      <RegulatorySection />
      <TrustedSection />
      <ExploreSection />
      {/* <MarketSection /> */}
      {/* <ExploreSection /> */}
      {/* <SubscribeSection /> */}
      {/* <OnboardSection /> */}
      {/* <CommitmentSection /> */}
      <FooterSections   />
    </div>
  );
}
