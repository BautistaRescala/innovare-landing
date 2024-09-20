import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import '@/globals.css';
import {routing} from '@/i18n/routing'
import {unstable_setRequestLocale} from 'next-intl/server';
import Nav from '@/components/nav/Nav';


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
      <body className="bg-gray-300">
        <NextIntlClientProvider messages={messages}>
          <Nav></Nav>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}