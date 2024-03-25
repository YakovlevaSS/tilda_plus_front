/* eslint-disable react/no-unknown-property */
import { useNavigate, useLocation, Link } from 'react-router-dom';

import s from './NavMenu.module.css';
import Button from '../../UI/Button/Button';
import {
  MainSvg,
  MarketingSvg,
  ClientsSvg,
  CatalogSvg,
  AnalyticsSvg,
  StepsSvg,
} from '../../UI/Icons/NavMenu/NavMenu';


const NavMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className={ s.menuNav }>
      <div className={ s.container }>
        <div className={ s.blockLogo }>
          <Link to="/">
            <div className={ s.logo }>
              <img alt="logo" src="img/Logo.svg" />

              <img
                alt="tildaLogo"
                className={ s.tildaLogo }
                src="img/TildaLogo.svg"
              />
            </div>
          </Link>

          <h2 className={ s.heading }>Коммерческие предложения</h2>
        </div>
        <div className={ s.menuNavItem }>
          <Button
            classes="menuNavButton"
            isActive={ location.pathname === '/' }
            onClick={ () => navigate('/') }
          >
            <MainSvg />
            <span className={ s.span }>Главная</span>
          </Button>
          <Button
            classes="menuNavButton"
            isActive={ location.pathname === '/marketing' }
            onClick={ () => navigate('/marketing') }
          >
            <MarketingSvg />
            <span className={ s.span }>Маркетинг</span>
          </Button>
          <Button
            classes="menuNavButton"
            isActive={ location.pathname === '/clients' }
            onClick={ () => navigate('/clients') }
          >
            <ClientsSvg />
            <span className={ s.span }>Клиенты</span>
          </Button>
          <Button
            classes="menuNavButton"
            isActive={ location.pathname === '/catalog' }
            onClick={ () => {
              navigate('/catalog');
            } }
          >
            <CatalogSvg />
            <span className={ s.span }>Каталог</span>
          </Button>
          <Button
            classes="menuNavButton"
            isActive={ location.pathname === '/analytics' }
            onClick={ () => navigate('/analytics') }
          >
            <AnalyticsSvg />
            <span className={ s.span }>Аналитика</span>
          </Button>
        </div>
      </div>
      <div className={ s.steps }>
        <StepsSvg />
        <h3 className={ s.stepsHeading }>Шаги по настройке</h3>
      </div>
    </nav>
  );
}
export default NavMenu
