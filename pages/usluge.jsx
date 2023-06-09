import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import { buttons, formattedContent, formattedContent4, formattedContent5, panels, vrsteUsluge } from '@/constants'
import Head from 'next/head'
// import Image from 'next/image'
import ExportedImage from 'next-image-export-optimizer'
import React, { useState } from 'react'
import { BsTruck } from 'react-icons/bs'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Usluge = () => {
  const [activeButton, setActiveButton] = useState(0)
  const [activePanels, setActivePanels] = useState([1, 2])
  const [activeDescription, setActiveDescription] = useState([1, 2, 3, 4, 5, 6])

  function handleClickButton(buttonId) {
    setActiveButton(buttonId)
  }

  function handleShowPanel(panelId) {
    setActivePanels((prevState) => {
      if (prevState.includes(panelId)) {
        return prevState.filter((id) => id !== panelId)
      } else {
        return [...prevState, panelId]
      }
    })
  }

  function handleShowDescription(descId) {
    setActiveDescription((prevState) => {
      if (prevState.includes(descId)) {
        return prevState.filter((id) => id !== descId)
      } else {
        return [...prevState, descId]
      }
    })
  }

  return (
    <>
      <Head>
        <title>Usluge</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header type='image' path='bg-[url("/images/usluge.jpg")]' classes=''>
        <Navbar>
          <div className='z-20 flex flex-col items-center justify-center p-10 mt-10 md:p-20'>
            <div className='text-center md:w-1/2 space-y-9'>
              <h2 className='text-4xl font-bold tracking-wider 2xl:text-5xl'>Usluge</h2>
              <p className='text-lg font-semibold tracking-wider 2xl:text-2xl md:block'>
                Dolaskom u Ganjgo centar dočekaće Vas stručno i ljubazno osoblje, brza i kvalitetna usluga i povoljne
                cijene!
              </p>
            </div>
          </div>
        </Navbar>
      </Header>

      {/* SVE USLUGE */}
      <section className='bg-[#171B29] text-white px-14 md:px-16 pt-14 text-lg leading-8' id='top'>
        <div className='grid grid-cols-1 gap-16 pb-5 md:grid-cols-3 justify-items-center'>
          {vrsteUsluge.map((el) => (
            <div className='flex flex-col items-center space-y-5 text-center 2xl:w-1/2' key={el.id}>
              <button
                className='p-4 text-rose-600 rounded-full bg-[#393e4e] hover:bg-[#393e4e]/60 hover:text-rose-600/60'
                onClick={() => handleClickButton(el.id)}
                // href={el.href}
              >
                <el.Icon size={30} />
              </button>
              <h2 className='text-xl font-bold'>{el.title}</h2>
              {/* <p>{el.text}</p> */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeDescription.includes(el.id)
                    ? 'max-h-screen translate-x-0 opacity-100'
                    : 'max-h-0 -translate-x-10 opacity-0'
                }`}
              >
                {el.text}
              </div>
            </div>
          ))}
        </div>
        {/* <div className='flex flex-wrap items-center justify-center gap-5 pb-5 mt-10 text-sm text-gray-500 transition-all duration-300 md:mt-20 2xl:text-xl'>
          {buttons.map((el) => (
            <button
              key={el.id}
              onClick={() => handleClickButton(el.id)}
              className={el.id === activeButton && 'text-white'}
            >
              {el.title}
            </button>
          ))}
        </div> */}
      </section>

      {/* TEHNIČKI PREGLED */}
      {activeButton === 1 && (
        <section
          className='bg-[#24262B] text-white px-5 md:py-5 py-2 leading-8 text-2xl transition-all duration-300'
          id='tehnicki'
        >
          <div className='flex flex-col items-center justify-between gap-6 p-2 md:flex-row'>
            <div className='space-y-5 md:w-3/5 2xl:p-12'>
              <h2 className='text-3xl font-bold text-center md:text-4xl'>Tehnički pregled</h2>
              <p className='text-lg font-semibold text-gray-400 md:text-xl'>
                Na našem tehničkom pregledu dočekat će vas stručno i ljubazno osoblje sa vrhunskom kvalitetom
                usluge.Nudimo sve vrste tehničkog pregleda: putnička vozila teretna, priključna, autobusi, radna vozila,
                radne mašine...
              </p>
            </div>
            <div className=''>
              <ExportedImage src='/images/tehnicki_pregled.jpg' alt='tehnicki_pregled' width={1500} height={1000} />
            </div>
            <div></div>
          </div>
        </section>
      )}

      {/* HOMOLOGACIJA */}
      {activeButton === 2 && (
        <section className='bg-[#171B29] text-white px-5 md:py-5 py-2 leading-8 text-2xl' id='homologacija'>
          <div className='flex flex-col items-center justify-between gap-6 p-2 md:flex-row-reverse'>
            <div className='space-y-5 md:w-3/5 2xl:p-12'>
              <h2 className='text-3xl font-bold text-center md:text-4xl'>Homologacija</h2>
              <p className='text-lg font-semibold text-gray-400 md:text-xl'>
                Homologacija vozila je postupak potvrđivanja ocjene usklađenosti vozila sa zahtjevima propisa o
                homologaciji koji se primjenjuju u Bosni i Hercegovini. Drugim riječima, homologacija vozila predstavlja
                provjeru bitnih sklopova vozila, koji direktno ili indirektno utiču na okoliš i sigurnost putnika (npr.
                motor, kočnice, buka, sigurnosni pojasevi itd.).
              </p>
            </div>
            <div className=''>
              <ExportedImage src='/images/homologacija.jpg' alt='homologacija' width={1500} height={1000} />
            </div>
          </div>
          <div className='w-full mt-10 space-y-2'>
            {panels.map((panel) => (
              <div key={panel.id} className=''>
                <button
                  className='w-full py-4 px-5 md:px-12 flex items-center justify-between text-base md:text-xl font-bold text-left rounded-lg bg-[#2D63F6] hover:bg-[#2D63F6]/80 focus:outline-none'
                  onClick={() => handleShowPanel(panel.id)}
                >
                  <span>{panel.title}</span>
                  {activePanels.includes(panel.id) ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <div
                  className={`transition-all duration-300 md:px-36 ease-in-out overflow-hidden text-gray-400 text-lg ${
                    activePanels.includes(panel.id) ? 'max-h-screen py-5' : 'max-h-0'
                  }`}
                >
                  {panel.id === 5 ? formattedContent5 : panel.content}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CERTIFIKACIJA */}
      {activeButton === 3 && (
        <section
          className='bg-[#24262B] text-white px-5 md:py-5 py-2 leading-8 text-2xl transition-all duration-300'
          id='certifikacija'
        >
          <div className='flex flex-col items-center justify-between gap-6 p-2 md:flex-row'>
            <div className='space-y-5 md:w-3/5 2xl:p-12'>
              <h2 className='text-3xl font-bold text-center md:text-4xl'>Certifikacija</h2>
              <p className='text-lg font-semibold text-gray-400 md:text-xl'>
                Člankom 206. Zakona o osnovama sigurnosti prometa na cestama u BiH („Službeni glasnik BiH“, broj 6/06.,
                75/06. i 44/07.), propisano je da motorna i priključna vozila koja se pojedinačno proizvode,
                prepravljaju ili popravljaju u većem obimu ili su im oštećeni sklopovi i uređaji značajni za sigurno
                sudjelovanje u prometu na cestama prije puštanja u promet, moraju biti podvrgnuta ocjenjivanju
                usklađenosti konstrukcijskih i sigurnosnih karakteristika s odgovarajućim važećim propisima u BiH i na
                osnovu pozitivnih rezultata izdaje se uvjerenje (certifikat).
              </p>
            </div>
            <div className=''>
              <ExportedImage src='/images/certifikacija.jpg' alt='certifikacija' width={1500} height={1000} />
            </div>
          </div>

          <div className='py-10 md:mt-6 md:px-36'>
            <div className='mb-6 space-y-6'>
              <h2 className='text-lg md:text-xl'>
                Kako je novost ovakav oblik organizacije na bosanskohercegovačkom tlu, pojašnjavamo što zapravo radi
                organizacija prilikom provedbe procesa certificiranja.
              </h2>
              <p className='text-lg font-semibold text-gray-400 md:text-xl'>
                Prema navedenom Zakonu ocjenjivanje usklađenosti obavlja organizacija za certificiranje vozila, a skladu
                sa Pravilnikom o certificiranju vozila i uvjetima koje organizacije za certificiranje vozila moraju
                ispuniti („Službeni glasnik BiH“ broj 41/08).
              </p>
            </div>
            {/* BROJEVI */}
            <div className='space-y-12 text-lg md:text-xl'>
              <h2>
                Pregled ispitivanja iz oblasti certificiranja iz oblasti certificiranja, prema članku 5. Pravilnika,
                obuhvaćaju sljedeće vrste ispitivanja i certificiranja:
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-y-0 md:gap-6 md:justify-items-center place-items-start 2xl:gap-12'>
                <div className='grid flex-row items-center justify-center grid-cols-10 col-span-4 md:flex md:col-span-1 md:flex-col gap-x-4 md:gap-0 md:space-y-3 '>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] md:w-12 md:h-12 w-8 h-8 md:pt-2 text-center col-span-1'>
                    1
                  </span>
                  <span className='col-span-9 text-lg font-semibold 2xl:px-20'>Identifikacija vozila.</span>
                </div>

                <div className='grid flex-row items-center justify-center grid-cols-10 col-span-4 md:flex md:col-span-1 md:flex-col gap-x-4 md:gap-0 md:space-y-3 '>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] md:w-12 md:h-12 w-8 h-8 md:pt-2 text-center col-span-1'>
                    2
                  </span>
                  <span className='col-span-9 text-lg font-semibold text-left md:text-center 2xl:px-20'>
                    Namjenske prepravke i rekonstrukcije vozila.
                  </span>
                </div>

                <div className='grid flex-row items-center justify-center grid-cols-10 col-span-4 md:flex md:col-span-1 md:flex-col gap-x-4 md:gap-0 md:space-y-3 '>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] md:w-12 md:h-12 w-8 h-8 md:pt-2 text-center col-span-1'>
                    3
                  </span>
                  <span className='col-span-9 text-lg font-semibold text-left md:text-center 2xl:px-20'>
                    Ugradnja novih sklopova, uređaja i opreme za vozila.
                  </span>
                </div>

                <div className='grid flex-row items-center justify-center grid-cols-10 col-span-4 md:flex md:col-span-1 md:flex-col gap-x-4 md:gap-0 md:space-y-3 '>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] md:w-12 md:h-12 w-8 h-8 md:pt-2 text-center col-span-1'>
                    4
                  </span>
                  <span className='col-span-9 text-lg font-semibold text-left md:text-center 2xl:px-20'>
                    Rekonstrukcija vozila sa pogonom motora na alternativna goriva.
                  </span>
                </div>

                <div className='grid flex-row items-center justify-center grid-cols-10 col-span-4 md:flex md:flex-col md:gap-0 md:col-span-2 md:space-y-3'>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] md:w-12 md:h-12 w-8 h-8 md:pt-2 text-center col-span-1'>
                    5
                  </span>
                  <span className='col-span-9 text-lg font-semibold text-left md:text-center 2xl:px-36'>
                    Certificiranje vozila za prijevoz opasnih materija u skladu sa međunarodnim sporazumom o prijevozu
                    opasnih materija ADR.
                  </span>
                </div>

                <div className='grid flex-row items-center justify-center grid-cols-10 col-span-4 md:flex md:flex-col gap-x-4 md:gap-0 md:col-span-2 md:space-y-3'>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] md:w-12 md:h-12 w-8 h-8 md:pt-2 text-center col-span-1'>
                    6
                  </span>
                  <span className='col-span-9 text-lg font-semibold text-left md:text-center 2xl:px-36'>
                    Certificiranje vozila za prijevoz lako kvarljive robe u skladu sa međunarodnim sporazumom o
                    prijevozu lako kvarljive robe ADP.
                  </span>
                </div>

                <div className='grid flex-row items-center justify-center grid-cols-10 col-span-4 md:flex md:flex-col md:col-start-2 gap-x-4 md:gap-0 md:col-end-4 md:space-y-3'>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] md:w-12 md:h-12 w-8 h-8 md:pt-2 text-center col-span-1'>
                    7
                  </span>
                  <span className='col-span-9 text-lg font-semibold text-left md:text-center 2xl:px-36'>
                    Certificiranje novih konstrukcija i pojedinačno proizvedenih vozila.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAHOGRAFI */}
      {activeButton === 4 && (
        <section
          className='bg-[#171B29] text-white px-5 md:py-5 py-2 leading-8 text-xl md:text-2xl text-center'
          id='tahografi'
        >
          <h2 className='mt-4 mb-5 text-3xl font-bold md:mt-10 md:text-4xl'>Tahografi</h2>
          <p className=''>U Ganjgo-line doo - RADIONICI ZA TAHOGRAFE nudimo Vam</p>
          <div className='grid grid-cols-12 gap-2 p-2 md:gap-6 md:p-10'>
            <div className='bg-[#0219AC] p-2 md:p-6 md:col-start-3 md:col-end-7 col-start-1 col-end-13 flex items-center justify-center'>
              <p>Baždarenje (ispitivanje) svih vrsta analognih i digitalnih tahografa</p>
            </div>
            <div className='bg-[#0219AC] p-2 md:p-6 md:col-start-7 md:col-end-11 col-start-1 col-end-13 flex items-center justify-center'>
              <p>Najkvalitetnije i najpovoljnije servisiranje tahografa navedenih proizvođača</p>
            </div>
            <div className='bg-[#0219AC] p-2 md:p-6 md:col-start-3 md:col-end-7 col-start-1 col-end-13 flex items-center justify-center'>
              <p>Ugradnju svih vrsta tahografa</p>
            </div>
            <div className='bg-[#0219AC] p-2 md:p-6 md:col-start-7 md:col-end-11 col-start-1 col-end-13 flex items-center justify-center'>
              <p>Preuzimanje podataka sa memorijskih kartica i memorije digitalnih tahografa</p>
            </div>
          </div>
          <div className='pb-4 md:pb-0 md:mb-10'>
            <h2 className='mt-6 mb-5 text-2xl font-bold md:mt-10 md:text-3xl'>
              NOVO U PONUDI I MEĐU PRVIM U BIH BAŽDARENJE PAMETNIH- SMART TAHOGRAFA
            </h2>
            <p>Za sve naše klijente vršimo usluge BESPLATNO preuzimanja podataka sa tahografa i vozačkih kartica</p>
          </div>
        </section>
      )}

      {/* VATROGASNI APARATI */}
      {activeButton === 5 && (
        <section
          className='bg-[#24262B] text-white px-5 md:py-5 py-2 leading-8 text-2xl transition-all duration-300'
          id='vatrogasni'
        >
          <div className='flex flex-col items-center justify-between gap-6 p-2 md:flex-row'>
            <div className='space-y-5 md:w-3/5 2xl:p-12'>
              <h2 className='text-3xl font-bold text-center md:text-4xl'>Vatrogasni aparati</h2>
              <p className='text-lg font-semibold text-gray-400 md:text-xl'>
                U sklopu našeg objekta posjedujemo savremenu radionicu za servisiranje i baždarenje vatrogasnih aparata.
              </p>
            </div>
            <div className=''>
              <ExportedImage src='/images/vatrogasno_3.jpg' alt='vatrogasno_3' width={1500} height={1000} />
            </div>
            <div></div>
          </div>
        </section>
      )}

      {/* TRANSPORT */}
      {activeButton === 6 && (
        <section
          className='bg-[#171B29] text-white 2xl:px-40 md:px-20 md:py-5 py-2 leading-8 text-2xl text-center'
          id='transport'
        >
          <h2 className='mt-4 text-4xl font-bold md:mt-10 md:mb-5'>Transport</h2>
          <div className='grid grid-cols-1 gap-8 p-2 mt-10 mb-10 md:p-0 md:grid-cols-5 md:gap-5 md:mt-20 md:mb-14 md:justify-items-center place-items-start'>
            <div className='flex flex-row items-center justify-center gap-3 md:gap-0 md:flex-col'>
              <div className='p-3 md:p-4 text-indigo-500 rounded-full bg-[#393e4e]'>
                <BsTruck size={30} />
              </div>
              <h2 className='text-lg font-semibold md:text-xl md:font-bold'>Kompletni transport do 105 m3</h2>
            </div>

            <div className='flex flex-row items-center justify-center gap-3 md:gap-0 md:flex-col'>
              <div className='p-3 md:p-4 text-indigo-500 rounded-full bg-[#393e4e]'>
                <BsTruck size={30} />
              </div>
              <h2 className='text-lg font-semibold md:text-xl md:font-bold'>Djelimični transport</h2>
            </div>

            <div className='flex flex-row items-center justify-center gap-3 md:gap-0 md:flex-col'>
              <div className='p-3 md:p-4 text-indigo-500 rounded-full bg-[#393e4e]'>
                <BsTruck size={30} />
              </div>
              <h2 className='text-lg font-semibold md:text-xl md:font-bold'>Dotovari</h2>
            </div>

            <div className='flex flex-row items-center justify-center gap-3 md:gap-0 md:flex-col'>
              <div className='p-3 md:p-4 text-indigo-500 rounded-full bg-[#393e4e]'>
                <BsTruck size={30} />
              </div>
              <h2 className='text-lg font-semibold md:text-xl md:font-bold'>ADR transporti roba</h2>
            </div>

            <div className='flex flex-row items-center justify-center gap-3 md:gap-0 md:flex-col'>
              <div className='p-3 md:p-4 text-indigo-500 rounded-full bg-[#393e4e]'>
                <BsTruck size={30} />
              </div>
              <h2 className='text-lg font-semibold md:text-xl md:font-bold'>Transport polovnih i novih auta</h2>
            </div>
          </div>
          <h2 className='md:py-6'>Usluge transporta na relacijama</h2>
          {/* ZASTAVE */}
          <div className='grid grid-cols-3 gap-10 mt-10 text-lg md:grid-cols-6 mb-14 justify-items-center md:text-2xl place-items-start'>
            <div className='flex flex-col items-center justify-center space-y-3'>
              <ExportedImage src='/images/icons/germany.png' alt='germany' width={50} height={50} />
              <p>Njemačka</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <ExportedImage src='/images/icons/netherlands.png' alt='netherlands' width={50} height={50} />
              <p>Holandija</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <ExportedImage src='/images/icons/belgium.png' alt='belgium' width={50} height={50} />
              <p>Belgija</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <ExportedImage src='/images/icons/france.png' alt='france' width={50} height={50} />
              <p>Francuska</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <ExportedImage src='/images/icons/spain.png' alt='spain' width={50} height={50} />
              <p>Španija</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <ExportedImage src='/images/icons/italy.png' alt='italy' width={50} height={50} />
              <p>Italija</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <ExportedImage src='/images/icons/czech-republic.png' alt='czech-republic' width={50} height={50} />
              <p>Češka</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <ExportedImage src='/images/icons/croatia.png' alt='croatia' width={50} height={50} />
              <p>Hrvatska</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <ExportedImage src='/images/icons/serbia.png' alt='serbia' width={50} height={50} />
              <p>Srbija</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <ExportedImage src='/images/icons/slovenia.png' alt='slovenia' width={50} height={50} />
              <p>Slovenija</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <ExportedImage src='/images/icons/switz.png' alt='switz' width={50} height={50} />
              <p>Švicarska</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <ExportedImage src='/images/icons/poland.png' alt='poland' width={50} height={50} />
              <p>Poljska</p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Usluge
