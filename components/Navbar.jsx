import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
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
        <div className='flex items-center justify-between mx-4 md:mx-0 md:justify-around md:mr-16'>
          <Link href='/' className='hidden md:block'>
            <Image src='/images/logo.png' alt='logo' width='300' height='300' />
          </Link>
          {/* MOBILNA navigacija */}
          <Link href='/' className='block md:hidden'>
            <Image src='/images/logo.png' alt='logo' width='120' height='120' />
          </Link>
          <div className='md:hidden'>
            <GiHamburgerMenu size={25} />
          </div>

          <div className='hidden space-x-4 md:block'>
            {navigationMenu.map((el) => (
              <ActiveLink href={el.path} key={el.id} className='text-xl font-semibold'>
                {el.name}
              </ActiveLink>
            ))}
          </div>

          <div className='items-center justify-center hidden space-x-6 md:flex'>
            <BsSearch size={25} />
            <Link href='/kontakt' className='px-8 py-2 bg-gradient-to-r from-[#0219AC] to-[#2D63F6] rounded-full'>
              Kontakt
            </Link>
          </div>
        </div>
      </nav>

      {/* TEXT */}
      {children}
    </div>
  )
}

export default Navbar
