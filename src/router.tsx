import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages';
import Drag from './pages/Drag';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/drag', element: <Drag /> },
    ],
  },
]);

export default router;
