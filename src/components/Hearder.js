import React from 'react'
import Nav from './Nav'

export default function Hearder() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="index.html">HR & Payroll</a>
            <Nav/>
        </div>
    </nav>


    </>
  )
}
