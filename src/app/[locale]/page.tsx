import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import  Image  from 'next/image';
import { Outfit } from "next/font/google"

const contentfont = Outfit({subsets:['latin']})

export default function HomePage({params: {locale}}:{params: {locale:string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('HomePage');
  return (
    <div className='mt-20'>
      <div  className='flex pl-10 justify-between h-[1200px]'>
        <p className={`${contentfont.className} pt-16 max-w-[680px] text-6xl z-10`}
        >{t.rich("applications",{br:() => <br></br>})}</p>
        <div className="flex-none relative z-10 before:absolute before:w-full before:h-full before:bg-gradient-to-l from-transparent to-white">
        <Image src="/homepage1.jpg" alt="officePhoto" width={400} height={585}
        className=""></Image>
        </div>
      </div>
    </div>
  );
}