import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Player } from './components/Player'

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
    </>
  );
}

export default App
