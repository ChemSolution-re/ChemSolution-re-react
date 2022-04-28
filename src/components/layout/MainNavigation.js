import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>ChemSolution</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              Dummy link
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
