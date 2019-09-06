import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-success bg-secondary">
      <Link className="navbar-brand text-light" to="/">
        {siteTitle}
      </Link>
      <ul className="navbar-nav d-flex flex-row  justify-content-between ml-auto">
        <li className="nav-item">
          <Link className="nav-link text-light" to="#">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="#">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
