export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t py-6" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm" style={{ color: 'var(--muted)' }}>
          © {currentYear} Sri Chandramouli. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
