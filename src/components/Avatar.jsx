export default function Avatar({ src }) {
  return (
    <img
      src={src}
      alt="avatar"
      className="
        w-12 h-12
        rounded-full
        object-cover
      "
    />
  );
}