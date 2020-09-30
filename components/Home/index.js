import Link from 'next/link'
import { RiHome5Fill } from 'react-icons/ri'
import HomeStyles from '../../stylesheets/Home.module.css'

const Home = () => (
  <div className={HomeStyles.homeContainer}>
    <Link href='/'>
      <RiHome5Fill />
    </Link>
  </div>
)

export default Home
