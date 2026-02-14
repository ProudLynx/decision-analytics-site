const faqItems = [
  {
    question: 'Когда имеет смысл подключать аналитика?',
    answer: 'Когда решение влияет на P&L, сроки и репутационные риски, а данных много и они противоречивы.'
  },
  {
    question: 'Чем вы отличаетесь от консалтинговой компании?',
    answer: 'Работаю напрямую с владельцем задачи, без масштабных команд и лишней методологии.'
  },
  {
    question: 'Сколько длится аналитическая сессия?',
    answer: 'Обычно 90–120 минут. По итогам вы получаете структуру решений и карту рисков.'
  },
  {
    question: 'Можно ли начать с малого?',
    answer: 'Да, с мини-проекта на 5–10 дней с фокусом на один управленческий вопрос.'
  },
  {
    question: 'Вы помогаете с внедрением?',
    answer: 'Да, в формате контрольных точек и корректировки сценариев после первых результатов.'
  },
  {
    question: 'Насколько конфиденциальна работа?',
    answer: 'Работа строится по NDA, а в публичных кейсах не раскрываются названия компаний.'
  }
];

export default function FAQSection() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-6">
      <h2 className="text-3xl font-semibold">FAQ</h2>
      <div className="mt-8 space-y-4">
        {faqItems.map((item) => (
          <details key={item.question} className="rounded-lg border border-gray-200 p-5">
            <summary className="cursor-pointer text-sm font-semibold">{item.question}</summary>
            <p className="mt-3 text-sm text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
