import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-employee">Create Employee</Link>
          </li>
          <li>
            <Link to="/employee">View Employee</Link>
          </li>

          {/* View Time Off Route */}
          <li>
            <Link to="/time-off">Time Off</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;