import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import '@/globals.css';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import {routing} from '@/i18n/routing'
import {unstable_setRequestLocale} from 'next-intl/server';
import {useLocale, useTranslations} from 'next-intl';


export function generateStaticParams(){
  return routing.locales.map((locale) => ({locale}));
}


export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LocaleSwitcher></LocaleSwitcher>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}