export default function ProgressBar({
  value = 70
}) {
  return (
    <div className="h-3 bg-gray-200 rounded-full">

      <div
        className="
          h-3
          bg-[#6C63FF]
          rounded-full
        "
        style={{
          width: `${value}%`
        }}
      />

    </div>
  );
}