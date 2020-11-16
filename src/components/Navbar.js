import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavStyles = styled.nav`
  margin-bottom: 3rem;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }
`

export default function Navbar() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/customers">
            Customers
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </NavStyles>
  )
}
