import { createBrowserRouter } from 'react-router-dom';

import Home from '@screens/Home';
import Layout from '@ui/Layout';
import Loading from '@ui/Loading';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'd/:documentId',
        HydrateFallback: Loading,
        lazy: async () => {
          const { default: Document } = await import('@screens/Document');
          return { Component: Document };
        },
      },
    ],
  },
]);
