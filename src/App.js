import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import LoginPage from './pages/LoginPage';
import InvoicePage from './pages/InvoicePage';


const routes = createBrowserRouter([
  {
    path:'/',
    element:<LoginPage/>
  },
  {
    path:'invoice',
    element:<InvoicePage/>
  }
])

function App() {
  return <RouterProvider router={routes}/>;
}

export default App;
