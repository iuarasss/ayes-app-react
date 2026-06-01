export default function SectionTitle({
  title,
  subtitle
}) {
  return (
    <div className="mb-6">

      {subtitle && (
        <p className="text-gray-400 text-sm">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl font-bold">
        {title}
      </h2>

    </div>
  );
}