import React from 'react'
import { css } from 'emotion'

const styles = {
  footerContainer: {
    width: '100%',
    paddingTop: '50px',
    paddingBottom: '50px'
  },
  bottomNavContainer: {
    margin: 'auto',
    width: '1200px'
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  columnWrapper: {
    margin: '20px',
    width: '185px'
  },
  listWrapper: {
    padding: 0
  },
  listItem: {
    marginTop: '10px',
    marginBottom: '10px',
    listStyleType: 'none',
    lineHeight: '24px'
  }
}

export default () => {
  return (
    <footer className={css(styles.footerContainer)}>
      <hr />
      <div className={css(styles.bottomNavContainer)}>
        <div className={css(styles.columnContainer)}>
          <div className={css(styles.columnWrapper)}>
            <h2>Heading</h2>
            <ul className={css(styles.listWrapper)}>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
            </ul>
          </div>
          <div className={css(styles.columnWrapper)}>
            <h2>Heading</h2>
            <ul className={css(styles.listWrapper)}>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
            </ul>
          </div>
          <div className={css(styles.columnWrapper)}>
            <h2>Heading</h2>
            <ul className={css(styles.listWrapper)}>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
            </ul>
          </div>
          <div className={css(styles.columnWrapper)}>
            <h2>Heading</h2>
            <ul className={css(styles.listWrapper)}>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
            </ul>
          </div>
          <div className={css(styles.columnWrapper)}>
            <h2>Heading</h2>
            <ul className={css(styles.listWrapper)}>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
              <li className={css(styles.listItem)}>
                <h4>Text</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
