import { NavLink } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '30px',
  boxShadow:
    ' rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
};

const navStyle = {
  display: 'flex',
  gap: '15px',
  marginRight: 'auto',
};

// const linkStyle = {
//   textDecoration: 'none',
//   color: '#1A120B',
// };

export default function Header() {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: !isActive ? '#1A120B' : '#ECB365',
            textDecoration: 'none',
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          style={({ isActive }) => ({
            color: !isActive ? '#1A120B' : '#ECB365',
            textDecoration: 'none',
          })}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
