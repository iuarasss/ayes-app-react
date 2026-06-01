export default function Input({
  placeholder
}) {
  return (
    <input
      placeholder={placeholder}
      className="
        w-full
        border
        rounded-xl
        px-4 py-2
      "
    />
  );
}