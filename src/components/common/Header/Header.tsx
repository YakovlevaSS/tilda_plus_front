import { useLocation } from 'react-router-dom';

import { useAppDispatch } from '../../../app/hooks';
import s from './Header.module.css';
import changeTitleName from '../../../utils/changeTitleName';
import { MoreDetailSvg } from '../../UI/Icons/Header/MoreDetail';
import { NotificationSvg } from '../../UI/Icons/Header/Notification';
import Button from '../../UI/Button/Button';
import { setAuth } from '../../../features/authSlice';


const Header = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(setAuth({ access: null }));
  };

  return (
    <header className={ s.header }>
      <h1>{ changeTitleName(location) }</h1>
      <div className={ s.menuHeader }>
        <MoreDetailSvg />
        <NotificationSvg />
        <Button onClick={ logOut }>
          <img alt="user" src="img/user.png" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
