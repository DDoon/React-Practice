import { useState } from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const addUserHandler = (e) => {
    e.preventDefault()
    console.log(enteredUserName, enteredAge)
  }

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value)
  }

  const userAgeChangeHandler = (e) => {
    setEnteredAge(e.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input onChange={userNameChangeHandler} id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input onChange={userAgeChangeHandler} id="age" type="Number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
