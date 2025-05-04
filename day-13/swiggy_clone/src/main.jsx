
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Offer from './components/Offer.jsx'
import Help from './components/Help.jsx'
import Signin from './components/Signin.jsx'
import Body from './components/Body.jsx'
import Error from './components/Error.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/offers",
        element: <Offer />
      },
      {
        path: "/signin",
        element: <Signin />
      },
      {
        path: "/help",
        element: <Help />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}></RouterProvider>
)
