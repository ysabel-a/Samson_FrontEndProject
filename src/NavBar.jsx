import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">CalorieChef</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Meal Planning</Link></li>
        <li><Link to="/calculate-calories">Calculate Calories</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
