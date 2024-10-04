import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import  Image  from 'next/image';
import giraf from "@/assets/Girafa.jpg"
export default function HomePage({params: {locale}}:{params: {locale:string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('HomePage');
  return (
    <div className="">
      <Image
      src={giraf}
      alt='girafa'>
      </Image>
    </div>
    
  );
}