import { Outlet } from 'react-router-dom';
import Navbar from 'component/Navbar';

const Layout = () => (
  <div className="todo-container">
    <Navbar />
    <Outlet />
  </div>
);
export default Layout;
