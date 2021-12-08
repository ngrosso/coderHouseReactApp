const Header = ({ nombre, links, foo, children }) => {

  //const {nombre,links} = props;
  return (
    <header>
      <h1>E-Commerce</h1>
      <h2>Hola {nombre}</h2>
      <nav>
        {links.map((element, index) => {
          return <a key={index} href={element.href}>{element.name}</a>
        }
        )}
        <button onClick={foo}>
          shopping cart
        </button>
      </nav>
      {children}
    </header>
  )
}

export default Header;