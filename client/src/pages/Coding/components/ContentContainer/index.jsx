import React from 'react'
import { css } from 'emotion'

const styles = {
  container: {
    marginLeft: '50px',
    marginRight: '50px'
  }
}

export default ({ children }) => {
  return <div className={css(styles.container)}>{children}</div>
}
