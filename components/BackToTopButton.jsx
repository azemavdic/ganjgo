import React, { useState, useEffect } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!showButton) {
    return null
  }

  return (
    <a
      className='fixed font-bold text-blue-500 bg-white rounded-full bottom-5 right-5 hover:text-blue-700'
      //   onClick={handleClick}
      href='#top'
    >
      <BsFillArrowUpCircleFill size={40} />
      {/* &uarr; */}
    </a>
  )
}

export default BackToTopButton
