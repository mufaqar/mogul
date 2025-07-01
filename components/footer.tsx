import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-800">
        
        {/* Left: Navigation Links */}
        <div className="flex flex-wrap gap-4 mb-2 md:mb-0 text-purple-600 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>

        {/* Right: Copyright */}
        <div className="text-gray-700 text-sm">
          © MOGUL 2025
        </div>
      </div>
    </footer>
  );
}
