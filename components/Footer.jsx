import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()
  return (
    <footer className='z-10 text-white'>
      <section className='bg-gradient-to-r from-[#0219AC] to-[#2D63F6] p-4 md:p-8 2xl:p-14'>
        <div className='grid grid-cols-1 gap-9 md:gap-1 md:grid-cols-3 justify-items-center'>
          {/* SOCIAL ICONS */}
          <section className='px-10 text-center md:text-left 2xl:px-48'>
            <div className='mb-4 space-y-3 md:mb-8'>
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
          <section className='text-center md:px-10 2xl:px-28 md:text-left'>
            <div className='space-y-3'>
              <h2 className='text-xl font-bold '>Usluge</h2>
              <div className='text-lg md:font-semibold '>
                <p>Tehnički pregled</p>
                <p>Transport</p>
                <p>Tahografi</p>
                <p>Certifikacija</p>
                <p>Homologacija</p>
                <p>Vatrogasni aparati</p>
              </div>
            </div>
          </section>

          {/* ADRESA */}
          <section className='px-10 space-y-2 text-center 2xl:px-14 md:text-left'>
            <div className='mb-4 space-y-3'>
              <h2 className='text-xl font-bold md:uppercase '>Adresa</h2>
              <div className='flex flex-col'>
                <span>203. brigade br.88 Matuzići,</span>
                <span>74203 Doboj Jug</span>
                <span>Bosna i Hercegovina</span>
              </div>
            </div>
            <div className='space-y-3'>
              <h2 className='text-xl font-bold md:uppercase '>Pozovi nas</h2>
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
      <section className='p-2 md:p-6 bg-[#171B29] text-sm'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <p className='p-2 text-center md:p-0 md:text-left md:col-span-2'>
            &copy; {currentYear} Ganjgo line. Sva prava zadržana.
          </p>
          <div className='p-2 space-x-4 text-center md:p-0'>
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
