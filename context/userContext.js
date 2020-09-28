import { useState, useEffect, createContext, useContext } from 'react'
import firebase from '../firebase/clientApp.js'

export const UserContext = createContext()

export default ({ children }) => {
  const [user, setUser] = useState(null)
  // Helpful to update the UI accordingly
  const [loadingUser, setLoadingUser] = useState(true)

  useEffect(() => {
    // Listen for authenticated user
    const unsubscriber = firebase.auth().onAuthStateChanged(async user => {
      try {
        if (user) {
          // User is signed in
          const { uid, displayName, email, photoURL } = user
          // Could also look for the user doc in your Firestore if you have one
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser({ uid, displayName, email, photoURL })
        } else setUser(null)
      } catch (error) {
        // most probably a connection error - handle appropriately
      } finally {
        setLoadingUser(false)
      }
    })

    // unsubscribe auth listener on unmount
    return () => unsubscriber()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  )
}

// custom hook that shorthands the context
export const useUser = () => useContext(UserContext)
