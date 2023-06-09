import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
// import Image from 'next/image'
import ExportedImage from 'next-image-export-optimizer'

const Galerija = () => {
  return (
    <>
      <Head>
        <title>Galerija</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header type=''>
        <Navbar></Navbar>
      </Header>
      <section className='bg-[#3A3B40] p-4 text-white'>
        <h1 className='mb-4 text-xl font-bold md:mb-8 md:text-4xl '>Galerija</h1>
        <div className='grid grid-cols-3 grid-rows-3 gap-3 md:mt-8 md:gap-6'>
          <div className='col-span-2 row-span-2'>
            <ExportedImage
              width={2000}
              height={1000}
              src='/images/homologacija.jpg'
              alt='homologacija'
              className='object-cover min-h-full'
            />
          </div>
          <div className='col-span-1'>
            <ExportedImage width={2000} height={1000} src='/images/3_auta.jpg' alt='3_auta' />
          </div>
          <div className='col-span-1 row-span-2'>
            <ExportedImage
              width={2000}
              height={1000}
              src='/images/popravak.jpg'
              alt='popravak'
              className='object-cover min-h-full'
            />
          </div>
          <div className='col-span-1'>
            <ExportedImage
              width={1000}
              height={1000}
              src='/images/benzinska.jpg'
              alt='benzinska'
              className='object-cover min-h-full'
            />
          </div>
          <div className='col-span-1'>
            <ExportedImage width={1000} height={1000} src='/images/auto.jpg' alt='auto' className='object-cover min-h-full' />
          </div>
          <div className='col-span-1'>
            <ExportedImage
              width={1000}
              height={300}
              src='/images/vatrogasno.jpg'
              alt='vatrogasno'
              className='object-cover min-h-full'
            />
          </div>
          <div className='col-span-2 '>
            <ExportedImage width={1300} height={1000} src='/images/ulaz.jpg' alt='ulaz' className='object-cover min-h-full' />
          </div>
          <div className='col-span-1 '>
            <ExportedImage width={2000} height={1000} src='/images/benzinska_1.jpg' className='min-h-full' alt='benzinska_1' />
          </div>
          <div className='relative col-span-2 row-span-2'>
            <ExportedImage
              width={2000}
              height={1000}
              src='/images/tehnicki_ulaz.jpg'
              alt='tehnicki_ulaz'
              className='min-h-full'
            />
          </div>
          <div className='relative col-span-1 row-span-2'>
            <ExportedImage
              width={2000}
              height={1000}
              src='/images/hyundai.jpg'
              alt='hyundai'
              className='object-cover object-right min-h-full'
            />
          </div>

          <div className='relative col-span-1'>
            <ExportedImage
              width={2000}
              height={1000}
              src='/images/vatrogasno_3.jpg'
              alt='vatrogasno_3'
              className='object-cover min-h-full'
            />
          </div>
          <div className='relative col-span-1'>
            <ExportedImage
              width={2000}
              height={1000}
              src='/images/ulaz_1.jpg'
              alt='ulaz_1'
              className='object-cover min-h-full'
            />
          </div>
          <div className='relative col-span-2'>
            <ExportedImage
              width={2000}
              height={1000}
              src='/images/tehnicki_pregled.jpg'
              alt='tehnicki_pregled'
              className='object-cover min-h-full'
            />
          </div>
          <div className='relative col-span-1 '>
            <ExportedImage
              width={2000}
              height={1000}
              src='/images/police.jpg'
              alt='police'
              className='object-cover min-h-full'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Galerija
