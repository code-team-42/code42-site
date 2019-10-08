import React from 'react'
import { Link } from 'react-router-dom'
import { css, keyframes } from 'emotion'
import { FaHome, FaSearch } from 'react-icons/fa'
// import { AuthContext } from '../../contexts/AuthContext'
import './index.css'
// index.css is needed for styling the react-router links, which isn't compatible with Radium or Emotion

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-5px);
  }
`

const styles = {
  parentContainer: {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '60px'
  },
  navWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    height: '100%',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15)'
  },
  content: {
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    display: 'flex',
    width: '100%'
  },
  homeIcon: {
    height: '40px',
    width: '40px',
    marginLeft: '10px'
  },
  navLink: {
    display: 'flex',
    paddingLeft: '2rem',
    paddingRight: '2rem'
  },
  linkText: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  navSearchWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  navSearchbar: {
    color: 'black',
    outline: 0,
    background: 'whitesmoke',
    display: 'inline-block',
    border: 0,
    borderBottomLeftRadius: '6px',
    borderTopLeftRadius: '6px',
    height: '40px',
    width: '300px',
    paddingLeft: '1rem',
    '&:focus': {
      WebkitTransitionDuration: '0.3s',
      transitionDuration: '0.3s',
      WebkitTransitionProperty: 'box-shadow',
      transitionProperty: 'box-shadow',
      boxShadow: 'inset 0 0 0 4px #7BB026, 0 0 1px rgba(0, 0, 0, 0)'
    },
    '&::placeholder': {
      marginTop: '5px',
      fontSize: '14px'
    }
  },
  navSearchButton: {
    outline: 0,
    border: 0,
    width: '40px',
    color: 'white',
    background: '#B8B2A7',
    height: '42px',
    borderBottomRightRadius: '6px',
    borderTopRightRadius: '6px'
  },
  navSearchButtonIcon: {
    height: '24px',
    width: '24px'
  },
  loginButton: {
    height: '40px',
    marginRight: '10px',
    width: '120px',
    borderRadius: '6px',
    border: 'solid #B8B2A7',
    fontWeight: 'bold',
    color: '#B8B2A7',
    backgroundColor: 'white',
    '&:hover': {
      cursor: 'pointer',
      animation: `${bounce} 0.8s`,
      animationDirection: 'alternate',
      animationIterationCount: 'infinite'
    }
  },
  rightNavWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
  },
  signUpButton: {
    height: '40px',
    width: '120px',
    marginRight: '10px',
    border: 0,
    borderRadius: '6px',
    backgroundColor: '#B8B2A7',
    fontWeight: 'bold',
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
      animation: `${bounce} 0.8s`,
      animationDirection: 'alternate',
      animationIterationCount: 'infinite'
    }
  },
  subnavParentContainer: {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '40px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15)'
  },
  subNavWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    height: '100%'
  },
  subNavItem: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRight: '2px solid whitesmoke',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#B8B2A7',
      color: 'white'
    }
  }
}

const NavBar = () => {
  // const { isLoaded, state } = useContext(AuthContext)

  return (
    <>
      <nav className={css(styles.parentContainer)}>
        <div className={css(styles.navWrapper)}>
          <div className={css(styles.content)}>
            <Link to="/" className="a-link-wrapper home-icon">
              <FaHome className={css(styles.homeIcon)} style={styles.homeIcon} />
            </Link>
            <Link to="/coding" className="link-wrapper nav-link">
              <div className={css(styles.navLink)}>
                <p className={css(styles.linkText)}>Coding</p>
              </div>
            </Link>
            <Link to="/forum" className="link-wrapper nav-link">
              <div className={css(styles.navLink)}>
                <p style={styles.linkText}>Forum</p>
              </div>
            </Link>
            <Link to="/community" className="link-wrapper nav-link">
              <div style={styles.navLink}>
                <p className={css(styles.linkText)}>Community</p>
              </div>
            </Link>
          </div>
          <div className={css(styles.content)}>
            <div className={css(styles.navSearchWrapper)}>
              <input placeholder="Search" className={css(styles.navSearchbar)} />
              <button className={css(styles.navSearchButton)} type="submit">
                <FaSearch className={css(styles.navSearchButtonIcon)} />
              </button>
            </div>
          </div>
          <div className={css(styles.content)}>
            <div className={css(styles.rightNavWrapper)}>
              <button className={css(styles.loginButton)} type="button">
                Log In
              </button>
              <button className={css(styles.signUpButton)} type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav className={css(styles.subnavParentContainer)}>
        <div className={css(styles.subNavWrapper)}>
          <div className={css(styles.content)}>
            <div className={css(styles.subNavItem)}>Self-Assessments</div>
            <div className={css(styles.subNavItem)}>Tutoring</div>
            <div className={css(styles.subNavItem)}>Coding Challenges</div>
            <div className={css(styles.subNavItem)}>Popular Resources</div>
          </div>
        </div>
      </nav>
    </>
  )
}

// function NavBar() {
//   const { isLoaded, state } = useContext(AuthContext)

//   return (
//     <div>
//       <Link to="/">Home</Link>
//       {(() => {
//         if (!isLoaded) return null
//         const display = []
//         if (!state.role) {
//           return <Link to="/login">Login</Link>
//         }
//         if (state.role === 'user' || state.role === 'admin') {
//           display.push(
//             <Link key="protected" to="/protected">
//               Protected
//             </Link>
//           )
//         }
//         if (state.role === 'admin') {
//           display.push(
//             <Link key="admin" to="/admin">
//               Admin
//             </Link>
//           )
//         }
//         return display
//       })()}
//     </div>
//   )
// }

export default NavBar
