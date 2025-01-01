import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import LoginPage from './pages/LoginPage';
import InvoicePage from './pages/InvoicePage';
import { checkAuth, getToken } from './utils/auth';
import RootLayout from './pages/RootPage';
import { action as logoutAction } from './pages/LogoutPage';


const routes = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    loader:getToken,
    children:[
      {
        path:'/',
        element:<LoginPage/>
      },
      {
        path:'invoice',
        element:<InvoicePage/>,
        loader:checkAuth
      }
    ]
  },
  {
    path:'logout',
    action:logoutAction
  }
])

function App() {

  return <RouterProvider router={routes}/>;
}

export default App;
