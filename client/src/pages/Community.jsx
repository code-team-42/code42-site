import React from 'react'
import Event from '../components/Events/index'

const Community = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Events!</h1>
      <div style={{ flex: 'across' }}>
        <Event
          eventImage="https://via.placeholder.com/350x150"
          name="Example Event!!"
          info="The event has an address, date, and time. Go to it at the location."
          link="/"
          linkText="Click here"
        />
      </div>
    </div>
  )
}

export default Community
