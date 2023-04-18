import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Header = ({ children, type, path, classes }) => {
  return (
    <>
      <header
        className={` relative overflow-hidden w-full  ${
          type === 'video' ? 'h-[70vh] sm:h-screen' : type === 'image' ? 'h-[70vh] sm:h-screen' : 'bg-[#24262B]'
        }`}
      >
        {type !== '' && (
          <>
            <div className='absolute top-0 left-0 z-10 w-full h-full opacity-100 bg-black/30'></div>
            <div className='bg-gradient-to-r from-[#0219AC] to-[#2D63F6] h-full w-full absolute left-0 top-0 opacity-100'></div>
          </>
        )}

        {/* VIDEO */}
        {type === 'video' && (
          <video
            className='absolute top-0 left-0 z-0 object-cover object-center w-full h-full md:h-full '
            // className='absolute top-0 left-0 z-0 w-full h-full object-fit contain'
            autoPlay
            loop
            muted
            playsInline
            // preload='auto'
          >
            <source src={path} type='video/mp4' />
          </video>
        )}

        {/* SLIKA */}
        {type === 'image' && (
          // <div className={`absolute left-0 z-0 w-full h-full object-fit contain ${classes}`}>
          //   <Image src={path} width='6239' height='3167' alt={path} />
          // </div>
          <div
            className={`${path} absolute top-0 left-0 right-0 object-cover object-center z-0 text-white h-full bg-no-repeat bg-center bg-cover`}
          ></div>
        )}

        {/* NAVIGATION AND TEXT */}
        {children}
      </header>
    </>
  )
}

export default Header
