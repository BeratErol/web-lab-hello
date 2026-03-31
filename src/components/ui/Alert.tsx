interface AlertProps {
  title: string;
  children: React.ReactNode;
  variant?: 'error' | 'success' | 'info';
}

const Alert = ({ title, children, variant = 'info' }: AlertProps) => {
  const styles = {
    error: "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800",
    success: "bg-green-50 border-green-200 text-green-800",
    info: "bg-blue-50 border-blue-200 text-blue-800"
  };

  return (
    <div role="alert" className={`p-4 rounded-xl border ${styles[variant]} mb-6`}>
      <h4 className="font-bold mb-1">{title}</h4>
      <div className="text-sm opacity-90">{children}</div>
    </div>
  );
};

export default Alert; 