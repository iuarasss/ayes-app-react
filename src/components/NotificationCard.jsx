export default function NotificationCard({
  title,
  message
}) {
  return (
    <div className="
      border
      rounded-xl
      p-4
    ">
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="text-sm text-gray-500">
        {message}
      </p>
    </div>
  );
}