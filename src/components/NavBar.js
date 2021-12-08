const NavBar = ({menu}) => {

  return (
    <header>
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
          {menu.map((element, index) => {
          return <li><a key={index} href={element.path}>{element.name}</a></li>
        }
        )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;