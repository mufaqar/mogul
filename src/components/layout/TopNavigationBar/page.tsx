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
import logoDark from '@/assets/images/logo-light.png'

const page = () => {
  return (
    <header>
      <div className="topbar">
        <Container fluid>
          <div className="navbar-header">
            <div className="d-flex align-items-center gap-2">
              {/* edit_mufaqar */}
              {/* <LeftSideBarToggle />
              <form className="app-search d-none d-md-block me-auto">
                <div className="position-relative">
                  <input type="search" className="form-control border-0" placeholder="Search..." autoComplete="off" />
                  <IconifyIcon icon="ri:search-line" className=" search-widget-icon" />
                </div>
              </form> */}
              
            </div>
            <div className="d-flex align-items-center gap-1">
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">                 
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">
                          Disabled
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              {/* <ThemeModeToggle /> */}

              {/* <MaximizeScreen /> */}

              <Notifications />
              <Notifications />

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
