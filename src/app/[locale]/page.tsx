import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Outfit, Quicksand } from "next/font/google";
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import HomePageCarousel from '@/components/HomePageCarousel';
import { CircleStackIcon, CommandLineIcon, UserPlusIcon, ArrowRightIcon, ChatBubbleLeftRightIcon, ArrowsRightLeftIcon, CalendarDaysIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import ScrollButton from '@/components/ScrollButton';
import HomePageTab from '@/components/HomePageTab';
import PictureShowcase from '@/components/PictureShowcase';
const contentfont = Outfit({ subsets: ['latin'] })
const suitefont = Quicksand({ subsets: ['latin'] })

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('HomePage');
  return (
    <div>
      <div className="md:mt-20 mt-8 mb-24 bg-[url('/homepage1.jpg')] bg-contain bg-no-repeat bg-right">
        <div className="bg-gradient-to-r from-white to-transparent from-55% md:from-65% to-100%">
          <div className="bg-gradient-to-t from-white to-transparent from-5% to-100%">
            <div className='pl-10 pr-10 pb-48'>
              <p className={`${contentfont.className} pt-16 md:max-w-[820px] text-4xl md:text-7xl`}
              >{t.rich("applications", { br: () => <br></br> })}</p>
              <ScrollButton></ScrollButton>
            </div>
          </div>
        </div>
      </div>
      {/* Middle section */}
      {/* Servicios */}
      <div className="text-center">
        <p className={`${contentfont.className} text-center text-5xl font-normal mx-4 mb-7 inline-block`}>Servicios Principales</p>
      </div>
      <div className={`${contentfont.className} flex-col md:flex-row flex justify-between`}>
        <div className=" md:w-[28%] w-[80] mx-8 mt-8 mb-4 flex flex-col items-center text-center">
          <CommandLineIcon className="size-14 mb-1 text-orange-600"></CommandLineIcon>
          <p className='font-semibold text-3xl '>Desarrollo de Aplicaciones</p>
          <p className=" mt-5 px-8 mx-4 text-lg">Desarrollamos aplicaciones a nivel experto que se encajan a las necesidades de tu empresa. Nos integramos de manera facil y comoda a los sistemas de tu empresa para que obtengas los mejores resultados para tus requisitos.</p>
        </div>
        <div className=" md:w-[28%] w-[80] mx-8 mt-8 mb-4 flex flex-col items-center text-center">
          <UserPlusIcon className="size-14 mb-1 text-green-600"></UserPlusIcon>
          <p className='font-semibold text-3xl '>Staff Augmentation</p>
          <p className=" mt-5 px-8 mx-4 text-lg">Incorpore a su staff un equipo de profesionales dedicados y entrenados con la máxima innovación. Le proveemos las herramientas a tu empresa para impulsar tu desarrollo sin comprometer tu estructura a largo plazo.</p>
        </div>
        <div className=" md:w-[28%] w-[80] mx-8 mt-8 mb-4 flex flex-col items-center text-center">
          <CircleStackIcon className="size-14 mb-1 text-blue-700"></CircleStackIcon>
          <p className='font-semibold text-3xl '>Gestión de Base de datos</p>
          <p className=" mt-5 px-8 mx-4 text-lg">Simplificamos el analisis y manejo de estructuras complejas de datos. Aseguramos la seguridad, integridad y optimizacion de tus sistemas para mantener el apto funcionamiento de tus servicios.</p>
        </div>
      </div>
      <div className={`${contentfont.className} flex justify-center md:justify-end mt-3 mb-24`}>
        <div className="flex md:w-52 md:mx-24 hover:px-4 text-gray-800 hover:text-red-950 transition-all">
          <Link href="/services">
            <div className="flex flex-row justify-center items-center">
              <p className="text-lg inline-block">Mas Información</p>
              <ArrowRightIcon className="ml-2 w-5 h-5"></ArrowRightIcon>
            </div>
          </Link>
        </div>
      </div>
      {/* Tecnologies */}
      <div className="mb-24">
        <div className="text-center">
          <p className={`${contentfont.className} text-center text-2xl font-normal mx-4 mb-7 inline-block`}>Tecnologias</p>
        </div>
        <HomePageTab></HomePageTab>
      </div>
      {/* Productos */}
      <div className="text-center">
          <p className={`${contentfont.className} text-center text-5xl font-normal mx-4 mb-7 inline-block`}>Nuestros Productos</p>
        </div>
      <div className="mb-24">
        <div className="flex items-center justify-center">
          <Image src={"/accessband.png"} alt="accessband logo" height={154} width={154}></Image>
        </div>
        <div className="text-center">
          <p className={`${contentfont.className} text-center text-4xl font-extralight mx-4 mb-7 inline-block text-sky-950`}>Red social y controles de accessos privados</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="hidden md:block">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/m4_09h7uFRg?autoplay=1&mute=1&loop=1&playlist=m4_09h7uFRg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <div className={`${contentfont.className} md:ml-16  h-[315px] md:w-96 w-[85%]  flex flex-col justify-between`}>
            <div className="flex flex-row">
              <div>
                <ChatBubbleLeftRightIcon className="h-[85px] mx-1 text-cyan-950"></ChatBubbleLeftRightIcon>
              </div>
              <div>
                <p className="font-bold text-lg text-slate-900">Social</p>
                <p className="font-light text-md">Fotos, videos y comentarios de viajes para grupos privados de pasajeros y familiares.</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <ArrowsRightLeftIcon className="h-[85px] mx-1 text-cyan-950"></ArrowsRightLeftIcon>
              </div>
              <div>
                <p className="font-bold text-lg text-slate-900">Seguimiento</p>
                <p className="font-light text-md">Control de accesos NFC y QR con Fichas de datos individuales autogestionadas.</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div>
                <CalendarDaysIcon className="h-[85px] mx-1 text-cyan-950"></CalendarDaysIcon>
              </div>
              <div>
                <p className="font-bold text-lg text-slate-900">Organizacion de Eventos</p>
                <p className="font-light text-md">Facil seguimiento de itinerarios con una interfaz simplificada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* innovare suite */}
      <div className="flex justify-center items-center mb-24">
        <div className="bg-neutral-200 max-w-[1020px] rounded-lg shadow-lg">
          <div className="h-auto p-4 bg-white border-neutral-200 border-2 rounded-t-lg flex flex-col justify-center items-center">
            <Image src="innovare_raw.svg" alt="innovare suite logo" width={114} height={114} className="h-20 w-auto"></Image>
            <p className={`${suitefont.className} font-bold text-lg`}>Innovare Suite</p>
          </div>

          <div className={`${contentfont.className} flex flex-row`}>
            <div className="flex items-center flex-col bg-white font-normal text-lg w-[50%] rounded-sm shadow-md h-[410px] p-8 m-6">
              <div className="h-20 w-full flex items-center justify-center mb-5">
                <BookOpenIcon className="h-full w-full text-gray-700"></BookOpenIcon>
              </div>
              <p className=" text-justify  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae, praesentium dolores ipsum aperiam, dolor quam recusandae eius suscipit corporis illum voluptatem molestias nihil, tempora quod aspernatur at sint aut.</p>
              <div className="w-full h-full text-red-950  flex justify-end items-end p-4 font-light">
                <Link href="https://www.innovaresuite.com/#/" className="opacity-70 hover:opacity-100">Mas Informacion ↗</Link>
              </div>
            </div>
            <div className="w-[50%] m-6 flex justify-between items-center flex-col">
              <div className="mt-4 w-[80%] h-16 flex justify-center items-center rounded-sm shadow-lg text-center bg-white">
                <p className="bg-gradient-to-br from-red-700 from-5% via-red-950 to-99% to-red-400 bg-clip-text text-transparent text-xl">
                  Nuestros cursos de capacitacion
                </p>
              </div>
              <div className="mb-1">
                <PictureShowcase></PictureShowcase>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <div className="text-center">
        <p className={`${contentfont.className} text-center text-5xl font-normal mx-4 mb-7 inline-block`}>Testimonios</p>
      </div>
      <div className="h-[2px] bg-gradient-to-r from-white via-gray-300 to-white from-30% to-70% mb-8"></div>
      <HomePageCarousel></HomePageCarousel>
      {/* Footer */}
      <footer className="mt-16 mb-8 flex items-center flex-col h-80">
        <div className="border-zinc-200 border-b-2 w-[75%] mb-8"></div>
        <div className="">
          <Link href={"https://clutch.co/profile/innovare-software-agency#highlights"}>
            <Image className="w-[192px] h-auto" quality={100} src="/clutch.png" alt="clutch logo" height={500} width={900}></Image>
          </Link>
        </div>
        <div>
          <ul className="flex flex-row justify-around w-96">
            <li>
              <Link href={"https://www.instagram.com/innovaresoftwaresrl/"}>
                <Image src={"/instagram_logo.svg"} alt="instagram logo" width={20} height={20}></Image>
              </Link>
            </li>
            <li>
              <Link href={"https://www.facebook.com/innovaresoftsrl/"}>
                <Image src={"/facebook_logo.svg"} alt="facebook logo" width={20} height={20}></Image>
              </Link>
            </li>
            <li>
              <Link href={"https://twitter.com/InnovareSoftwa1"}>
                <Image src={"/x_logo.svg"} alt="twitter logo" width={20} height={20}></Image>
              </Link>
            </li>
            <li>
              <Link href={"https://www.linkedin.com/company/innovaresoftware/"}>
                <Image src={"/linkedin_logo.svg"} alt="linkedin logo" width={20} height={20}></Image>
              </Link>
            </li>
            <li>
              <Link href={"https://www.youtube.com/@innovaresoftwaresrl"}>
                <Image src={"/youtube_logo.svg"} alt="youtube logo" width={20} height={20}></Image>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center pt-4 text-center">
          <p className="pb-2">Habegger 1336 | Reconquista Santa Fe 3560 - Argentina</p>
          <p className="pb-2">Office: +54 3482 433287 | Email: info@innovare.com.ar</p>
          <p className="pb-2 font-bold">Copyright by 2024 Innovare Software SRL</p>
        </div>
      </footer>
    </div>
  );
}