import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={"https://chefs-only.us.auth0.com"}
    clientId={"aM515FolXqwZz3nvuVWeGsNkIF6XjXBT"}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
  </Auth0Provider>,
)


//chefs-only.us.auth0.com
//aM515FolXqwZz3nvuVWeGsNkIF6XjXBT
//U9oGzrxyr-6UI66Vr2jwTpZK97mKcL0WbTMCZ5EGt5Zifv90w5B8IxWyDtCgYhOd