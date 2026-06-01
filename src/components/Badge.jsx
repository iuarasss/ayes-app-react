export default function Badge({
  children,
  type = "success"
}) {
  const styles = {
    success: "text-green-500",
    warning: "text-yellow-500",
    danger: "text-red-500",
  };

  return (
    <span className={`font-medium ${styles[type]}`}>
      {children}
    </span>
  );
}