import { Link } from "react-router-dom";
import index from "../index.css";

export default function NotFound() {
  return (
    <div class="container">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go back Home</Link>
    </div>
  );
}
