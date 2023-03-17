import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const token = useRouteLoaderData('root');
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/' className={(navData) => navData.isActive ? classes.active : ''} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/events' className={(navData) => navData.isActive ? classes.active : ''} end>
              Pics
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' className={(navData) => navData.isActive ? classes.active : ''} end>
              Add
            </NavLink>
          </li>

          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                User
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button className={classes.btnLogout}>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;