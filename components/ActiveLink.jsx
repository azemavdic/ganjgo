import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const ActiveLink = ({ children, href }) => {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Link
      href={href}
      //   onClick={handleClick}
      //   style={style}
      className={`text-xl font-semibold ${router.asPath === href ? 'underline underline-offset-8' : ''}`}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
