import { Link } from "react-router-dom";

export default function Vehicles() {
  return (
    <div>
      <p>Vehicle Page</p>
      <Link to="/" className="side-menu">
        &lt; Back home
      </Link>
    </div>
  );
}
