import { useEffect } from 'react'
import Head from 'next/head'
import HomeStyles from '../stylesheets/Home.module.css'
import { useUser } from '../context/userContext'
// import Facebook from '../components/Facebook/index'
import Google from '../components/Google/index'
import UserCard from '../components/Cards/UserCard'
import SignOut from '../components/Buttons/SignOut'

export default function Home() {
  // custom hook to get context values
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // u know that the user is loaded: either logged in or out
      console.log('User: ', user)
    }
    // u also have ur firebase app initialized
  }, [loadingUser, user])

  return (
    <>
      <Head>
        <title>GRIZZLE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <div className={HomeStyles.loginButtons}>
          {/* NOTE: Facebook was working b4 adding Google but not now */}
          {/* <Facebook /> */}
          <Google />
        </div>
      )}

      {user && (
        <>
          <UserCard user={user} />
          <SignOut />
        </>
      )}
    </>
  )
}
