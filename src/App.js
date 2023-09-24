import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routers/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="bg-base-200">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
