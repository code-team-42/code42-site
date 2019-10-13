import React from 'react'
import { css } from 'emotion'
import Terminal from '../../../../components/Terminal'

const styles = {
  parentContainer: {
    marginTop: '30px'
  },
  headerText: {
    textAlign: 'center'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  terminal: {
    marginRight: '10px'
  },
  button: {
    backgroundColor: '#B8B2A7',
    border: 0,
    borderRadius: '6px',
    marginTop: '30px',
    height: '60px;',
    width: '600px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white'
  }
}

export default () => {
  return (
    <div className={css(styles.parentContainer)}>
      <div className={css(styles.headerText)}>
        <h1>Challenges to prepare you for real-world applications</h1>
        <h2>
          From simple Hello Worlds to robust applications, we have challenges to boost your
          proficiency.
        </h2>
      </div>
      <div className={css(styles.row)}>
        <Terminal
          content={(
            <span>
              &lt;!DOCTYPE html&gt;
              <br />
              &lt;html lang=&ldquo;en&ldquo;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&lt;head&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&ldquo;utf-8&ldquo;/&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;React App&lt;/title&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&lt;/head&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&lt;body&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id=&ldquo;root&ldquo;&gt;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&lt;/body&gt;
              <br />
              &lt;/html&gt;
            </span>
)}
          className={css(styles.terminal)}
        />
        <Terminal
          content={(
            <span>
              import React from &ldquo;react&ldquo;;
              <br />
              import HelloWorld from &ldquo;./HelloWorld/HelloWorld.jsx&ldquo;;
              <br />
              import &#123; render &#125; from &ldquo;react-dom&ldquo;
              <br />
              <br />
              const App = () =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;return (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;HelloWorld/&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;);
              <br />
              &#125;
              <br />
              <br />
              render(&lt;App&gt;, document.getElementById(&ldquo;root&ldquo;));
            </span>
)}
          className={css(styles.terminal)}
        />
        <Terminal
          content={(
            <span>
              import React from &ldquo;react&ldquo;;
              <br />
              <br />
              const HelloWorld = () =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;return (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello World!&lt;&frasl;h1&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;);
              <br />
              &#125;
              <br />
              <br />
              export default HelloWorld
            </span>
)}
          className={css(styles.terminal)}
        />
      </div>
      <div className={css(styles.row)}>
        <button className={css(styles.button)} type="button">
          Browse All Assessments
        </button>
      </div>
    </div>
  )
}
