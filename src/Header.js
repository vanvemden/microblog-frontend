import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom"

function Header() {

  return (
    <Jumbotron className="Header">
      <h1>
        Microblog
      </h1>
      <p>Get in the Rithm of blogging</p>
      <Link exact to='/'>
        Blog
      </Link>
      <Link exact to='/new'>
        Add a new post
      </Link>
    </Jumbotron>

  )
}

export default Header;