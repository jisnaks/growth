import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RspReview from '../components/Reviews/RspReview'


function Home() {
  return (
    <div className='home'>
      <NavBar />
      <Header />
      <RspReview />
      <Footer />
    </div>
  )
}

export default Home
