import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI工具对比 - 发现最佳AI SaaS工具',
  description: 'AI SaaS工具对比与推荐平台。提供详细对比、真实评测和场景化推荐，帮你找到最适合的AI工具。',
  keywords: ['AI工具', 'SaaS对比', 'AI软件推荐', '生产力工具', 'AI工具评测'],
  openGraph: {
    title: 'AI工具对比 - 发现最佳AI SaaS工具',
    description: 'AI SaaS工具对比与推荐平台',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI工具对比 - 发现最佳AI SaaS工具',
    description: 'AI SaaS工具对比与推荐平台',
  },
  alternates: {
    canonical: 'https://ai-tools-compare.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AI工具对比",
            "url": "https://ai-tools-compare.com",
            "description": "AI SaaS工具对比与推荐平台"
          })
        }} />
      </head>
      <body>
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="container-main flex items-center justify-between h-16">
            <a href="/" className="text-xl font-bold text-primary-600">AI工具对比</a>
            <div className="flex items-center gap-6">
              <a href="/" className="text-slate-600 hover:text-slate-900">首页</a>
              <a href="/category" className="text-slate-600 hover:text-slate-900">分类</a>
              <a href="/compare" className="text-slate-600 hover:text-slate-900">对比</a>
              <a href="/search" className="text-slate-600 hover:text-slate-900">搜索</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-slate-900 text-slate-300 mt-20">
          <div className="container-main py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">AI工具对比</h3>
                <p className="text-slate-400">发现最适合你的AI工具和生产力软件</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">快速链接</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="hover:text-white">首页</a></li>
                  <li><a href="/category" className="hover:text-white">分类浏览</a></li>
                  <li><a href="/compare" className="hover:text-white">工具对比</a></li>
                  <li><a href="/search" className="hover:text-white">搜索</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">关于</h4>
                <p className="text-slate-400 text-sm">AI工具对比与推荐平台，提供详细对比、真实评测和场景化推荐。</p>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
              &copy; 2026 AI工具对比. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
