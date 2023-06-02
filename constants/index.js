import { BsBagCheck } from 'react-icons/bs'

export const vrsteUsluge = [
  {
    id: 1,
    Icon: BsBagCheck,
    title: 'Tehnički pregled',
    text: 'Na našem tehničkom pregledu dočekat će vas stručno i ljubazno osoblje sa vrhunskom kvalitetom usluge.',
    href: '#tehnicki',
  },
  {
    id: 2,
    Icon: BsBagCheck,
    title: 'Homologacija',
    text: 'Homologacija vozila je postupak potvrđivanja ocjene usklađenosti vozila sa zahtjevima propisa o homologaciji.',
    href: '#homologacija',
  },
  {
    id: 3,
    Icon: BsBagCheck,
    title: 'Certifikacija',
    text: 'Člankom 206. Zakona o osnovama sigurnosti prometa na cestama u BiH ("Službeni glasnik BiH", broj 6/06, 75/06)',
    href: '#certifikacija',
  },
  {
    id: 4,
    Icon: BsBagCheck,
    title: 'Tahografi',
    text: 'U Ganjgo line doo - RADIONICI ZA TAHOGRAFE nudimo Vam: baždarenje (ispitivanje) svih vrsta analognih...',
    href: '#tahografi',
  },
  {
    id: 5,
    Icon: BsBagCheck,
    title: 'Vatrogasni aparati',
    text: 'U sklopu našeg objekta posjedujemo savremenu radionicu za servisiranje i baždarenje vatrogasnih aparata.',
    href: '#vatrogasni',
  },
  {
    id: 6,
    Icon: BsBagCheck,
    title: 'Transport',
    text: 'Vrste transporta: Kompletni transport do 105 m3; Djelomični transport; Dotovari; ADR transporti roba.',
    href: '#transport',
  },
]

export const buttons = [
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

export const panels = [
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
    content:
      'Ukoliko ste prethodno provjerili zadovoljava li Vaše vozilo kriterije homologacije, tada nema nikakve bojazni. Rezultat pregleda će biti "Potvrda o usklađenosti pojedinačno pregledanog vozila". Nakon toga možete pristupiti carinjenju, a potom registraciji vozila.',
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

export const formattedContent5 = (
  <div>
    <ul className='list-disc'>
      <li>Prezime, ime, adresa i kontakt telefon (mobitel).</li>
      <li>Svrha doznake: USLUGA PROVJERE VOZILA i navesti broj šasije (17 brojki).</li>
      <li>Primalac: GANJGOLINE d.o.o. 203. brigade br. 88 Matuzići.</li>
    </ul>
    <p>
      Uplatnicu sa podacima poslati na fax broj 033 774 897 ili uplatnicu skenirati i poslati na e-mail adresu:
      midhat@ganjgoline.com. U cilju što bržeg odgovora na Vaš upit, poželjno je navesti Vaš broj fax-a ili e-mail
      adresu na koju ćemo odgovoriti. U suprotnom, pismeni odgovor će biti proslijeđen putem pošte na adresu navedenu na
      uplatnici.
    </p>
  </div>
)
