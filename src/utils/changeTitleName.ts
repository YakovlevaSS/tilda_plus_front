import { Location } from 'react-router-dom';


const changeTitleName = (location: Location) => {
  if (location?.pathname === '/') {
    return 'Главная страница';
  }
  if (location?.pathname === '/crm') {
    return 'CRM';
  }
  if (location?.pathname === '/templates') {
    return 'Шаблоны';
  }
  if (location?.pathname === '/clients') {
    return 'Клиенты';
  }
  if (location?.pathname === '/products') {
    return 'Товары';
  }
  if (location?.pathname === '/analytics') {
    return 'Аналитика';
  }
  return 'Главная страница';
};

export default changeTitleName;
