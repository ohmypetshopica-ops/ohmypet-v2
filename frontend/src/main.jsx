import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom' // Importamos el proveedor
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Reemplazamos <App /> con el RouterProvider */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)