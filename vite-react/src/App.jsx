import { useState } from 'react'

import './App.css'

import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Body from './components/Body/Body.jsx';

import Profile from './components/Profile/Profile.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Body/>
      <Profile/>
      <Footer/>
    </>
  )
}

export default App;
