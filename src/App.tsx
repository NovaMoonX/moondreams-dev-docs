import { DreamerUIProvider } from '@moondreamsdev/dreamer-ui/providers';
import { router } from '@routes/AppRoutes';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <DreamerUIProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </DreamerUIProvider>
  );
}

export default App;
