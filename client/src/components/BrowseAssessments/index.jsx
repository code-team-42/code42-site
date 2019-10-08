import React from 'react'
import './index.css'

const BrowseAssessments = () => {
  return (
    <div className="browse-container">
      <div className="browser-header-text">
        <h1>Browse All Assessments:</h1>
      </div>
      <nav className="browse-assessments-nav">
        <div className="browse-nav-wrapper">
          <div>
            <button className="browse-buttons" type="button">
              Javascript
            </button>
          </div>
          <div>
            <button className="browse-buttons" type="button">
              CSS
            </button>
          </div>
          <div>
            <button className="browse-buttons" type="button">
              React
            </button>
          </div>
          <div>
            <button className="browse-buttons" type="button">
              Algorithms
            </button>
          </div>
        </div>
      </nav>
      <div>
        <div className="browse-row">
          <div className="browse-col">
            <div />
            <div />
          </div>
          <div className="browse-col">
            <div />
            <div />
          </div>
          <div className="browse-col">
            <div />
            <div />
          </div>
          <div className="browse-col">
            <div />
            <div />
          </div>
        </div>
        <div className="browse-row">
          <div className="browse-col">
            <div />
            <div />
          </div>
          <div className="browse-col">
            <div />
            <div />
          </div>
          <div className="browse-col">
            <div />
            <div />
          </div>
          <div className="browse-col">
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseAssessments
