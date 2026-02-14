import { metadata } from './metadata';
import ContactForm from '@/components/ContactForm';

export { metadata };

export default function ContactsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Контакты</h1>
      <p className="mt-4 max-w-2xl text-sm text-muted">
        Опишите задачу в свободной форме. Обычно отвечаю в течение одного рабочего дня.
      </p>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <ContactForm />
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold">Прямые контакты</h2>
          <p className="mt-4 text-sm text-muted">Email: hello@shpilevsky-analytics.ru</p>
          <p className="mt-2 text-sm text-muted">Телефон: +7 (999) 123-45-67</p>
          <p className="mt-6 text-sm text-muted">
            Формат первой встречи: 30 минут, чтобы зафиксировать контекст и определить следующий шаг.
          </p>
        </div>
      </div>
    </section>
  );
}
