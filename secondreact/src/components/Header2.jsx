import { Link } from "react-router-dom";

function Header2() {
  return (
    <header className="header">
      <h2>Header2</h2>
      <nav>
        <a href="/">Home old</a> |
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header2;
