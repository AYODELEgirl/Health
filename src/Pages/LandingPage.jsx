import EnablementSection from "../_layouts/LandingPageLayout/EnablementSection";
import HomePageLayout from "../_layouts/LandingPageLayout/HomePageLayout";
import PictureAndTextGrid from "../_layouts/LandingPageLayout/PictureAndTextGrid";
import PublicationSection from "../_layouts/LandingPageLayout/PublicationSection";
import QuestionsSection from "../_layouts/LandingPageLayout/QuestionsSection";
import CommitmentSection from "../_layouts/LandingPageLayout/commitmentSection";
import DataAndAnalytics from "../_layouts/LandingPageLayout/dataAndAnalytics";
import FooterSection from "../_layouts/LandingPageLayout/FooterSection";

export default function LandingPage() {
  return (
    <main>
      <HomePageLayout />
      <PictureAndTextGrid />
      <CommitmentSection />
      <DataAndAnalytics />
      <PublicationSection />
      <EnablementSection />
      <QuestionsSection />
      <FooterSection />
    </main>
  );
}
