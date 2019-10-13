import React from 'react'
import { css } from 'emotion'

const styles = {
  container: {
    height: '300px',
    width: '300px',
    border: 0,
    borderRadius: '10px',
    position: 'relative',
    marginRight: '20px'
  },
  image: {
    height: '300px',
    width: '300px',
    borderRadius: '10px'
  },
  hoverableDiv: {
    height: '100%',
    width: '100%',
    borderRadius: '10px',
    background: 'black',
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    '&:hover': {
      transition: '0.5s ease',
      opacity: '0.8',
      cursor: 'pointer'
    }
  },
  hoverableText: {
    color: 'white'
  }
}

const Card = ({ imageSrc, topicName, altTag }) => {
  return (
    <div className={css(styles.container)}>
      <div>
        <img src={imageSrc} className={css(styles.image)} alt={altTag} />
      </div>
      <div className={css(styles.hoverableDiv)}>
        <h1 className={css(styles.hoverableText)}>{topicName}</h1>
      </div>
    </div>
  )
}

export default Card
