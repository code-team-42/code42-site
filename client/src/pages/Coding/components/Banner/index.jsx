import React from 'react'
import { css } from 'emotion'

// background-image: url(https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
//     background-repeat: no-repeat;
//     background-blend-mode: multiply;
//     background-size: cover;
//     background-position: 50% 10%;

const styles = {
  container: {
    height: '300px',
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'row'
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    background: 'rgba(204, 204, 204, 1)',
    backgroundImage:
      "url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'multiply',
    backgroundSize: 'cover',
    backgroundPosition: '50% 40%'
  },
  bannerMainHeader: {
    padding: 0,
    margin: 0,
    paddingBottom: '20px',
    color: 'white'
  },
  bannerSubHeader: {
    padding: 0,
    margin: 0,
    color: 'white'
  },
  bannerTextButton: {
    backgroundColor: '#B8B2A7',
    border: 0,
    borderRadius: '6px',
    marginTop: '20px',
    height: '40px',
    width: '400px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white'
  }
}

export default () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.textWrapper)}>
        <h1 className={css(styles.bannerMainHeader)}>Level Up Your Code</h1>
        <h2 className={css(styles.bannerSubHeader)}>
          Everything you need to sharpen your skills as a developer.
        </h2>
        <button className={css(styles.bannerTextButton)} type="button">
          Get Started
        </button>
      </div>
    </div>
  )
}
