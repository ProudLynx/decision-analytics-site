import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold">Павел Шпилевский</p>
          <p className="mt-2 text-sm text-muted">
            Независимый аналитик управленческих решений.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Навигация</p>
          <ul className="mt-2 space-y-2 text-sm text-muted">
            <li>
              <Link href="/services">Услуги</Link>
            </li>
            <li>
              <Link href="/cases">Кейсы</Link>
            </li>
            <li>
              <Link href="/privacy">Политика конфиденциальности</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Контакты</p>
          <p className="mt-2 text-sm text-muted">hello@shpilevsky-analytics.ru</p>
          <p className="text-sm text-muted">+7 (999) 123-45-67</p>
        </div>
      </div>
    </footer>
  );
}
