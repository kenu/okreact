import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">Home</Link> |{' '}
      <Link to="/about">About</Link> |{' '}
      <a href="/">old tag</a>
    </header>
  );
}

export default Header;
