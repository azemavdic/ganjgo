import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsBagCheck, BsTruck } from 'react-icons/bs'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const vrsteUsluge = [
  {
    id: 1,
    Icon: BsBagCheck,
    title: 'Tehnički pregled',
    text: 'Na našem tehničkom pregledu dočekat će vas stručno i ljubazno osoblje sa vrhunskom kvalitetom usluge.',
  },
  {
    id: 2,
    Icon: BsBagCheck,
    title: 'Homologacija',
    text: 'Homologacija vozila je postupak potvrđivanja ocjene usklađenosti vozila sa zahtjevima propisa o homologaciji.',
  },
  {
    id: 3,
    Icon: BsBagCheck,
    title: 'Certifikacija',
    text: 'Člankom 206. Zakona o osnovama sigurnosti prometa na cestama u BiH ("Službeni glasnik BiH", broj 6/06, 75/06)',
  },
  {
    id: 4,
    Icon: BsBagCheck,
    title: 'Tahografi',
    text: 'U Ganjgo line doo - RADIONICI ZA TAHOGRAFE nudimo Vam: baždarenje (ispitivanje) svih vrsta analognih...',
  },
  {
    id: 5,
    Icon: BsBagCheck,
    title: 'Vatrogasni aparati',
    text: 'U sklopu našeg objekta posjedujemo savremenu radionicu za servisiranje i baždarenje vatrogasnih aparata.',
  },
  {
    id: 6,
    Icon: BsBagCheck,
    title: 'Transport',
    text: 'Vrste transporta: Kompletni transport do 105 m3; Djelomični transport; Dotovari; ADR transporti roba.',
  },
]

const buttons = [
  {
    id: 1,
    title: 'Prikaži sve',
  },
  {
    id: 2,
    title: 'Tehnički pregled',
  },
  {
    id: 3,
    title: 'Homologacija',
  },
  {
    id: 4,
    title: 'Certifikacija',
  },
  {
    id: 5,
    title: 'Tahografi',
  },
  {
    id: 6,
    title: 'Vatrogasni aparati',
  },
  {
    id: 7,
    title: 'Transport',
  },
]

const panels = [
  {
    id: 1,
    title: 'Od kada postoji homologacija vozila?',
    content:
      'Uvođenje homologacije vozila u Bosni i Hercegovini uslijedilo je 1. januara 2011., kada je i započela primjena propisa. U ostalim evropskim zemljama ovo je uobičajeni postupak koji se provodi već desetljećima.',
  },
  {
    id: 2,
    title: 'Koja vozila zadovoljavaju kriterije homologacije?',
    content:
      'Za rabljena vozila svih marki okvirni pregled prolaznosti vozila opisan je u brošuri koju izdaje konzorcij Centar za automobilsko inženjerstvo d.o.o. Banja Luka, Informacioni Inžinjering Sirius 2010 d.o.o. Banja Luka i Centar za cestovni promet d.o.o. Sarajevo i na taj način ih ovlastilo za poslove homologacije vozila, dijelova uređaja i opreme vozila. Ipak, ukoliko se odlučite za uvoz vozila, a prije same kupovine, preporučujemo da kod nas kao ovlaštenog zastupnika provjerite mogućnost uvoza željenog vozila.',
  },
  {
    id: 3,
    title: 'Koja vozila podliježu provjeri homologacijske usklađenosti?',
    content:
      'Sva vozila koja se po prvi put registruju u Bosni i Hercegovini, uz određene izuzetke (npr. diplomatska predstavništva). Za nova vozila koja su kupljena u mreži naših ovlaštenih trgovaca, navedeni postupak obavlja ovlašteni uvoznik. U slučaju samostalnog uvoza vozila treba provesti tzv. postupak pojedinačne provjere usklađenosti vozila.',
  },
  {
    id: 4,
    title: 'Kako izvršiti provjeru prije odluke o kupovini vozila?',
    content: '',
  },
  {
    id: 5,
    title: 'Primjer ispunjenje uplatnice',
    content: '',
  },
  {
    id: 6,
    title: 'Vozilo je neusklađeno / Vozilo je usklađeno',
    content:
      'U slučaju da vozilo ne zadovoljava kriterije homologacije, preporučujemo odustajanje od kupovine, jer takvo se vozilo neće moći niti ocariniti niti registrovati u BiH; povratak u državu gdje je kupljeno također neće biti moguć ili će uzrokovati velike financijske izdatke. Ukoliko vozilo zadovoljava kriterije homologacije, nakon što obavite kupoprodajne procedure te na graničnom prijelazu prijavite uvoz vozila, možete se obratiti Vama najbližem tehničkom servisu ovlaštenom za pregled vozila, koji će online vezom zatražiti izdavanje "Potvrde proizvođača". Potvrda proizvođača je dokument koji, sa svojim tehničkim i homologacijskim podacima, služi za obavljanje homologacijskog pregleda na ovlaštenim ispitnim mjestima',
  },
]

const Usluge = () => {
  const [activeButton, setActiveButton] = useState(1)
  const [activePanels, setActivePanels] = useState([1, 2])

  function handleClickButton(buttonId) {
    setActiveButton(buttonId)
  }

  function handleClickPanel(panelId) {
    setActivePanels((prevState) => {
      if (prevState.includes(panelId)) {
        return prevState.filter((id) => id !== panelId)
      } else {
        return [...prevState, panelId]
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
      <Header type='image' path='/images/usluge.jpg' classes='-top-40 2xl:-top-40'>
        <Navbar>
          <div className='z-20 flex flex-col items-center justify-center p-20 '>
            <div className='w-1/2 text-center space-y-9'>
              <h2 className='text-4xl font-bold tracking-wider 2xl:text-5xl'>Usluge</h2>
              <p className='text-lg font-semibold tracking-wider 2xl:text-2xl'>
                Dolaskom u Ganjgo centar dočekaće Vas stručno i ljubazno osoblje, brza i kvalitetna usluga i povoljne
                cijene!
              </p>
            </div>
          </div>
        </Navbar>
      </Header>

      {/* SVE USLUGE */}
      <section className='bg-[#171B29] text-white px-16 pt-14 text-lg leading-8'>
        <div className='grid grid-cols-3 gap-16 justify-items-center'>
          {vrsteUsluge.map((el) => (
            <div className='flex flex-col items-center space-y-5 text-center 2xl:w-1/2' key={el.id}>
              <div className='p-4 text-rose-600 rounded-full bg-[#393e4e]'>
                <el.Icon size={30} />
              </div>
              <h2 className='text-xl font-bold'>{el.title}</h2>
              <p>{el.text}</p>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center gap-5 pb-5 mt-20 text-sm text-gray-500 transition-all duration-300 2xl:text-xl'>
          {buttons.map((el) => (
            <button
              key={el.id}
              onClick={() => handleClickButton(el.id)}
              className={el.id === activeButton && 'text-white'}
            >
              {el.title}
            </button>
          ))}
        </div>
      </section>

      {/* TEHNIČKI PREGLED */}
      {(activeButton === 1 || activeButton === 2) && (
        <section className='bg-[#24262B] text-white px-5 py-5 leading-8 text-2xl transition-all duration-300'>
          <div className='flex items-center justify-between gap-6 p-2'>
            <div className='w-3/5 space-y-5 2xl:p-12'>
              <h2 className='text-4xl font-bold text-center'>Tehnički pregled</h2>
              <p className='text-xl font-semibold text-gray-400'>
                Na našem tehničkom pregledu dočekat će vas stručno i ljubazno osoblje sa vrhunskom kvalitetom
                usluge.Nudimo sve vrste tehničkog pregleda: putnička vozila teretna, priključna, autobusi, radna vozila,
                radne mašine...
              </p>
            </div>
            <div className=''>
              <Image src='/images/tehnicki_pregled.jpg' alt='tehnicki_pregled' width={1500} height={1000} />
            </div>
            <div></div>
          </div>
        </section>
      )}

      {/* HOMOLOGACIJA */}
      {(activeButton === 1 || activeButton === 3) && (
        <section className='bg-[#171B29] text-white px-5 py-5 leading-8 text-2xl'>
          <div className='flex flex-row-reverse items-center justify-between gap-6 p-2'>
            <div className='w-3/5 space-y-5 2xl:p-12'>
              <h2 className='text-4xl font-bold text-center'>Homologacija</h2>
              <p className='text-xl font-semibold text-gray-400'>
                Homologacija vozila je postupak potvrđivanja ocjene usklađenosti vozila sa zahtjevima propisa o
                homologaciji koji se primjenjuju u Bosni i Hercegovini. Drugim riječima, homologacija vozila predstavlja
                provjeru bitnih sklopova vozila, koji direktno ili indirektno utiču na okoliš i sigurnost putnika (npr.
                motor, kočnice, buka, sigurnosni pojasevi itd.).
              </p>
            </div>
            <div className=''>
              <Image src='/images/tehnicki_pregled.jpg' alt='tehnicki_pregled' width={1500} height={1000} />
            </div>
          </div>
          <div className='w-full mt-10 space-y-2'>
            {panels.map((panel) => (
              <div key={panel.id} className=''>
                <button
                  className='w-full py-4 px-12 flex items-center justify-between text-xl font-bold text-left rounded-lg bg-[#2D63F6] hover:bg-[#2D63F6]/80 focus:outline-none'
                  onClick={() => handleClickPanel(panel.id)}
                >
                  <span>{panel.title}</span>
                  {activePanels.includes(panel.id) ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <div
                  className={`transition-all duration-300 px-36 ease-in-out overflow-hidden text-gray-400 text-lg ${
                    activePanels.includes(panel.id) ? 'max-h-screen py-5' : 'max-h-0'
                  }`}
                >
                  {panel.content}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CERTIFIKACIJA */}
      {(activeButton === 1 || activeButton === 4) && (
        <section className='bg-[#24262B] text-white px-5 py-5 leading-8 text-2xl transition-all duration-300'>
          <div className='flex items-center justify-between gap-6 p-2'>
            <div className='w-3/5 space-y-5 2xl:p-12'>
              <h2 className='text-4xl font-bold text-center'>Certifikacija</h2>
              <p className='text-xl font-semibold text-gray-400'>
                Člankom 206. Zakona o osnovama sigurnosti prometa na cestama u BiH („Službeni glasnik BiH“, broj 6/06.,
                75/06. i 44/07.), propisano je da motorna i priključna vozila koja se pojedinačno proizvode,
                prepravljaju ili popravljaju u većem obimu ili su im oštećeni sklopovi i uređaji značajni za sigurno
                sudjelovanje u prometu na cestama prije puštanja u promet, moraju biti podvrgnuta ocjenjivanju
                usklađenosti konstrukcijskih i sigurnosnih karakteristika s odgovarajućim važećim propisima u BiH i na
                osnovu pozitivnih rezultata izdaje se uvjerenje (certifikat).
              </p>
            </div>
            <div className=''>
              <Image src='/images/tehnicki_pregled.jpg' alt='tehnicki_pregled' width={1500} height={1000} />
            </div>
          </div>

          <div className='py-10 mt-6 px-36'>
            <div className='mb-6 space-y-6'>
              <h2>
                Kako je novost ovakav oblik organizacije na bosanskohercegovačkom tlu, pojašnjavamo što zapravo radi
                organizacija prilikom provedbe procesa certificiranja.
              </h2>
              <p className='text-xl font-semibold text-gray-400'>
                Prema navedenom Zakonu ocjenjivanje usklađenosti obavlja organizacija za certificiranje vozila, a skladu
                sa Pravilnikom o certificiranju vozila i uvjetima koje organizacije za certificiranje vozila moraju
                ispuniti („Službeni glasnik BiH“ broj 41/08).
              </p>
            </div>
            {/* BROJEVI */}
            <div className='space-y-12'>
              <h2>
                Pregled ispitivanja iz oblasti certificiranja iz oblasti certificiranja, prema članku 5. Pravilnika,
                obuhvaćaju sljedeće vrste ispitivanja i certificiranja:
              </h2>
              <div className='grid grid-cols-4 gap-6 justify-items-center place-items-start 2xl:gap-12'>
                <div className='flex flex-col items-center justify-center space-y-3'>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] w-12 h-12 text-center pt-2'>1</span>
                  <span className='text-lg font-semibold 2xl:px-20'>Identifikacija vozila.</span>
                </div>

                <div className='flex flex-col items-center justify-center space-y-3'>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] w-12 h-12 text-center pt-2'>2</span>
                  <span className='text-lg font-semibold text-center 2xl:px-20'>
                    Namjenske prepravke i rekonstrukcije vozila.
                  </span>
                </div>

                <div className='flex flex-col items-center justify-center space-y-3'>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] w-12 h-12 text-center pt-2'>3</span>
                  <span className='text-lg font-semibold text-center 2xl:px-20'>
                    Ugradnja novih sklopova, uređaja i opreme za vozila.
                  </span>
                </div>

                <div className='flex flex-col items-center justify-center space-y-3'>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] w-12 h-12 text-center pt-2'>4</span>
                  <span className='text-lg font-semibold text-center 2xl:px-20'>
                    Rekonstrukcija vozila sa pogonom motora na alternativna goriva.
                  </span>
                </div>

                <div className='flex flex-col items-center justify-center col-span-2 space-y-3'>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] w-12 h-12 text-center pt-2'>5</span>
                  <span className='text-lg font-semibold text-center 2xl:px-36'>
                    Certificiranje vozila za prijevoz opasnih materija u skladu sa međunarodnim sporazumom o prijevozu
                    opasnih materija ADR.
                  </span>
                </div>

                <div className='flex flex-col items-center justify-center col-span-2 space-y-3'>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] w-12 h-12 text-center pt-2'>6</span>
                  <span className='text-lg font-semibold text-center 2xl:px-36'>
                    Certificiranje vozila za prijevoz lako kvarljive robe u skladu sa međunarodnim sporazumom o
                    prijevozu lako kvarljive robe ADP.
                  </span>
                </div>

                <div className='flex flex-col items-center justify-center col-start-2 col-end-4 space-y-3'>
                  <span className='text-indigo-500 rounded-full bg-[#393e4e] w-12 h-12 text-center pt-2'>7</span>
                  <span className='text-lg font-semibold text-center 2xl:px-36'>
                    Certificiranje novih konstrukcija i pojedinačno proizvedenih vozila.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAHOGRAFI */}
      {(activeButton === 1 || activeButton === 5) && (
        <section className='bg-[#171B29] text-white px-5 py-5 leading-8 text-2xl text-center'>
          <h2 className='mt-10 mb-5 text-4xl font-bold'>Tahografi</h2>
          <p>U Ganjgo-line doo - RADIONICI ZA TAHOGRAFE nudimo Vam</p>
          <div className='grid grid-cols-12 gap-6 p-10'>
            <div className='bg-[#0219AC] p-6 col-start-3 col-end-7 flex items-center justify-center'>
              <p>Baždarenje (ispitivanje) svih vrsta analognih i digitalnih tahografa</p>
            </div>
            <div className='bg-[#0219AC] p-6 col-start-7 col-end-11 flex items-center justify-center'>
              <p>Najkvalitetnije i najpovoljnije servisiranje tahografa navedenih proizvođača</p>
            </div>
            <div className='bg-[#0219AC] p-6 col-start-3 col-end-7 flex items-center justify-center'>
              <p>Ugradnju svih vrsta tahografa</p>
            </div>
            <div className='bg-[#0219AC] p-6 col-start-7 col-end-11 flex items-center justify-center'>
              <p>Preuzimanje podataka sa memorijskih kartica i memorije digitalnih tahografa</p>
            </div>
          </div>
          <div className='mb-10'>
            <h2 className='mt-10 mb-5 text-3xl font-bold'>
              NOVO U PONUDI I MEĐU PRVIM U BIH BAŽDARENJE PAMETNIH- SMART TAHOGRAFA
            </h2>
            <p>Za sve naše klijente vršimo usluge BESPLATNO preuzimanja podataka sa tahografa i vozačkih kartica</p>
          </div>
        </section>
      )}

      {/* TEHNIČKI PREGLED */}
      {(activeButton === 1 || activeButton === 6) && (
        <section className='bg-[#24262B] text-white px-5 py-5 leading-8 text-2xl transition-all duration-300'>
          <div className='flex items-center justify-between gap-6 p-2'>
            <div className='w-3/5 space-y-5 2xl:p-12'>
              <h2 className='text-4xl font-bold text-center'>Vatrogasni aparati</h2>
              <p className='text-xl font-semibold text-gray-400'>
                U sklopu našeg objekta posjedujemo savremenu radionicu za servisiranje i baždarenje vatrogasnih aparata.
              </p>
            </div>
            <div className=''>
              <Image src='/images/tehnicki_pregled.jpg' alt='tehnicki_pregled' width={1500} height={1000} />
            </div>
            <div></div>
          </div>
        </section>
      )}

      {/* TRANSPORT */}
      {(activeButton === 1 || activeButton === 7) && (
        <section className='bg-[#171B29] text-white 2xl:px-40 px-20 py-5 leading-8 text-2xl text-center'>
          <h2 className='mt-10 mb-5 text-4xl font-bold'>Transport</h2>
          <div className='grid grid-cols-5 gap-5 mt-20 mb-14 justify-items-center place-items-start'>
            <div className='flex flex-col items-center justify-center'>
              <div className='p-4 text-indigo-500 rounded-full bg-[#393e4e]'>
                <BsTruck size={30} />
              </div>
              <h2 className='text-xl font-bold'>Kompletni transport do 105 m3</h2>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div className='p-4 text-indigo-500 rounded-full bg-[#393e4e]'>
                <BsTruck size={30} />
              </div>
              <h2 className='text-xl font-bold'>Djelimični transport</h2>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div className='p-4 text-indigo-500 rounded-full bg-[#393e4e]'>
                <BsTruck size={30} />
              </div>
              <h2 className='text-xl font-bold'>Dotovari</h2>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div className='p-4 text-indigo-500 rounded-full bg-[#393e4e]'>
                <BsTruck size={30} />
              </div>
              <h2 className='text-xl font-bold'>ADR transporti roba</h2>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div className='p-4 text-indigo-500 rounded-full bg-[#393e4e]'>
                <BsTruck size={30} />
              </div>
              <h2 className='text-xl font-bold'>Transport polovnih i novih auta</h2>
            </div>
          </div>
          <h2>Usluge transporta na relacijama</h2>

          <div className='grid grid-cols-6 gap-10 mt-10 mb-14 justify-items-center place-items-start'>
            <div className='flex flex-col items-center justify-center space-y-3'>
              <Image src='/images/icons/germany.png' alt='germany' width={50} height={50} />
              <p>Njemačka</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <Image src='/images/icons/netherlands.png' alt='netherlands' width={50} height={50} />
              <p>Holandija</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <Image src='/images/icons/belgium.png' alt='belgium' width={50} height={50} />
              <p>Belgija</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <Image src='/images/icons/france.png' alt='france' width={50} height={50} />
              <p>Francuska</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <Image src='/images/icons/spain.png' alt='spain' width={50} height={50} />
              <p>Španija</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <Image src='/images/icons/italy.png' alt='italy' width={50} height={50} />
              <p>Italija</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <Image src='/images/icons/czech-republic.png' alt='czech-republic' width={50} height={50} />
              <p>Češka</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <Image src='/images/icons/croatia.png' alt='croatia' width={50} height={50} />
              <p>Hrvatska</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <Image src='/images/icons/serbia.png' alt='serbia' width={50} height={50} />
              <p>Srbija</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <Image src='/images/icons/slovenia.png' alt='slovenia' width={50} height={50} />
              <p>Slovenija</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <Image src='/images/icons/switz.png' alt='switz' width={50} height={50} />
              <p>Švicarska</p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-3'>
              <Image src='/images/icons/poland.png' alt='poland' width={50} height={50} />
              <p>Poljska</p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Usluge
