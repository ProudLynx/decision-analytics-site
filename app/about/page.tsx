import { metadata } from './metadata';

export { metadata };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Обо мне</h1>
      <p className="mt-6 text-sm leading-7 text-muted">
        Я работаю на стыке стратегии, финансовой логики и операционного управления. Помогаю руководителям
        принимать решения в условиях ограниченного времени и неполных данных.
      </p>
      <p className="mt-4 text-sm leading-7 text-muted">
        В фокусе — прозрачность экономики, управляемость рисков и практичная структура сценариев. Моя роль —
        обеспечить ясность, чтобы команда действовала согласованно и без лишних допущений.
      </p>
      {/* TODO: добавьте факты биографии, отраслевые компетенции и подтверждённые результаты. */}
    </section>
  );
}
