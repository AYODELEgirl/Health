import React from 'react'
import Background from '../_layouts/LandingPageLayout/CholeraMain/Background'
import Find from '../_layouts/LandingPageLayout/CholeraMain/Find'
import Steps from '../_layouts/LandingPageLayout/CholeraMain/Steps'
import TextAndImage from '../_layouts/LandingPageLayout/CholeraMain/TextAndImage'
import FooterSections from '../_layouts/LandingPageLayout/FooterSections'
import Table from '../_layouts/LandingPageLayout/CholeraMain/Table'

export default function CholeraMain() {
  return (
    <div>
        <Background />
        <Find />
        <Steps />
        <TextAndImage />
        <Table />
        <FooterSections />
    </div>
  )
}
