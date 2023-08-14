// npm modules
import { NavLink } from 'react-router-dom'


const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className='navBar'>
      {user ?
        <>
          <div>Welcome, {user.name}</div>
          <NavLink to="/auth/change-password">Change Password</NavLink>
          <NavLink to="" onClick={handleLogout}>LOG OUT</NavLink>
        </>
  
      :
        <>
          <NavLink to="/auth/login">Log In</NavLink>
          <NavLink to="/auth/signup">Sign Up</NavLink>
        </>
      }
    </nav>
  )
}

export default NavBar
