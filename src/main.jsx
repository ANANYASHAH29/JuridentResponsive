import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import BookADemo from './components/BookADemo.jsx'

const router = createBrowserRouter([
  { path: "/", element: [<App />], children: [{ path: "/", element: [<Home />] }, { path: "/aboutUs", element: [<AboutUs />] }, { path: "/demo", element: [<BookADemo />] }] }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
