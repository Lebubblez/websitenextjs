import Navbar from '../navbar/navbar'
import React from 'react'
import Home from '../../pages'

export default function SimpleLayout(props) {
  return (
    <>
      <main role="main">
        <div className="album py-5">
          <div className="container">
          <section className="jumbotron text-center">
          <h1>Leda Erlandson</h1>
          </section>
          </div>
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