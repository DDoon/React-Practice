import { useState, useRef, Fragment } from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'
const AddUser = (props) => {
  const nameInputRef = useRef('')
  const ageInputRef = useRef('')

  const [error, setError] = useState('')

  const addUserHandler = (e) => {
    e.preventDefault()
    const enteredUsername = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      })
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input ref={nameInputRef} id="username" type="text" name="username" />
          <label htmlFor="age">Age(Years)</label>
          <input ref={ageInputRef} id="age" type="Number" name="age" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  )
}

export default AddUser
