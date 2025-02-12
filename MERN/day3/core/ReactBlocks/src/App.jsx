import { useState } from 'react'
import './App.css'
import HeadDiv from './components/HeadDiv'
import Navigation from './components/Navigation'
import MainContent from './components/maincontent'
function App() {
  return (
    <div className='p-3'>
      <HeadDiv></HeadDiv>
      <div className='d-flex gap-3'>
        <Navigation></Navigation>
        <MainContent />
      </div>
    </div>
  )
}

export default App
