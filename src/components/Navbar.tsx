'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/projects" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Projects Viewer</span>
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link
              href="/projects"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/projects')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              项目列表
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 