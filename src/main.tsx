import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home.tsx'
import Boxes from './views/Boxes.tsx'
import SpecificSushi from './views/SpecificSushi.tsx'
import SushiCartFilter from './views/SushiCartFilter.tsx'

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/boxes",
          element: <Boxes/>,

        },
        {
          path: "/specific-sushi",
          element: <SpecificSushi/>,
        },
        {
          path: "/sushi-boxes",
          element: <SushiCartFilter/>,
        }
      
      ],
    },
  ])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={routes}/>
  </StrictMode>,
)
