import React from 'react'
import { css } from 'emotion'
import { MdSchool, MdHelp } from 'react-icons/md'
import { FaInfinity } from 'react-icons/fa'
import Card from '../Card'

const styles = {
  headingContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  highlightsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '30px'
  },
  keyPoint: {
    textAlign: 'center',
    width: '500px',
    paddingRight: '20px'
  },
  icons: {
    height: '50px',
    width: '50px'
  },
  button: {
    backgroundColor: '#B8B2A7',
    border: 0,
    borderRadius: '6px',
    marginTop: '20px',
    height: '60px;',
    width: '600px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white'
  },
  keypointSubHeader: {
    fontSize: '30px'
  },
  keypointSubtext: {
    fontSize: '20px'
  }
}

export default () => {
  return (
    <>
      <h1 className={css(styles.headingContainer)}>
        <span>Some of our most popular assessments:</span>
      </h1>
      <div className={css(styles.highlightsContainer)}>
        <Card
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"
          topicName="Javascript"
          altTag="JavaScript Logo"
        />
        <Card
          imageSrc="https://cdn.worldvectorlogo.com/logos/react-1.svg"
          topicName="React"
          altTag="React Logo"
        />
        <Card
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"
          topicName="CSS"
          altTag="CSS3 Logo"
        />
        <Card
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
          topicName="Python"
          altTag="Python Logo"
        />
        <Card
          imageSrc="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
          topicName="NodeJS"
          altTag="NodeJS Logo"
        />
      </div>
      <div className={css(styles.row)}>
        <div className={css(styles.keyPoint)}>
          <MdSchool className={css(styles.icons)} />
          <h2 className={css(styles.keypointSubHeader)}>Test Yourself on Any Topic</h2>
          <p className={css(styles.keypointSubtext)}>
            Vetted by the community, these tests will test your knowledge and push your critical
            thinking skills in the area of your choice.
          </p>
        </div>
        <div className={css(styles.keyPoint)}>
          <MdHelp className={css(styles.icons)} />
          <h2 className={css(styles.keypointSubHeader)}>Feedback and Resources</h2>
          <p className={css(styles.keypointSubtext)}>
            Didn&rsquo;t do so well on a topic? We&rsquo;ve got you covered by some of the best
            resources the web development community has to offer.
          </p>
        </div>
        <div className={css(styles.keyPoint)}>
          <FaInfinity className={css(styles.icons)} />
          <h2 className={css(styles.keypointSubHeader)}>Unlimited Access</h2>
          <p className={css(styles.keypointSubtext)}>
            Ready to re-take an assessment? As long as you have an account with us, you can take any
            assessment for as many times as you want.
          </p>
        </div>
      </div>
      <div className={css(styles.row)}>
        <button className={css(styles.button)} type="button">
          Browse All Assessments
        </button>
      </div>
    </>
  )
}
