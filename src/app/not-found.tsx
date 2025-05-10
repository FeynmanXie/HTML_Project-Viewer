import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">页面未找到</h2>
      <p className="text-gray-600 max-w-md mb-8">
        您正在寻找的页面不存在或已被移动。
      </p>
      <Link 
        href="/projects" 
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        返回项目列表
      </Link>
    </div>
  );
} 