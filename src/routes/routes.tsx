import { Routes, Route } from 'react-router-dom';

import Layout from '../pages/Layout/Layout';
import Main from '../pages/Main/Main';
import Auth from '../pages/Auth/Auth';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import NotFound from '../pages/NotFound/NotFound';
import ProtectedRoute from './ProtectedRoute';
import Marketing from '../pages/Marketing/Marketing';
import Clients from '../pages/Clients/Clients';
import Catalog from '../pages/Catalog/Catalog';
import Analytics from '../pages/Analytics/Analytics';


interface IAppRoutesProps {
  user: string | null;
}

const AppRoutes = ({ user }: IAppRoutesProps) => (
  <Routes>
    <Route element={ <Auth /> } path="/auth" />
    <Route element={ <SignUp /> } path="/signup" />
    <Route element={ <SignIn /> } path="/signin" />

    <Route element={ <ProtectedRoute isAllowed={ !!user } /> }>
      <Route element={ <Layout /> } path="/">
        <Route element={ <Main /> } path="/" />
        <Route element={ <Marketing /> } path="/marketing" />
        <Route element={ <Clients /> } path="/clients" />
        <Route element={ <Catalog /> } path="/catalog" />
        <Route element={ <Analytics /> } path="/analytics" />
      </Route>
    </Route>

    <Route element={ <NotFound /> } path="*" />
  </Routes>
);

export default AppRoutes;
