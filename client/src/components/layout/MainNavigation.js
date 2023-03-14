import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
     
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/' className={(navData)=> navData.isActive ? classes.active : ''} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin' className={(navData)=> navData.isActive ? classes.active : ''}>
              Admin
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;