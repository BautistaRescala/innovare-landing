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
      <div  className='flex pl-10 justify-between'>
        <p className={`${contentfont.className} pt-16 max-w-[680px] text-6xl z-10`}
        >{t.rich("applications",{br:() => <br></br>})}</p>
        <div className="hidden md:block flex-none relative z-10 before:absolute before:w-full before:h-full before:bg-gradient-to-b from-transparent from-0% to-98% to-white">
          <div className="flex-none z-15 absolute w-full h-full bg-gradient-to-r from-white to-transparent from-0% to-30%"></div>
          <Image src="/homepage1.jpg" alt="officePhoto" width={520} height={676}
          className=""></Image>
          </div>
      </div>
      <div className="h-[1200px] bg-pink-600"></div>
    </div>
  );
}