import Link from 'next/link'
import { RiGroupLine, RiUserAddLine } from 'react-icons/ri'
import IndexStyles from '../../stylesheets/Index.module.css'

const Navigation = () => (
  <section className={IndexStyles.navSection}>
    <Link href='/newContact'>
      <div className={IndexStyles.linkContainer}>
        <RiUserAddLine />
      </div>
    </Link>

    <Link href='/contacts'>
      <div className={IndexStyles.linkContainer}>
        <RiGroupLine />
      </div>
    </Link>
  </section>
)

export default Navigation
