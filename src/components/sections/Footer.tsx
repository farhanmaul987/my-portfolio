export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-semibold text-text">
          farhan<span className="text-primary">.</span>dev
        </span>
        <p className="text-xs text-subtle">
          © {year} Farhan Maulana. Built with React + Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
