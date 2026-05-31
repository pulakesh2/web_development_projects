// Button.js
export const Button = ({ children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};
