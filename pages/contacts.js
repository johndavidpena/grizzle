import { useEffect } from 'react'
import Head from 'next/head'
import { useUser } from '../context/userContext'
import Home from '../components/Home'
import Google from '../components/Google/index'
import ContactList from '../components/ContactList'
import IndexStyles from '../stylesheets/Index.module.css'

export default function Contacts() {
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // console.log('User: ', user)
    }
  }, [loadingUser, user])

  return (
    <>
      <Head>
        <title>GRIZZLE Contacts | SOI Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <div className={IndexStyles.loginButtons}>
          <Google />
        </div>
      )}

      {user && (
        <>
          <Home />

          <h1 className={IndexStyles.heading}>Contacts</h1>

          <ContactList />
        </>
      )}
    </>
  )
}
