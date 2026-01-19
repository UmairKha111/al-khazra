export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
