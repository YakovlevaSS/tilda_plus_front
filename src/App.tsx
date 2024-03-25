import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { useAppSelector } from './app/hooks';
import AppRoutes from './routes/routes';


const App = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <AppRoutes user={ user } />
    </BrowserRouter>
  );
};

export default App;
