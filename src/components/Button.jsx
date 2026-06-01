export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-[#6C63FF]
        text-white
        px-5 py-2
        rounded-xl
        hover:opacity-90
        transition
      "
    >
      {children}
    </button>
  );
}