// npm modules
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className='navBar'>
      {user ?
        <>
          <a>Welcome, {user.name}</a>
          <a><NavLink to="/auth/change-password">Change Password</NavLink></a>
          <a><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></a>
        </>
  
      :
        <>
          <a><NavLink to="/auth/login">Log In</NavLink></a>
          <a><NavLink to="/auth/signup">Sign Up</NavLink></a>
        </>
      }
    </nav>
  )
}

export default NavBar
