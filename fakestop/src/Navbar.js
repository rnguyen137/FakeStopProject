import "./Styles.css"

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">FakeStop</a>
        <ul>
            <li>
                <a href="/inventory">Find A Game</a>
            </li>
            <li>
                <a href="/stores">Find A Store</a>
            </li>
            <li>
                <a href="/about">About Us</a>
            </li>
            <li>
                <a href="/contact">Contact Us</a>
            </li>
        </ul>
    </nav>
}