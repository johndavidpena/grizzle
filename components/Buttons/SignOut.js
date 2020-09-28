import ButtonStyles from '../../stylesheets/Buttons.module.css'
import firebase from '../../firebase/clientApp'
import Router from 'next/router'

const SignOut = () => (
  <button
    className={ButtonStyles.signOut}
    type='button'
    onClick={() => {
      firebase.auth().signOut()
      Router.push('/')
    }}>
    Sign Out
  </button>
)

export default SignOut
