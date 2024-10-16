import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Outfit } from "next/font/google";
import { Link } from '@/i18n/routing';
import { CircleStackIcon,CodeBracketIcon,BeakerIcon,CommandLineIcon,UserPlusIcon } from '@heroicons/react/24/outline';
const contentfont = Outfit({subsets:['latin']})

export default function HomePage({params: {locale}}:{params: {locale:string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('HomePage');
  return (
    <div>
      <div className="mt-20 bg-[url('/homepage1.jpg')] bg-contain bg-no-repeat bg-right">
        <div className="bg-gradient-to-r from-white to-transparent from-30% md:from-65% to-100%">
          <div className="bg-gradient-to-t from-white to-transparent from-5% to-100%">
            <div className='pl-10 pr-10 pb-48'>
              <p className={`${contentfont.className} pt-16 max-w-[820px] text-5xl md:text-7xl`}
              >{t.rich("applications",{br:() => <br></br>})}</p>
              <button className={`${contentfont.className} text-2xl border-b-4 relative top-12 left-2 border-red-950 hover:text-red-950 transition-all`}>Ponte en contacto</button>
            </div>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <div>
        <p>Hello World!</p>        
      </div>
      {/* Servicios */}
      <div className="text-center">
        <p className={`${contentfont.className} text-center text-5xl font-normal mb-7 inline-block`}>Servicios Principales</p>
      </div>
      <div className={`${contentfont.className} flex-col md:flex-row  flex justify-between`}>
        <div className=" md:w-[28%] w-[80] mx-8 mt-8 mb-4 flex flex-col items-center text-center">
            <CommandLineIcon className="size-14 mb-1 text-orange-600"></CommandLineIcon>
            <p className='font-semibold text-3xl '>Desarrollo de Aplicaciones</p>
            <p className=" mt-5 px-8 mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel commodo neque, non ullamcorper augue. Proin risus justo, laoreet vitae rutrum a, aliquam non lacus. Vestibulum tristique elit tortor, id tincidunt nisi commodo non. Aliquam aliquam sit amet tellus a eleifen</p>
          </div>
          <div className=" md:w-[28%] w-[80] mx-8 mt-8 mb-4 flex flex-col items-center text-center">
            <UserPlusIcon className="size-14 mb-1 text-green-600"></UserPlusIcon>
            <p className='font-semibold text-3xl '>Staff Augmentation</p>
            <p className=" mt-5 px-8 mx-4">Staff augmentation is a flexible outsourcing strategy that allows companies to hire temporary skilled professionals to fill gaps in expertise or meet project demands. This approach enables quick scaling of the workforce while integrating contractors into existing teams, enhancing productivity without long-term commitments.</p>
          </div>
          <div className=" md:w-[28%] w-[80] mx-8 mt-8 mb-4 flex flex-col items-center text-center">
            <CircleStackIcon className="size-14 mb-1 text-blue-700"></CircleStackIcon>
            <p className='font-semibold text-3xl '>Gestión de Base de datos</p>
            <p className=" mt-5 px-8 mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel commodo neque, non ullamcorper augue. Proin risus justo, laoreet vitae rutrum a, aliquam non lacus. Vestibulum tristique elit tortor, id tincidunt nisi commodo non. Aliquam aliquam sit amet tellus a eleifen</p>
          </div>
      </div>
      <div className={`${contentfont.className} text-end px-8`}>
        <Link className="inline-block border-b-2 border-red-950 hover:text-red-700 pr-3" href="/services">Mas Información 🡒</Link>
      </div>
      <div className=" h-[1280px]"></div>
    </div>
    
  );
}