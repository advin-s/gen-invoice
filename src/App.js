import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import LoginPage from './pages/LoginPage';
import InvoicePage from './pages/InvoicePage';
import { checkAuth, getToken } from './utils/auth';
import RootLayout from './pages/RootPage';
import { action as logoutAction } from './pages/LogoutPage';
import CommentsPage from './pages/CommentsPage';
import VendorDetails from './pages/VendorDetails';
import InvoiceDetails from './pages/InvoiceDetails';
import ViewInvoices from './pages/ViewInvoices';

const routes = createBrowserRouter([
  {
      path: '/',
      element: <LoginPage />
  },
    {
        path: 'dashboard',
        element: <RootLayout />,
        loader: getToken,
        children: [
            {
                path: 'invoice',
                element: <InvoicePage />,
                loader: checkAuth,
                children: [
                    { path: 'comments', element: <CommentsPage /> },
                    { path: 'vendor-details', element: <VendorDetails/> },
                    { path: 'invoice-details', element: <InvoiceDetails /> }
                ]
            },
            {
              path:'view',
              element:<ViewInvoices/>
            }
        ]
    },
    {
        path: 'logout',
        action: logoutAction
    }
],
{
  basename:'/gen-invoice'
}
);

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
