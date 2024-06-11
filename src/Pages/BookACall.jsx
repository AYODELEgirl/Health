import React from 'react'
import Background from '../_layouts/LandingPageLayout/BookACall/Background'
import BookHomePage from '../_layouts/LandingPageLayout/BookACall/BookHomePage'
import Elevation from '../_layouts/LandingPageLayout/BookACall/Elevation'
import Calendly from '../_layouts/LandingPageLayout/BookACall/Calendly'
import FormSection from '../_layouts/LandingPageLayout/BookACall/FormSection'
import SubscribeSection from '../_layouts/LandingPageLayout/Products/SubscribeSection'
import FooterSections from '../_layouts/LandingPageLayout/FooterSections'
import Information from '../_layouts/LandingPageLayout/BookACall/Information'
import HealtheirSection from '../_layouts/LandingPageLayout/BookACall/HealtheirSection'
import WelcomeSection from '../_layouts/LandingPageLayout/BookACall/WelcomeSection'

export default function BookACall() {
  return (
    <div>
        <Background />
        <BookHomePage />
        <HealtheirSection />
        <WelcomeSection />
        {/* <Elevation /> */}
        {/* <Calendly /> */}
        {/* <FormSection /> */}
        {/* <Information /> */}
        {/* <SubscribeSection /> */}
        <FooterSections />
    </div>
  )
}
