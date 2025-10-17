import Link from 'next/link'
import React from 'react'

function MainHeader() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Brand/Logo on the left */}
        <Link className="navbar-brand fw-bold me-5" href="/">MOGUL</Link>
        
        {/* Main navigation items centered */}
        <div className="d-flex flex-grow-1 justify-content-between">
          <ul className="navbar-nav flex-row gap-3">
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" href="/tenants">Tenants</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" href="/rentals">Rentals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" href="/landlords">Landlords</Link>
            </li>
          </ul>
          
          {/* Right-aligned items */}
          <ul className="navbar-nav flex-row gap-3">
            <li className="nav-item">
              <span className="nav-link px-3 py-2">ET</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" href="/signin">Sign in</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MainHeader
