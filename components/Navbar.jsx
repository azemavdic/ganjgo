import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import ActiveLink from './ActiveLink'

export const navigationMenu = [
  {
    id: 1,
    name: 'Početna',
    path: '/',
  },
  {
    id: 2,
    name: 'O nama',
    path: '/o_nama',
  },
  {
    id: 3,
    name: 'Usluge',
    path: '/usluge',
  },
  {
    id: 4,
    name: 'Galerija',
    path: '/galerija',
  },
]

const Navbar = ({ children }) => {
  return (
    <div className='relative z-10 text-white'>
      {/* NAVBAR */}
      <nav className='container mx-auto'>
        <div className='flex items-center justify-around mr-16'>
          <Link href='/' className=''>
            <Image src='/images/logo.png' alt='logo' width='300' height='300' />
          </Link>

          <div className='space-x-4 '>
            {navigationMenu.map((el) => (
              <ActiveLink href={el.path} key={el.id} className='text-xl font-semibold'>
                {el.name}
              </ActiveLink>
            ))}
          </div>

          <div className='flex items-center justify-center space-x-6'>
            <BsSearch size={25} />
            <button className='px-8 py-2 bg-gradient-to-r from-[#0219AC] to-[#2D63F6] rounded-full'>Kontakt</button>
          </div>
        </div>
      </nav>

      {/* TEXT */}
      {children}
    </div>
  )
}

export default Navbar
