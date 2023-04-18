import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai'
import { MdOutlineFax } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'

const Kontakt = () => {
  return (
    <>
      <Head>
        <title>Kontakt</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header type=''>
        <Navbar></Navbar>
      </Header>
      <section className='bg-[#3A3B40] py-6  px-8  md:px-36 text-white'>
        <h1 className='mb-4 text-xl font-bold md:mb-8 md:text-4xl '>Kontakt</h1>
        <div className='grid grid-cols-1 gap-5 mb-10 md:grid-cols-3'>
          {/* TEHNIČKI PREGLED */}
          <div className='bg-[#323A6B] p-6 rounded row-span-3 space-y-4 transition-all duration-300 hover:shadow-[#484d6d] hover:bg-[#323A6B]/60 hover:shadow-2xl hover:scale-105'>
            <h2 className='mb-5 text-xl font-bold 2xl:text-2xl'>Tehnički pregled</h2>
            <div className='space-y-6'>
              <div className='flex items-center space-x-5'>
                <MdOutlineFax size={20} />
                <a href='tel:+38732699600' className='hover:text-slate-300'>
                  +387 32 699 600
                </a>
              </div>

              <div className='flex items-center space-x-5'>
                <AiOutlineMail size={20} />
                <div className='flex flex-col'>
                  <a href='mailto:almir@ganjgoline.com' className='hover:text-slate-300'>
                    almir@ganjgoline.com
                  </a>
                  <a href='mailto:ganjgo.line@yahoo.com' className='hover:text-slate-300'>
                    ganjgo.line@yahoo.com
                  </a>
                  <a href='mailto:finansije@ganjgoline.com' className='hover:text-slate-300'>
                    finansije@ganjgoline.com
                  </a>
                </div>
              </div>

              <div className='flex items-center space-x-5'>
                <AiOutlineMobile size={20} />
                <a href='tel:+38732692111' className='hover:text-slate-300'>
                  +387 32 692 111
                </a>
              </div>

              <div className='flex items-center space-x-5'>
                <BsTelephone size={20} />
                <div className='flex flex-col'>
                  <a href='tel:+38761874950' className='hover:text-slate-300'>
                    +387 61 874 950
                  </a>
                  <a href='tel:+387644215222' className='hover:text-slate-300'>
                    +387 64 421 5 222
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* HOMOLOGACIJA I CERTIFIKACIJA */}
          <div className='bg-[#323A6B] p-6 rounded row-span-3 space-y-4 transition-all duration-300 hover:shadow-[#484d6d] hover:bg-[#323A6B]/60 hover:shadow-2xl hover:scale-105'>
            <h2 className='mb-5 text-xl font-bold 2xl:text-2xl'>Homologacija i certifikacija</h2>
            <div className='space-y-6'>
              <div className='flex items-center space-x-5'>
                <AiOutlineMobile size={20} />
                <a href='tel:+38732692111' className='hover:text-slate-300'>
                  +387 32 692 111
                </a>
              </div>

              <div className='flex items-center space-x-5'>
                <AiOutlineMail size={20} />
                <div className='flex flex-col'>
                  <a href='mailto:homologacija@ganjgoline.com' className='hover:text-slate-300'>
                    homologacija@ganjgoline.com
                  </a>
                  <a href='mailto:certifikacija@ganjgoline.com' className='hover:text-slate-300'>
                    certifikacija@ganjgoline.com
                  </a>
                  <a href='mailto:ganjgo.line@yahoo.com' className='hover:text-slate-300'>
                    ganjgo.line@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* TRANSPORT */}
          <div className='bg-[#323A6B] p-6 rounded row-span-2 space-y-4 transition-all duration-300 hover:shadow-[#484d6d] hover:bg-[#323A6B]/60 hover:shadow-2xl hover:scale-105'>
            <h2 className='mb-5 text-xl font-bold 2xl:text-2xl'>Transport</h2>
            <div className='space-y-6'>
              <div className='flex items-center space-x-5'>
                <AiOutlineMail size={20} />
                <div className='flex flex-col'>
                  <a href='mailto:minel@ganjgoline.com' className='hover:text-slate-300'>
                    minel@ganjgoline.com
                  </a>
                  <a href='mailto:midhat@ganjgoline.com' className='hover:text-slate-300'>
                    midhat@ganjgoline.com
                  </a>
                </div>
              </div>
            </div>

            <div className='flex items-center space-x-5'>
              <BsTelephone size={20} />
              <div className='flex flex-col'>
                <a href='tel:+38762187627' className='hover:text-slate-300'>
                  +387 62 187 627
                </a>
                <a href='tel:+38761874950' className='hover:text-slate-300'>
                  +387 61 874 950
                </a>
              </div>
            </div>
          </div>

          {/* FINANSIJE */}
          {/* <div className='bg-[#323A6B] p-6 rounded row-span-1 space-y-4 transition-all duration-300 hover:shadow-[#484d6d] hover:bg-[#323A6B]/60 hover:shadow-2xl hover:scale-105'>
            <h2 className='mb-5 text-xl font-bold 2xl:text-2xl'>Finansije</h2>

            <div className='flex items-center space-x-5'>
              <AiOutlineMail size={20} />
              <div className='flex flex-col'>
                <a href='mailto:finansije@ganjgoline.com' className='hover:text-slate-300'>
                  finansije@ganjgoline.com
                </a>
              </div>
            </div>
          </div> */}

          {/* AUTO CENTAR GANJGO */}
          <div className='bg-[#323A6B] p-6 rounded row-span-2 space-y-4 transition-all duration-300 hover:shadow-[#484d6d] hover:bg-[#323A6B]/60 hover:shadow-2xl hover:scale-105'>
            <h2 className='mb-5 text-xl font-bold 2xl:text-2xl'>Auto Centar Ganjgo</h2>

            <div className='space-y-6'>
              <div className='flex items-center space-x-5'>
                <AiOutlineMail size={20} />
                <div className='flex flex-col'>
                  <a href='mailto:salonac@ganjgoline.com' className='hover:text-slate-300'>
                    salonac@ganjgoline.com
                  </a>
                </div>
              </div>

              <div className='flex items-center space-x-5'>
                <AiOutlineMobile size={20} />
                <a href='tel:+38732692441' className='hover:text-slate-300'>
                  +387 32 692 441
                </a>
              </div>

              <div className='flex items-center space-x-5'>
                <BsTelephone size={20} />
                <div className='flex flex-col'>
                  <a href='tel:+38761471471' className='hover:text-slate-300'>
                    +387 61 471 471
                  </a>
                  <a href='tel:+38761757252' className='hover:text-slate-300'>
                    +387 61 757 252
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* GANJGO PETROL*/}
          <div className='bg-[#323A6B] p-6 rounded row-span-1 transition-all duration-300 hover:shadow-[#484d6d] hover:bg-[#323A6B]/60 hover:shadow-2xl hover:scale-105'>
            <h2 className='text-xl font-bold 2xl:text-2xl'>Ganjgo Petrol</h2>
            <p className='mb-3 text-sm'>Prodaja nafte i naftnih derivata</p>
            <div>
              <span>Uprava:</span>{' '}
              <a href='tel:+387699270' className='hover:text-slate-300'>
                +387 699 270
              </a>
            </div>
            <div>
              <span>Trgovina:</span>{' '}
              <a href='tel:+387699271' className='hover:text-slate-300'>
                +387 699 271
              </a>
            </div>
          </div>

          {/* PJ LUKAVAC-TUZLA */}
          <div className='bg-[#323A6B] p-6 rounded row-span-1 transition-all duration-300 hover:shadow-[#484d6d] hover:bg-[#323A6B]/60 hover:shadow-2xl hover:scale-105'>
            <h2 className='text-xl font-bold 2xl:text-2xl'>Auto Centar Ganjgo</h2>
            <h2 className='text-xl font-bold 2xl:text-2xl'>PJ Lukavac - Tuzla</h2>
            <div className='flex items-center mt-5 space-x-5'>
              <AiOutlineMobile size={20} />
              <a href='tel:+38732692111' className='hover:text-slate-300'>
                +387 32 692 111
              </a>
            </div>
          </div>
        </div>

        <div className='flex items-center mb-5 space-x-3'>
          <CiLocationOn size={60} />
          <p className='font-semibold md:text-2xl'>203. brigade br 88 Matuzići, 74203 Doboj Jug, Bosna i Hercegovina</p>
        </div>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.083012480131!2d18.043167099999998!3d44.697504099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e81577b2b12ad%3A0xc2b1d259796212cb!2s203.%20brigade%2088%2C%20Matuzi%C4%87i%2074203!5e0!3m2!1sen!2sba!4v1680097072991!5m2!1sen!2sba'
          width='100%'
          // height='600'
          className='h-[400px] md:h-[600px]'
          // style='border:0;'
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </section>
    </>
  )
}

export default Kontakt
