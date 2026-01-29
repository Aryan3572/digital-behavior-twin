export default function Card({ children, className }) {
    return (
        <div 
        className={`
        bg-surface
        border border-border
        rounded-xl
        p-5
        shadow-sm
        ${className}
        `}>
            {children}
        </div>
    );
}