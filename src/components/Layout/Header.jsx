import React, { Fragment } from "react"

import HeaderCartButton from "./HeaderCartButton"
import mealsImage from '../../assets/meals.jpg'
import classes from '../Layout/Header.module.css'

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Yummy</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of deelicious food!" />
      </div>
    </Fragment>
  )
}

export default Header