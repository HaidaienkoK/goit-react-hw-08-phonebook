import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={s.links}>
      <NavLink
        className={s.link}
        to="/register"
        style={({ isActive }) => ({
          fontWeight: isActive ? '700' : '400',
          background: isActive ? '#2DC9EB' : 'transparent',
        })}
      >
        Register
      </NavLink>
      <NavLink
        className={s.link}
        to="/login"
        style={({ isActive }) => ({
          fontWeight: isActive ? '700' : '400',
          background: isActive ? '#2DC9EB' : 'transparent',
        })}
      >
        Sign In
      </NavLink>
    </div>
  );
};
