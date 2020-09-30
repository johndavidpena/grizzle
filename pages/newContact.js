import { useEffect } from 'react'
import Head from 'next/head'
import { useUser } from '../context/userContext'
import Google from '../components/Google/index'
import Home from '../components/Home'
import IndexStyles from '../stylesheets/Index.module.css'
import NewContactForm from '../components/NewContact/NewContactForm'

export default function NewContact() {
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // console.log('User: ', user)
    }
  }, [loadingUser, user])

  return (
    <>
      <Head>
        <title>GRIZZLE New Contact | SOI Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <div className={IndexStyles.loginButtons}>
          <Google />
        </div>
      )}

      {user && (
        <div className={IndexStyles.fullPage}>
          <Home />

          <NewContactForm />
        </div>
      )}
    </>
  )
}
