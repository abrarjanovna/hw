import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="container">
        <h2>This is Home page</h2>
        <div>
          <Link className="link" to="/todos">
            <li>Titles</li>
          </Link>
          <Link className="link" to="/login">
            <li>Login</li>
          </Link>
          <Link className="link" to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <h4 className="text">
            <span>Note:</span> If you are not registered, you will not be able
            to see the dashboard page
          </h4>
        </div>
        <br />
      </div>
    </div>
  );
}
