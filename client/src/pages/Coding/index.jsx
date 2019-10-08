import React from 'react'
import PopularAssessments from '../../components/PopularAssessments'
import BrowseAssessments from '../../components/BrowseAssessments'
import TutoringLanding from '../../components/TutoringLanding'
import PageBanner from './components/Banner'

const Coding = () => {
  return (
    <div>
      <PageBanner />
      <PopularAssessments />
      <BrowseAssessments />
      <TutoringLanding />
    </div>
  )
}

export default Coding
