import avatar1 from '/public/assets/images/users/avatar-1.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import Link from 'next/link'
import { Dropdown, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'

const ProfileDropdown = () => {
  return (
    <Dropdown className="topbar-item" drop="down">
      <DropdownToggle
        as={'a'}
        type="button"
        className="topbar-button content-none"
        id="page-header-user-dropdown "
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span className="d-flex align-items-center">
          <Image className="rounded-circle" width={32} src={avatar1} alt="avatar-3" />
        </span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end">
        <DropdownHeader as={'h6'} className="dropdown-header">
          Welcome Gaston!
        </DropdownHeader>
        <DropdownItem as={Link} href="/profile">
          <IconifyIcon icon="material-symbols:person" className="align-middle me-2 fs-18" />
          <span className="align-middle">My Profile</span>
        </DropdownItem>
        {/* <DropdownItem as={Link} href="/pages/pricing">
          <IconifyIcon icon="solar:wallet-broken" className="align-middle me-2 fs-18" />
          <span className="align-middle">Pricing</span>
        </DropdownItem> */}
        <DropdownItem as={Link} href="/support/faqs">
          <IconifyIcon icon="material-symbols:settings" className="align-middle me-2 fs-18" />
          <span className="align-middle">Settings</span>
        </DropdownItem>
        {/* <DropdownItem as={Link} href="/auth/lock-screen">
          <IconifyIcon icon="solar:lock-keyhole-broken" className="align-middle me-2 fs-18" />
          <span className="align-middle">Lock screen</span>
        </DropdownItem> */}
        <div className="dropdown-divider my-1" />
        <DropdownItem as={Link} className="text-dange" href="/auth/sign-in">
          <IconifyIcon icon="material-symbols:logout" className="align-middle me-2 fs-18" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ProfileDropdown
