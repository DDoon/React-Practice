import { useState } from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
const AddUser = (props) => {
  const [enteredUserInfo, setEnteredUserInfo] = useState({
    username: '',
    age: 0,
  })
  const addUserHandler = (e) => {
    e.preventDefault()
    console.log(enteredUserInfo)
    setEnteredUserInfo({
      username: '',
      age: '',
    })
  }

  const userInfoChangeHandler = (e) => {
    setEnteredUserInfo({
      ...enteredUserInfo,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredUserInfo.username}
          onChange={userInfoChangeHandler}
          id="username"
          type="text"
          name="username"
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          value={enteredUserInfo.age}
          onChange={userInfoChangeHandler}
          id="age"
          type="Number"
          name="age"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
