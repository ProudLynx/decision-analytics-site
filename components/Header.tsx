import Link from 'next/link';

const navItems = [
  { href: '/about', label: 'Обо мне' },
  { href: '/services', label: 'Услуги' },
  { href: '/cases', label: 'Кейсы' },
  { href: '/blog', label: 'Блог' },
  { href: '/contacts', label: 'Контакты' }
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-wide">
          Павел Шпилевский
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacts"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-black"
        >
          Запросить разбор
        </Link>
      </div>
    </header>
  );
}
