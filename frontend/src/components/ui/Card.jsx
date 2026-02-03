export default function Card({ children, className }) {
  return (
    <div
      className={`
        bg-white
        border border-border
        rounded-xl
        p-5
        ${className}
      `}
    >
      {children}
    </div>
  );
}
