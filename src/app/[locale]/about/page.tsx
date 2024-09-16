import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function AboutPage({params: {locale}}:{params: {locale:string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('About');
  
  return (
    <div className='mt-24'>
      <h1>{t('text')}</h1>
    </div>
  );
}