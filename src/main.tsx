import * as React from 'react';
import App from './App';
import PostPage from './pages/PostPage';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CoummunityPage from './pages/CommunityPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/posts',
    element: <CoummunityPage />,
  },
  {
    path: '/:postId',
    element: <PostPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
