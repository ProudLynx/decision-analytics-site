import { metadata } from './metadata';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CaseCard from '@/components/CaseCard';
import FAQSection from '@/components/FAQSection';

export { metadata };

const audience = ['CEO', 'Коммерческий директор', 'Руководитель проекта'];
const symptoms = ['Нет ясной экономики решения', 'Риски размыты между функциями', 'Нет владельца решения'];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold">Кому полезно</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {audience.map((item) => (
            <div key={item} className="rounded-lg border border-gray-200 p-5 text-sm font-medium">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold">Типовые симптомы</h2>
        <ul className="mt-6 space-y-3">
          {symptoms.map((item) => (
            <li key={item} className="rounded-lg border border-gray-200 p-4 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold">Что делаю</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ServiceCard
            title="Карта рисков"
            description="Выявляю критические риски решения по вероятности и масштабу влияния."
            result="Приоритизированный перечень рисков и план реагирования"
          />
          <ServiceCard
            title="Сценарии решения"
            description="Формирую 2–3 сценария с понятными условиями переключения."
            result="Структура выбора и критерии перехода между сценариями"
          />
          <ServiceCard
            title="Модель экономики"
            description="Собираю минимальную, но рабочую модель unit-экономики инициативы."
            result="Прозрачная экономика решения для обсуждения на уровне руководства"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold">Форматы работы</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Аналитическая сессия (90–120 мин)</h3>
            <p className="mt-3 text-sm text-muted">
              Быстрый разбор управленческой задачи с фиксацией гипотез, рисков и следующего шага.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Мини-проект (5–10 дней)</h3>
            <p className="mt-3 text-sm text-muted">
              Углублённый анализ с моделированием сценариев, расчётами и рекомендацией по выбору.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold">Кейсы</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <CaseCard
            industry="B2B-сервис"
            task="Понять, масштабировать ли коммерческую команду в новом регионе"
            outcome="Выбрана поэтапная стратегия, снижены риски кассового разрыва"
          />
          <CaseCard
            industry="Производство"
            task="Оценить экономику запуска новой продуктовой линейки"
            outcome="Определены пороговые KPI для запуска без потери маржи"
          />
          <CaseCard
            industry="IT-продукт"
            task="Разрешить конфликт приоритетов между продажами и продуктом"
            outcome="Согласован сценарный roadmap с едиными критериями успеха"
          />
          <CaseCard
            industry="Логистика"
            task="Снизить риск операционных сбоев при росте объёма"
            outcome="Собрана карта рисков и план с контрольными точками"
          />
        </div>
      </section>

      <FAQSection />
    </>
  );
}
