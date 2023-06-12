import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavigationBar from './components/NavigationBar'
import Slogan from './components/Slogan'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <NavigationBar/>
  <Slogan/>
  </React.StrictMode>,
)
