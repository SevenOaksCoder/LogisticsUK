import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <p>404 Page not found</p>
      <Link to="/" className="side-menu">
        &lt; back home
      </Link>
    </div>
  );
}
