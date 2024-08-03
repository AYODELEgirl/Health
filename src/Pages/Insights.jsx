import React, { useState } from 'react'
import Background from '../_layouts/LandingPageLayout/Insight/Background'
import InfinityVideo from '../_layouts/LandingPageLayout/Insight/InfinityVideo'
import PicsAndText from '../_layouts/LandingPageLayout/Insight/PicsAndText'
import Publication from '../_layouts/LandingPageLayout/Insight/publication'
import CommitmentVideo from '../_layouts/LandingPageLayout/Insight/CommitmentVideo'
import MarketAccess from '../_layouts/LandingPageLayout/Insight/MarketAccess'
import Global from '../_layouts/LandingPageLayout/Insight/Global'
import MorePublication from '../_layouts/LandingPageLayout/MorePublication'


export default function Insight() {
  const [morePublication, setMorePublication] = useState(false)
  return (
    <div>
     {morePublication ? <MorePublication setMorePublication={setMorePublication}/> : ""}
      {morePublication ? "":<div>

        <Background />
        <InfinityVideo />
        <MarketAccess />
        <Global />
        {/* <PicsAndText /> */}
        <Publication setMorePublication={setMorePublication}/>
        <CommitmentVideo />
      </div>}
    </div>
  )
}
