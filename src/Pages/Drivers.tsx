import { Link } from "react-router-dom";

export default function Drivers() {
  return (
    <div>
      <p>Drivers Page</p>
      <Link to="/" className="side-menu">
        &lt; Back home
      </Link>
    </div>
  );
}
