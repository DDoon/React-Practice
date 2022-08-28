import classes from './UserItem.module.css'

const UserItem = (user) => {
  return (
    <li className={classes.users.li} key={user.id}>
      Name : {user.name} ({user.age} years old)
    </li>
  )
}

export default UserItem
