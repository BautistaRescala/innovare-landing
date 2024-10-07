import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import  Image  from 'next/image';
import { Outfit } from "next/font/google"

const contentfont = Outfit({subsets:['latin']})

export default function HomePage({params: {locale}}:{params: {locale:string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('HomePage');
  return (
    <div>
      <div className="mt-20 md:bg-[url('/homepage1.jpg')] bg-contain bg-no-repeat bg-right">
        <div className="bg-gradient-to-r from-white to-transparent from-65% to-100%">
          <div className="bg-gradient-to-t from-white to-transparent from-5% to-100%">
            <div className='pl-10 pr-10 pb-48'>
              <p className={`${contentfont.className} pt-16 max-w-[680px] text-5xl md:text-7xl`}
              >{t.rich("applications",{br:() => <br></br>})}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pink-500 h-[1280px]"></div>
    </div>
    
  );
}