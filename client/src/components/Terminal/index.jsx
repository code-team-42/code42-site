import React from 'react'
import { css } from 'emotion'

const styles = {
  terminalContainer: {
    backgroundColor: '#21313C',
    boxShadow: '0 2px 10px 0 rgba(26,26,26,0.35)',
    borderRadius: '4px',
    width: '545px',
    height: '330px',
    marginRight: '10px'
  },
  terminalHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: '#44525B',
    height: '30px',
    width: '100%',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px'
  },
  terminalBody: {
    margin: '10px',
    fontSize: '13px',
    lineHeight: '1.6',
    wordBreak: 'break-all',
    wordWrap: 'break-word',
    color: '#eee'
  },
  clickableCircle: {
    borderRadius: '50%',
    height: '15px',
    width: '15px',
    margin: '6px 5px 5px 5px'
  }
}

const Terminal = ({ content }) => {
  return (
    <div className={css(styles.terminalContainer)}>
      <div className={css(styles.terminalHeader)}>
        <div className={css(styles.clickableCircle)} style={{ backgroundColor: '#FF5952' }} />
        <div className={css(styles.clickableCircle)} style={{ backgroundColor: '#E7BF2A' }} />
        <div className={css(styles.clickableCircle)} style={{ backgroundColor: '#54C22C' }} />
      </div>
      <pre className={css(styles.terminalBody)}>{content}</pre>
    </div>
  )
}

export default Terminal
