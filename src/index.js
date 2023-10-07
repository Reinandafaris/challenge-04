import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './Hero';
import Detail from './Detail';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
  },
  {
    path: 'new',
    element: <App />,
  },
  {
    path: '/Detail/:id',
    element: <Detail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
