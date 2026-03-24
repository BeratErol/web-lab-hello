interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="block text-sm font-medium mb-1 dark:text-gray-300">{label}</label>}
      <input
        id={id}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        {...props}
      />
    </div>
  );
};

export default Input; 