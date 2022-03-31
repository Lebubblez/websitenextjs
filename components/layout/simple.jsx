import Navbar from '../navbar/navbar'
import React from 'react'
import Header from '../../pages/header'

export default function SimpleLayout(props) {
  return (
    <>
      <main role="main">
        <div className="album py-0">
          <Header />
          <Navbar />
          {props.preContainer && props.preContainer}
          <div className="album py-5">
          <div className="container">
            {props.children}
          </div>
          </div>
        </div>
      </main>
    </>
  )
}