import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <p>About Page</p>
      <Link to="/" className="side-menu">
        &lt; Back home
      </Link>
    </div>
  );
}
