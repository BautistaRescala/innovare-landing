import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { unstable_setRequestLocale } from 'next-intl/server';
import useLocale from 'next-intl';



export default function HomePage({params: {locale}}:{params: {locale:string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('LocaleSwitcher');

  
  return (
    <div>
      <h1>{t('locale',{locale:locale })}</h1>
    </div>
  );
}