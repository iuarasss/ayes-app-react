import ProgressBar from "./ProgressBar";

export default function StatisticCard({
  title,
  value,
  progress
}) {
  return (
    <div
      className="
        bg-white
        p-6
        rounded-2xl
        shadow
      "
    >
      <p className="text-gray-400">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3 mb-4">
        {value}
      </h2>

      <ProgressBar value={progress} />
    </div>
  );
}