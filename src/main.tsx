import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import cafeVendomeMd from './content/cafeVendome'
import cleatwizMd from './content/cleatwiz'
import deallMd from './content/deall'
import lahiyaMd from './content/lahiya'
import './index.css'
import CaseStudy from './pages/CaseStudy/CaseStudy'
import Home from './pages/Home/Home'


const caseStudies: Record<string, string> = {
  "cleatwiz": cleatwizMd,
  "lahiya": lahiyaMd,
  "cafe-vendome": cafeVendomeMd,
  "deall": deallMd
}

const routes = createBrowserRouter([
  {
    path: '/portfolio',
    element: <App />,
    children: [
      {
        path: '/portfolio',
        element: <Home />
      },
      {
        path: '/portfolio/work',
        element: <Home />
      },
      {
        path: '/portfolio/work/:workId',
        element: <CaseStudy />,
        loader: async ({params}:any) => {
          return caseStudies[params.workId];
        }
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
)
