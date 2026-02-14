type CaseCardProps = {
  industry: string;
  task: string;
  outcome: string;
};

export default function CaseCard({ industry, task, outcome }: CaseCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 p-6">
      <p className="text-xs uppercase tracking-wide text-muted">{industry}</p>
      <p className="mt-3 text-sm">Задача: {task}</p>
      <p className="mt-2 text-sm font-medium">Результат: {outcome}</p>
    </article>
  );
}
