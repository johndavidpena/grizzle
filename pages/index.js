import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import IndexStyles from '../stylesheets/Index.module.css'
import { useUser } from '../context/userContext'
// import Facebook from '../components/Facebook/index'
import Google from '../components/Google/index'
import Navigation from '../components/Navigation'
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

      <div className={IndexStyles.fullPage}>
        {!user && (
          <div className={IndexStyles.loginButtons}>
            {/* NOTE: Facebook was working b4 adding Google but not now */}
            {/* <Facebook /> */}
            <Google />
          </div>
        )}

        {user && (
          <div className={IndexStyles.grid3column}>
            <section className={IndexStyles.textSection}>
              <Link href='/'>
                <h1 className={IndexStyles.heading}>GRIZZLE</h1>
              </Link>

              <p className={IndexStyles.welcome}>Grow & nurture your SOI.</p>
            </section>

            <Navigation />

            <section className={IndexStyles.userSection}>
              <UserCard user={user} />

              <SignOut />
            </section>
          </div>
        )}
      </div>
    </>
  )
}
