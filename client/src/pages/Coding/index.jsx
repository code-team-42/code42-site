import React from 'react'
import AssessmentHighlights from './components/AssessmentHighlights'
import PageBanner from './components/Banner'
import ContentContainer from './components/ContentContainer'
import TutoringHighlights from './components/TutoringHighlights'
import ChallengeHighlights from './components/ChallengeHighlights'

const Coding = () => {
  return (
    <div>
      <PageBanner />
      <ContentContainer>
        <AssessmentHighlights />
        <TutoringHighlights />
        <ChallengeHighlights />
      </ContentContainer>
    </div>
  )
}

export default Coding
