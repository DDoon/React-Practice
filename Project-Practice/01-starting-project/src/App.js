import React, { useState, useRef, Fragment } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
  const [userList, setUserList] = useState([])

  const dataId = useRef(0)

  const addUserHandler = (uName, uAge) => {
    const newItem = {
      name: uName,
      age: uAge,
      id: dataId.current,
    }
    dataId.current += 1
    setUserList([newItem, ...userList])
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  )
}

export default App
