import { Outlet } from 'react-router-dom';

import s from './Layout.module.css';
import NavMenu from '../../components/common/NavMenu/NavMenu';
import Header from '../../components/common/Header/Header';


const Layout = () => (
  <div className={ s.center }>
    <div className={ s.block }>
      <NavMenu />
      <div className={ s.blockMenu }>
        <Header />
        <Outlet />
      </div>
    </div>
  </div>
);

export default Layout;
