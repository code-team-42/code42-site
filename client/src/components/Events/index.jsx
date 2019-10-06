import React from 'react'

const Event = props => {
  return (
    <div style={{ maxWidth: 350, textAlign: 'center' }}>
      <img src={props.eventImage} alt="altimage" />
      <h2 className="eventName">{props.name}</h2>
      <p className="eventInfo">{props.info}</p>
      <a href={props.link} alt="eventLink">
        {props.linkText}
      </a>
    </div>
  )
}

export default Event
