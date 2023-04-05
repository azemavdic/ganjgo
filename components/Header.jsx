import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Header = ({ children, type, path, classes }) => {
  return (
    <>
      <header
        className={`relative overflow-hidden ${type !== '' ? 'h-[200px] md:h-[500px] xl:h-screen' : 'bg-[#24262B]'}`}
      >
        {type !== '' && (
          <>
            <div className='absolute top-0 left-0 z-10 w-full h-full opacity-100 bg-slate-50/20'></div>
            <div className='bg-gradient-to-r from-[#0219AC] to-[#2D63F6] h-full w-full absolute left-0 top-0 opacity-100'></div>
          </>
        )}

        {/* VIDEO */}
        {type === 'video' && (
          <video
            className='absolute z-0 w-auto h-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2'
            // className='absolute top-0 left-0 z-0 w-full h-full object-fit contain'
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={path} type='video/mp4' />
          </video>
        )}

        {/* SLIKA */}
        {type === 'image' && (
          <div className={`absolute left-0 z-0 w-full h-full object-fit contain ${classes}`}>
            <Image src={path} width='6239' height='3167' alt={path} />
          </div>
        )}

        {/* NAVIGATION AND TEXT */}
        {children}
      </header>
    </>
  )
}

export default Header
