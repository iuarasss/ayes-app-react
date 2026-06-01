import ActionButton from "./ActionButton";

export default function TaskCard({
  title,
  amount,
  buttonText
}) {
  return (
    <div
      className="
        border
        rounded-2xl
        p-5
      "
    >
      <p className="text-gray-400">
        {title}
      </p>

      <h2
        className="
          text-3xl
          font-bold
          text-[#6C63FF]
          my-4
        "
      >
        {amount}
      </h2>

      <ActionButton>
        {buttonText}
      </ActionButton>

    </div>
  );
}