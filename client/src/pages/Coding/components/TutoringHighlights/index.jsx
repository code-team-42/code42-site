import React from 'react'
import { css } from 'emotion'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px'
  },
  imageColumn: {
    display: 'flex',
    justifyContent: 'center',
    width: '700px',
    marginRight: '50px'
  },
  textColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '700px',
    marginLeft: '50px'
  },
  image: {
    height: '600px',
    width: '800px'
  },
  headingText: {
    fontSize: '40px'
  },
  text: {
    fontSize: '30px',
    margin: '0px 0px 30px 0px'
  },
  button: {
    backgroundColor: '#B8B2A7',
    border: 0,
    borderRadius: '6px',
    marginTop: '20px',
    height: '60px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white'
  }
}

export default () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.imageColumn)}>
        <img
          src="https://cdn.dribbble.com/users/1162077/screenshots/4649464/skatter-programmer.gif"
          className={css(styles.image)}
          alt="Animated gif of man on a laptop"
        />
      </div>
      <div className={css(styles.textColumn)}>
        <h1 className={css(styles.headingText)}>Tutoring for Something</h1>
        <p className={css(styles.text)}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo consequatur eaque
          dignissimos repellendus placeat qui, mollitia sapiente adipisci, voluptate doloribus dicta
          nam. Cum tempora incidunt, hic nulla autem labore at.
        </p>
        <p className={css(styles.text)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas facere ipsam ad
          reprehenderit saepe laborum, sit quo earum quod et assumenda. Debitis itaque tenetur cum
          impedit a, numquam in?
        </p>
        <button className={css(styles.button)} type="button">
          Schedule a Tutor
        </button>
      </div>
    </div>
  )
}
