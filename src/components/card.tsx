'use client';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-lg border p-5 transition-all duration-200 ${className}`}
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 1px var(--accent)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      {children}
    </div>
  );
}
