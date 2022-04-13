import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h2>Header</h2>
            <nav>
                <a href="/"> HOME OLD </a> |
                <Link to="/">Home</Link> |
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
}

export default Header;