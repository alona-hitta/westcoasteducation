import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link  to='/courses'>Courses</Link>
        </li>
        <li>
          <Link  to='/teachers'>Teachers</Link>
        </li>
      </ul>
    </nav>
    
  );
};
export default Navbar;