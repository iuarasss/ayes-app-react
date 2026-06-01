export default function ActionButton({
  children
}) {
  return (
    <button
      className="
        w-full
        bg-[#6C63FF]
        text-white
        py-3
        rounded-xl
      "
    >
      {children}
    </button>
  );
}