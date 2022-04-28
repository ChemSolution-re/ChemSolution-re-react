import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header>
      <nav className="top-0 z-20 lg:h-auto sm:h-1/6 flex items-center justify-between flex-grow bg-csblack p-5 m-auto shadow-2xl fixed w-full">
        <div className="transform md:scale-50 lg:scale-100 flex items-center flex-shrink text-white ml-3 mr-6">
          ChemSolution
        </div>
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
