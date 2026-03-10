/**
 * @typedef {Object} CardProps
 * @property {string} [title]
 * @property {React.ReactNode} children
 * @property {string | null} [image]
 * @property {string} [imageAlt]
 * @property {'elevated' | 'outlined' | 'filled'} [variant]
 */

/** @param {CardProps} props */
export default function Card({ 
  title, 
  children, 
  image = null, 
  imageAlt = "", 
  variant = "elevated" 
}) {
  // Card varyantlarını föydeki gibi güncelle
const variants = {
  elevated: "bg-white dark:bg-gray-800 shadow-md hover:shadow-lg",
  outlined: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
  filled: "bg-gray-100 dark:bg-gray-800",
};

  return (
    <div className={`rounded-xl overflow-hidden transition-shadow ${variants[variant]}`}>
      {image && (
        <img 
          src={image} 
          alt={imageAlt} 
          className="w-full h-48 object-cover" 
        />
      )}
      
      <div className="p-5">
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h3>
        )}
        <div className="text-gray-600 dark:text-gray-400">
          {children}
        </div>
      </div>
    </div>
  );
}