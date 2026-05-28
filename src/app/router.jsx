import { createHashRouter } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import GalleryPage from '../pages/GalleryPage'
import ContactPage from '../pages/ContactPage'
import DonorPage from '../pages/DonorPage'

export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'donors', element: <DonorPage />},
      { path: 'contact', element: <ContactPage />},
    ],
  },
])
