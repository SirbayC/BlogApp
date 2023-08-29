import React, { useContext } from 'react'
import Logo from "../img/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Navbar = () => {
  const navigate = useNavigate()

  const { currentUser, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className='link' to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className='link' to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className='link' to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className='link' to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className='link' to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={handleLogout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
          <Link className='link' to="/write">
          <span className='write'>
            Write
          </span></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar