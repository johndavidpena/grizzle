import { useState } from 'react'
import GoogleStyles from '../../stylesheets/Google.module.css'
import firebase from '../../firebase/clientApp'
import Router from 'next/router'

const GoogleLogin = props => {
  // create an instance of the Google provider object, ORIGINALLY var
  const provider = new firebase.auth.GoogleAuthProvider()

  // provider.setCustomParameters({
  //   'display': 'popup'
  // })

  // TODO: save to database?
  const loginWithGooglePopup = async () => {
    await firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        // this gives you a Google Access Token - use it to access the Google API
        const token = result.credential.accessToken
        // var googleUser = result.user.displayName
        // console.log('loginWithGooglePopup -> googleUser', googleUser)
        const googleUser = result.user
        props.setGoogleUser(googleUser)
      })
      .then(() => {
        Router.push('/home')
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
          // gives u a Google Access Token to access Google API
          const token = result.credential.accessToken
          console.log('loginWithRedirect token: ', token)
        }
        // signed in user info
        const user = result.user
        console.log('loginWithRedirect user: ', user)

        setGoogleUser(result.user.displayName)
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
    <div className={GoogleStyles.googleLogin}
      onClick={() => loginWithGooglePopup()}>
      {/* onClick={() => loginWithRedirect()}> */}
      <img src='/btn_google_signin_light_normal_web@2x.png' alt='login with Google button' />
    </div>
  )
}

const Google = () => {
  const [googleUser, setGoogleUser] = useState('')

  return (
    <GoogleLogin setGoogleUser={setGoogleUser} />
  )
}

export default Google
