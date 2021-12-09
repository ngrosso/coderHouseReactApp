import CartWidget from "./CartWidget";

const NavBar = ({ menu }) => {

  return (
    <header>
      <nav>
        <div class="nav-wrapper blue">
          <div class="container">
            <a href="/" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              {menu.map((element, index) => {
                return <li><a key={index} href={element.path}>{element.name}</a></li>
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