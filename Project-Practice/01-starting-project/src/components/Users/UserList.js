import Card from '../UI/Card'
import UserItem from './UserItem'
import classes from './UserList.module.css'
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <UserItem key={`userItem_${user.id}`} {...user} />
        ))}
      </ul>
    </Card>
  )
}

export default UserList
