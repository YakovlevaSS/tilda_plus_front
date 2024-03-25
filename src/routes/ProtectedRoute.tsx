import { Navigate, Outlet } from 'react-router-dom';


interface IProtectedRouteProps {
  redirectPath?: string;
  isAllowed: boolean;
}

const ProtectedRoute = ({
  redirectPath = '/auth',
  isAllowed,
}: IProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate replace to={ redirectPath } />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
