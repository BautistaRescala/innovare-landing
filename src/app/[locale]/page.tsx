import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function HomePage({params: {locale}}:{params: {locale:string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('LoremIpsum');
  return (
    <div className='mt-24'>
      <h1 className="m-24">{t('text')}</h1>
    </div>
  );
}