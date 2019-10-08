import React from 'react'
// import { DiJsBadge } from "react-icons/di"
import './index.css'

const PopularAssessments = () => {
  return (
    <div>
      <div className="assessments-header-text">
        <h1>Self-Assessments</h1>
        <h2>Here are some of our top categories:</h2>
      </div>
      <div className="row">
        <div className="col-1">
          <div className="big-card">text</div>
        </div>
        <div className="col-2">
          <div className="row">
            <div className="small-card">1</div>
            <div className="small-card">2</div>
          </div>
          <div className="row">
            <div className="small-card">3</div>
            <div className="small-card">4</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularAssessments
