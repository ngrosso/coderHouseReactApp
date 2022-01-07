import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = ({ menu }) => {

  return (
    <header>
      <nav>
        <div className="nav-wrapper blue">
          <div className="container">
            <Link to={`/`}><a className="brand-logo">Logo</a></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {menu.map((element, index) => {
                return <li key={index}>
                  <Link to={element.path}>{element.name}</Link>
                </li>
              }
              )}
              <li><CartWidget /></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;