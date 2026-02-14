import { metadata } from './metadata';
import CaseCard from '@/components/CaseCard';

export { metadata };

const cases = [
  {
    industry: 'EdTech',
    task: 'Определить, стоит ли выходить в сегмент корпоративного обучения',
    outcome: 'Подтверждён сценарий поэтапного входа с контролем CAC и LTV'
  },
  {
    industry: 'Розница',
    task: 'Согласовать инвестиции в модернизацию сети точек',
    outcome: 'Принята модель пилотов вместо единовременных вложений'
  },
  {
    industry: 'Сервисная компания',
    task: 'Снизить риск выгорания команды при росте клиентской базы',
    outcome: 'Внедрён сценарий распределения нагрузки и SLA по сегментам'
  },
  {
    industry: 'Финтех',
    task: 'Оценить экономику нового процесса онбординга клиентов',
    outcome: 'Сокращён срок принятия решения и согласована метрика качества'
  }
];

export default function CasesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Кейсы</h1>
      <p className="mt-4 max-w-3xl text-sm text-muted">
        Ниже — типовые примеры задач. Детали адаптируются под отрасль, но логика анализа всегда остаётся
        управленческой: гипотеза, риски, экономика, решение.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {cases.map((item) => (
          <CaseCard key={item.task} industry={item.industry} task={item.task} outcome={item.outcome} />
        ))}
      </div>
    </section>
  );
}
