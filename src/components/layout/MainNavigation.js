import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const commonLinkClass =
  'focus:outline-none block mt-4 lg:inline-block lg:mt-0 hover:text-cslightgreen mr-8 cursor-pointer transform duration-300 ease-in-out hover:scale-125 hover:animate-pulse';

const linkClassHandler = (navData) => {
  if (navData.isActive) {
    return classNames('text-csgreen animate-pulse', commonLinkClass);
  }
  return classNames('text-white', commonLinkClass);
};

const MainNavigation = () => {
  return (
    <header>
      <nav className="top-0 z-20 lg:h-auto sm:h-1/6 flex items-center justify-between flex-grow bg-csblack p-5 m-auto shadow-2xl fixed w-full">
        <div className="transform md:scale-50 lg:scale-100 flex items-center flex-shrink text-white ml-3 mr-6">
          ChemSolution
        </div>
        <div className="lg:text-lg sm:text-sm lg:flex-grow flex justify-start">
          <div className="flex flex-grow">
            <NavLink to="/home" className={linkClassHandler}>
              Головна
            </NavLink>
            <NavLink to="/lab" className={linkClassHandler}>
              Лабораторія
            </NavLink>
            <NavLink to="/table" className={linkClassHandler}>
              Періодична таблиця
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
