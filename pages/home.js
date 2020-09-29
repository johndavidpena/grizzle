import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '../context/userContext'
import Google from '../components/Google/index'
import UserCard from '../components/Cards/UserCard'
import SignOut from '../components/Buttons/SignOut'
import IndexStyles from '../stylesheets/Index.module.css'

export default function Home() {
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // console.log('User: ', user)
    }
  }, [loadingUser, user])

  return (
    <>
      <Head>
        <title>GRIZZLE Home | SOI Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <div className={IndexStyles.loginButtons}>
          <Google />
        </div>
      )}

      {user && (
        <>
          <UserCard user={user} />

          <Link href='/contacts'>
            <div className={IndexStyles.linkContainer}>
              <p className={IndexStyles.linkText}>Contacts</p>
            </div>
          </Link>

          <SignOut />
        </>
      )}
    </>
  )
}
