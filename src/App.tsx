import React from 'react'
import Header from './component/Header'
import LandingPage from './page/LandingPage'
import Footer from "./component/Footer"

const App:React.FC = () => {
  return (
    <>
      <Header/>
      <LandingPage/>
      <Footer/>
    </>
  )
}

export default App