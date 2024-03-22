import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Body from './components/Body/Body.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  )
}

export default App;
