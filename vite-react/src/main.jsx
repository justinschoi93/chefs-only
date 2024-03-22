import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react';
import { getConfig } from './config.js';



const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider>
    <App />
  </Auth0Provider>,
)


//chefs-only.us.auth0.com
//aM515FolXqwZz3nvuVWeGsNkIF6XjXBT
//U9oGzrxyr-6UI66Vr2jwTpZK97mKcL0WbTMCZ5EGt5Zifv90w5B8IxWyDtCgYhOd