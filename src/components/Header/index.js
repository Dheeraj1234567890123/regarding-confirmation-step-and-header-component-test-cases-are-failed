import Cookies from 'js-cookie'
import {withRouter, Redirect, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="trip-container">
          <Link className="link" to="/">
            <header className="trip-heading">Trvael Trip</header>
          </Link>
        </div>
        <div className="links-container">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/my-trips">
            My Trips
          </Link>
        </div>
        <button className="button-logout" onClick={onClickLogout} type="button">
          Logout
        </button>
      </nav>
    </header>
  )
}

export default withRouter(Header)
