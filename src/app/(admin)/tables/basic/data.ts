import avatar1 from '/public/assets/images/users/avatar-1.jpg'
import avatar2 from '/public/assets/images/users/avatar-2.jpg'
import avatar4 from '/public/assets/images/users/avatar-4.jpg'
import avatar6 from '/public/assets/images/users/avatar-6.jpg'
import avatar7 from '/public/assets/images/users/avatar-7.jpg'
import type { StaticImageData } from 'next/image'

type BasicTableType = {
  id: string
  firstName: string
  lastName: string
  handle: string
}

type ExtendedBasicTableType = {
  id: string
  name: string
  avatar?: StaticImageData
  title: string
  email: string
  role: string
  verified?: boolean
}

export const tableData: BasicTableType[] = [
  {
    id: '1',
    firstName: 'Mark',
    lastName: 'Otto',
    handle: '@mdo',
  },
  {
    id: '2',
    firstName: 'Jacob',
    lastName: 'Thornton',
    handle: '@fat',
  },
  {
    id: '3',
    firstName: 'Larry the Bird',
    lastName: 'Simsons',
    handle: '@twitter',
  },
]

export const extendedTableData: ExtendedBasicTableType[] = [
  {
    id: '501',
    name: 'Tony M. Carter',
    avatar: avatar2,
    title: 'Designer',
    email: 'tonymcarter@jourrapide.com',
    role: 'Member',
  },
  {
    id: '502',
    name: 'James E. Chamb',
    avatar: avatar1,
    title: 'UI/UX Designer',
    email: 'jamesechambliss@teleworm.us',
    role: 'Admin',
  },
  {
    id: '503',
    name: 'Charlotte J. Torres',
    avatar: avatar4,
    title: 'Copywriter',
    email: 'charlotte@jourrapide.com',
    role: 'Member',
  },
  {
    id: '504',
    name: 'Mary J. Germain',
    avatar: avatar6,
    title: 'Full Stack',
    email: 'maryjgermain@jourrapide.com',
    role: 'CEO',
    verified: true,
  },
  {
    id: '505',
    name: 'Kevin C. Reyes',
    avatar: avatar7,
    title: 'Director of Product',
    email: 'kevincreyes@jourrapide.com',
    role: 'Member',
  },
]
