export default function Input({ label, error, helpText, id, ...props }) {
  return (
    <div className="space-y-1">
      {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>}
      <input id={id} className={`w-full px-3 py-2 rounded-lg border ${error ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2`} {...props} />
      {error && <p className="text-sm text-red-600">{error}</p>}
      {helpText && !error && <p className="text-sm text-gray-500">{helpText}</p>}
    </div>
  );
}