import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Projects Viewer - 体验HTML游戏和应用',
  description: '浏览和体验各种HTML游戏和应用程序，支持全屏模式的项目查看器',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <Navbar />
        <main>
          {children}
        </main>
        <footer className="bg-white border-t py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Projects Viewer - 由 Next.js 提供支持
          </div>
        </footer>
      </body>
    </html>
  )
}
