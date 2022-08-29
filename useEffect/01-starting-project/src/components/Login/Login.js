import React, { useEffect, useState } from 'react'

import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'
import styled from 'styled-components'

const LoginStyle = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  label,
  input {
    display: block;
  }

  label {
    font-weight: bold;
    flex: 1;
    color: #464646;
    margin-bottom: 0.5rem;
  }

  input {
    flex: 3;
    font: inherit;
    padding: 0.35rem 0.35rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  .invalid input {
    border-color: red;
    background: #fbdada;
  }

  .actions {
    text-align: center;
  }

  @media (min-width: 768px) {
    .control {
      align-items: center;
      flex-direction: row;
    }
  }
`
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('')

  const [emailIsValid, setEmailIsValid] = useState()
  const [enteredPassword, setEnteredPassword] = useState('')
  const [passwordIsValid, setPasswordIsValid] = useState()
  const [formIsValid, setFormIsValid] = useState(false)

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    )
  }, [enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)
  }

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'))
  }

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    props.onLogin(enteredEmail, enteredPassword)
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <LoginStyle>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </LoginStyle>
        <Login>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </Login>
        <div>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
