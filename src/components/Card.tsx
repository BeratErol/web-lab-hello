interface CardProps {
  title: string;
  image?: string;
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined';
}

const Card = ({ title, image, children, variant = 'elevated' }: CardProps) => {
  const styles = variant === 'elevated' 
    ? "bg-white dark:bg-gray-900 shadow-lg" 
    : "border border-gray-200 dark:border-gray-800";

  return (
    <div className={`rounded-2xl overflow-hidden transition-transform hover:-translate-y-1 ${styles}`}>
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <div className="text-gray-600 dark:text-gray-400">{children}</div>
      </div>
    </div>
  );
};

export default Card; 