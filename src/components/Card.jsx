export default function Card({ title, children, image, variant = "elevated" }) {
  const variants = {
    elevated: "bg-white shadow-md",
    outlined: "bg-white border border-gray-200",
    filled: "bg-gray-100"
  };
  return (
    <div className={`rounded-xl overflow-hidden p-5 ${variants[variant]}`}>
      {image && <img src={image} className="w-full h-48 object-cover mb-4" />}
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}