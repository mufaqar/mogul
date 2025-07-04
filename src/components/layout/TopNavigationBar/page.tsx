'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import LeftSideBarToggle from './components/LeftSideBarToggle'
import ProfileDropdown from './components/ProfileDropdown'
import ThemeCustomizerToggle from './components/ThemeCustomizerToggle'
import Notifications from './components/Notifications'
import ThemeModeToggle from './components/ThemeModeToggle'
import MaximizeScreen from './components/MaximizeScreen'
import { Container, Nav, NavbarCollapse } from 'react-bootstrap'
import dynamic from 'next/dynamic'

import React from 'react'

import Image from 'next/image'
import logoDark from '/public/assets/images/logo-light.png'
import MailBox from './components/mailBox'

const page = () => {
  return (
    <header>
      <div className="topbar">
        <Container fluid>
          <div className="navbar-header">
            <div className="d-flex align-items-center gap-2">
              {/* edit_mufaqar */}
              <LeftSideBarToggle />
              <form className="app-search d-none d-md-block me-auto">
                <div className="position-relative">
                  <input type="search" className="form-control border-0" placeholder="Search..." autoComplete="off" />
                  <IconifyIcon icon="ri:search-line" className=" search-widget-icon" />
                </div>
              </form>
            </div>
            <div className="d-flex align-items-center gap-1">
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/tenants">
                          Tenants
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/rentals">
                          Rentals
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/landlords">
                          Landlords
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              {/* <ThemeModeToggle /> */}

              {/* <MaximizeScreen /> */}

              <Notifications />
              <MailBox />

              {/* <a href="/mail">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </a> */}

              {/* <ThemeCustomizerToggle /> */}

              <ProfileDropdown />
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default page
