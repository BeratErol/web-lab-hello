export default function Alert({ children, variant = "info", title }) {
  const variants = {
    info: "bg-blue-50 border-blue-500 text-blue-800",
    success: "bg-green-50 border-green-500 text-green-800",
    error: "bg-red-50 border-red-500 text-red-800"
  };
  return (
    <div className={`border-l-4 p-4 ${variants[variant]}`}>
      {title && <p className="font-semibold">{title}</p>}
      <p className="text-sm">{children}</p>
    </div>
  );
}