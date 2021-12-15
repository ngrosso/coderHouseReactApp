import CartWidget from "./CartWidget";

const NavBar = ({ menu }) => {

  return (
    <header>
      <nav>
        <div className="nav-wrapper blue">
          <div className="container">
            <a href="/" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {menu.map((element, index) => {
                return <li key={index}><a  href={element.path}>{element.name}</a></li>
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