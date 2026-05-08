import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Welcome to FakeStop!</h1>
                <p>Your one-stop shop for all things fake.</p>
            </div>
            
            
            {/* <div>
                <Link to='/inventory'>Find A Game</Link>
                <Link to='/stores'>Find A Store</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div> */}

        </div>
    );
}
