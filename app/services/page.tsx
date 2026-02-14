import { metadata } from './metadata';
import ServiceCard from '@/components/ServiceCard';

export { metadata };

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Услуги</h1>
      <p className="mt-4 max-w-3xl text-sm text-muted">
        Каждая услуга выстроена вокруг управленческого решения: что выбрать, на каких данных, с какими рисками и
        как контролировать результат.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <ServiceCard
          title="Карта рисков"
          description="Диагностика рисков инициативы с классификацией по влиянию и вероятности."
          result="Матрица рисков и набор действий по критическим зонам"
        />
        <ServiceCard
          title="Сценарии решения"
          description="Проработка вариантов с учётом ограничений по бюджету, сроку и ресурсу команды."
          result="Набор сценариев и критерии выбора"
        />
        <ServiceCard
          title="Модель экономики"
          description="Расчёт ключевых параметров: объём, маржа, инвестиции, срок окупаемости."
          result="Прозрачная логика решения для руководящего состава"
        />
      </div>
    </section>
  );
}
