type ServiceCardProps = {
  title: string;
  description: string;
  result: string;
};

export default function ServiceCard({ title, description, result }: ServiceCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-muted">{description}</p>
      <p className="mt-4 text-sm font-medium">Результат: {result}</p>
    </article>
  );
}
