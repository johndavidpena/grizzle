import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import IndexStyles from '../stylesheets/Index.module.css'
import { useUser } from '../context/userContext'
// import Facebook from '../components/Facebook/index'
import Google from '../components/Google/index'
import UserCard from '../components/Cards/UserCard'
import SignOut from '../components/Buttons/SignOut'

export default function Index() {
  // custom hook to get context values
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // u know that the user is loaded: either logged in or out
      // console.log('User: ', user)
    }
    // u also have ur firebase app initialized
  }, [loadingUser, user])

  return (
    <>
      <Head>
        <title>GRIZZLE | SOI Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <div className={IndexStyles.loginButtons}>
          {/* NOTE: Facebook was working b4 adding Google but not now */}
          {/* <Facebook /> */}
          <Google />
        </div>
      )}

      {user && (
        <>
          <UserCard user={user} />

          <h1 className={IndexStyles.heading}>Welcome Brother!</h1>

          <p className={IndexStyles.welcome}>Grow & nurture your SOI.</p>

          <Link href='/home'>
            <div className={IndexStyles.linkContainer}>
              <p className={IndexStyles.linkText}>Home</p>
            </div>
          </Link>

          <Link href='/newContact'>
            <div className={IndexStyles.linkContainer}>
              <p className={IndexStyles.linkText}>New</p>
            </div>
          </Link>

          <br />
          <br />
          <br />

          <SignOut />
        </>
      )}
    </>
  )
}
