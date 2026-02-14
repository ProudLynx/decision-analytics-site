import Link from 'next/link';

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">Независимая аналитика</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
        Независимый аналитик управленческих решений
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted">
        Проясняю экономику, риски и сценарии, чтобы решение было управляемым.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/contacts" className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white">
          Запросить разбор
        </Link>
        <Link
          href="/checklist.pdf"
          className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold"
        >
          Скачать чек-лист
        </Link>
      </div>
    </section>
  );
}
