import React from 'react'

import styled from 'styled-components'

const NavStyle = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    li {
      margin: 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: white;

        :hover,
        :active {
          color: #f3cafb;
        }
      }
      button {
        font: inherit;
        background: #dd0db0;
        border: 1px solid #dd0db0;
        padding: 0.5rem 1.5rem;
        color: white;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
        border-radius: 20px;

        :focus {
          outline: none;
        }

        :hover,
        :active {
          color: #f3cafb;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
        }
      }
    }
  }
`

const Navigation = (props) => {
  return (
    <NavStyle>
      <nav>
        <ul>
          {props.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {props.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {props.isLoggedIn && (
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </NavStyle>
  )
}

export default Navigation
