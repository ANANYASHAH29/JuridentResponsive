import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import BookADemo from './components/BookADemo.jsx'
import Testimonials from './components/Testimonials.jsx'
import AIDrafting from './components/AIDrafting.jsx'
import AllTestimonials from './components/AllTestimonials.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/aboutUs",
        element: <AboutUs />
      },
      {
        path: "/demo",
        element: <BookADemo />
      },
      {
        path: "/aiDrafting",
        element: <AIDrafting />
      },
      {
        path: "/testimonials",
        element: <AllTestimonials />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
