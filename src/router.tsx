import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages';
import Drag from './pages/Drag';
import DragAndDrop from './pages/DragAndDrop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/drag', element: <Drag /> },
      { path: '/dnd', element: <DragAndDrop /> },
    ],
  },
]);

export default router;
