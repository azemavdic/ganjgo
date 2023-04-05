import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsHouseDoor, BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import ActiveLink from './ActiveLink'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaRegUser, FaUsers } from 'react-icons/fa'
import { MdMiscellaneousServices } from 'react-icons/md'
import { BiImages } from 'react-icons/bi'

export const navigationMenu = [
  {
    id: 1,
    name: 'Početna',
    path: '/',
    Icon: BsHouseDoor,
  },
  {
    id: 2,
    name: 'O nama',
    path: '/o_nama',
    Icon: FaUsers,
  },
  {
    id: 3,
    name: 'Usluge',
    path: '/usluge',
    Icon: MdMiscellaneousServices,
  },
  {
    id: 4,
    name: 'Galerija',
    path: '/galerija',
    Icon: BiImages,
  },
]

const Navbar = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false)
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
          <button className='z-50 transition duration-300 md:hidden' onClick={(e) => setMenuActive((prev) => !prev)}>
            {menuActive ? <AiOutlineCloseCircle size={25} /> : <GiHamburgerMenu size={25} />}
          </button>

          <div
            className={`${
              menuActive ? 'translate-x-0 ' : 'translate-x-[100%]'
            } md:hidden fixed right-0 top-0 w-[60%] bg-[#0219AC] z-10 text-black h-full transition-all duration-300`}
          >
            <div className='flex items-center justify-center'>
              <Link href='/' className='block md:hidden'>
                <Image src='/images/logo.png' alt='logo' width='200' height='200' />
              </Link>
            </div>
            <div className='mt-5 text-xl font-semibold text-white'>
              <div className='flex flex-col items-start justify-center gap-5 ml-14'>
                {navigationMenu.map(({ id, name, path, Icon }) => (
                  <div className='flex items-center justify-center gap-3' key={id}>
                    <Icon color='#2D63F6' size={25} />
                    <ActiveLink href={path}>
                      <span>{name}</span>
                    </ActiveLink>
                  </div>
                ))}
                <hr className='bg-[#2D63F6] -ml-7 w-full mt-4' />
                <div className='flex items-center justify-center gap-3'>
                  <FaRegUser color='#2D63F6' size={25} />
                  <ActiveLink href={'/kontakt'}>
                    <span>Kontakt</span>
                  </ActiveLink>
                </div>
              </div>
            </div>
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
