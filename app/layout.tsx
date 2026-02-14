import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'), // TODO: замените на домен проекта
  title: 'Павел Шпилевский — Независимый аналитик управленческих решений',
  description:
    'Проясняю экономику, риски и сценарии, чтобы управленческие решения были прозрачными и управляемыми.',
  openGraph: {
    title: 'Павел Шпилевский — Независимый аналитик управленческих решений',
    description:
      'Независимая аналитика для CEO, коммерческих директоров и руководителей проектов.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://example.com'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
