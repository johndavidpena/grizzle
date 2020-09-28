import { useState } from 'react'
import FacebookStyles from '../../stylesheets/Facebook.module.css'
import firebase from '../../firebase/clientApp'

const FacebookLogin = props => {
  // create an instance of the FB provider object, ORIGINALLY var
  const provider = new firebase.auth.FacebookAuthProvider()

  provider.setCustomParameters({
    'display': 'popup'
  })

  // TODO: save to database
  const loginWithFacebookPopup = async () => {
    await firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        // this gives you a FB Access Token - use it to access the FB API
        const token = result.credential.accessToken
        // var facebookUser = result.user.displayName
        // console.log('loginWithFacebookPopup -> facebookUser', facebookUser)
        const facebookUser = result.user
        props.setFacebookUser(facebookUser)
      })
      .catch(function (error) {
        // TODO: handle errors here
        const errorCode = error.code
        const errorMessage = error.message
        // the email of the user's account used
        const email = error.email
        // the firebase.auth.AuthCredential type that was used
        const credential = error.credential
      })
  }

  const loginWithRedirect = async () => {
    await firebase.auth().signInWithRedirect(provider)

    firebase.auth().getRedirectResult()
      .then(function (result) {
        if (result.credential) {
          // gives u a FB Access Token to access FB API
          const token = result.credential.accessToken
          console.log('loginWithRedirect token: ', token)
        }
        // signed in user info
        const user = result.user
        console.log('loginWithRedirect user: ', user)

        setFacebookUser(result.user.displayName)
      })
      .catch(function (error) {
        // TODO: handle errors here
        const errorCode = error.code
        const errorMessage = error.message
        // the email of the user's account used
        const email = error.email
        // the firebase.auth.AuthCredential type that was used
        const credential = error.credential
      })
  }

  return (
    <div className={FacebookStyles.facebookLogin}
      onClick={() => loginWithFacebookPopup()}>
      {/* onClick={() => loginWithRedirect()}> */}
      <img src='/FacebookButton.png' alt='login with Facebook button' />
    </div>
  )
}

const Facebook = () => {
  const [FacebookUser, setFacebookUser] = useState('')

  return (
    <FacebookLogin setFacebookUser={setFacebookUser} />
  )
}

export default Facebook
