import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './styles.css'
import { TiendaApp } from './TiendaApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TiendaApp />
    </BrowserRouter>
  </React.StrictMode>,
)
