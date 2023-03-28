import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()
  return (
    <footer className='relative z-10 text-white'>
      <section className='bg-gradient-to-r from-[#0219AC] to-[#2D63F6]  p-8 2xl:p-14'>
        <div className='grid grid-cols-3 justify-items-center'>
          {/* SOCIAL ICONS */}
          <section className='px-10 2xl:px-48'>
            <div className='mb-8 space-y-3'>
              <h2 className='text-xl font-bold'>Ganjgo line d.o.o.</h2>
              <p>
                Na našem tehničkom pregledu dočekaće vas stručno i ljubazno osoblje sa vrhunskom kvalitetom usluge...
              </p>
            </div>
            <div className='flex items-center justify-between'>
              <a href='' className='hover:cursor-pointer hover:text-slate-300'>
                <FaFacebook size={30} />
              </a>
              <a href='' className='hover:cursor-pointer hover:text-slate-300'>
                <FaTwitter size={30} />
              </a>
              <a href='' className='hover:cursor-pointer hover:text-slate-300'>
                <FaInstagram size={30} />
              </a>
              <a href='' className='hover:cursor-pointer hover:text-slate-300'>
                <FaYoutube size={30} />
              </a>
              <a href='' className='hover:cursor-pointer hover:text-slate-300'>
                <FaPhone size={25} />
              </a>
            </div>
          </section>

          {/* USLUGE */}
          <section className='px-10 2xl:px-28'>
            <div className='space-y-3'>
              <h2 className='text-xl font-bold '>Usluge</h2>
              <ul>
                <li className='text-lg font-semibold'>Tehnički pregled</li>
                <li className='text-lg font-semibold'>Transport</li>
                <li className='text-lg font-semibold'>Tahografi</li>
                <li className='text-lg font-semibold'>Certifikacija</li>
                <li className='text-lg font-semibold'>Homologacija</li>
                <li className='text-lg font-semibold'>Vatrogasni aparati</li>
              </ul>
            </div>
          </section>

          {/* ADRESA */}
          <section className='px-10 space-y2px-28 2xl:px-14'>
            <div className='mb-4 space-y-3'>
              <h2 className='text-xl font-bold uppercase'>Adresa</h2>
              <div className='flex flex-col'>
                <span>203. brigade br.88 Matuzići,</span>
                <span>74203 Doboj Jug</span>
                <span>Bosna i Hercegovina</span>
              </div>
            </div>
            <div className='space-y-3'>
              <h2 className='text-xl font-bold uppercase'>Pozovi nas</h2>
              <div className='flex flex-col'>
                <a href='tel:032699600' className='hover:text-slate-300'>
                  032/699-600
                </a>
                <a href='tel:032699601' className='hover:text-slate-300'>
                  032/699-601
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* COPYRIGHTS */}
      <section className='p-8 bg-[#171B29] text-sm'>
        <div className='grid grid-cols-3'>
          <p className='col-span-2'>&copy; {currentYear} Ganjgo line. Sva prava zadržana.</p>
          <div className='space-x-4 place-self-center'>
            <a className='hover:text-slate-300' href='#'>
              Politika privatnosti
            </a>
            <a className='hover:text-slate-300' href='#'>
              Uslovi korištenja
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
