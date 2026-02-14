import { metadata } from './metadata';

export { metadata };

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Политика конфиденциальности</h1>
      <p className="mt-6 text-sm leading-7 text-muted">
        Данные, отправленные через форму заявки, используются только для обратной связи по вашему запросу.
      </p>
      <p className="mt-4 text-sm leading-7 text-muted">
        Мы не передаём персональные данные третьим лицам и не используем внешние рекламные или аналитические
        счётчики.
      </p>
      <p className="mt-4 text-sm leading-7 text-muted">
        По запросу пользователя данные могут быть удалены из внутренних журналов обработки.
      </p>
      {/* TODO: замените шаблон юридически выверенным текстом под вашу юрисдикцию. */}
    </section>
  );
}
