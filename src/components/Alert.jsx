export default function Alert({ children, variant = "info", title }) {
  const variants = {
    info: "bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
    success: "bg-green-50 border-green-500 text-green-800 dark:bg-green-950 dark:text-green-200",
    warning: "bg-amber-50 border-amber-500 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
    error: "bg-red-50 border-red-500 text-red-800 dark:bg-red-950 dark:text-red-200"
  };
  return (
    <div className={`border-l-4 p-4 ${variants[variant]}`}>
      {title && <p className="font-semibold">{title}</p>}
      <p className="text-sm">{children}</p>
    </div>
  );
}