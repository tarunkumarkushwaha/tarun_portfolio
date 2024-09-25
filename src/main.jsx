import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Resume from './pages/resume.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {window.location.pathname === "/resume" ? <Resume /> : <App />} */}
    <App />
  </React.StrictMode>,
)
