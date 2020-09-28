import CardStyles from '../../stylesheets/Cards.module.css'

const UserCard = ({ user }) => {

  return (
    <div className={CardStyles.UserCard}>
      <div className={CardStyles.UserCardWelcome}>
        <span>Welcome</span>
        <span>{user.displayName}</span>
      </div>

      <div className={CardStyles.UserAvatar}>
        <img src={user.photoURL} alt='Card user avatar' />
      </div>
    </div>
  )
}

export default UserCard
