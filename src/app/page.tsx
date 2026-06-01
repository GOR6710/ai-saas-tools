import { getAllTools, getAllCategories } from '../lib/data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI工具对比 - 发现最佳AI SaaS工具',
  description: 'AI SaaS工具对比与推荐平台。提供详细对比、真实评测和场景化推荐，帮你找到最适合的AI工具。',
}

export default function Home() {
  const tools = getAllTools()
  const categories = getAllCategories()

  return (
    <main>
      <section className="bg-gradient-to-br from-primary-50 to-slate-100 py-20">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">发现最佳 <span className="text-primary-600">AI工具</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">AI SaaS工具对比与推荐平台。提供详细对比、真实评测和场景化推荐，帮你找到最适合的工具。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/category" className="btn-primary">浏览分类</a>
            <a href="/compare" className="btn-primary bg-secondary-800 hover:bg-secondary-900">开始对比</a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-500">
            <span>{tools.length}+ 工具</span><span>{categories.length} 分类</span><span>实时对比</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-main">
          <h2 className="section-title text-center">工具分类</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(cat => (
              <Link key={cat.id} href={`/category/${cat.slug}`} className="card hover:shadow-md transition">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{cat.name}</h3>
                <p className="text-slate-600 text-sm">{cat.description}</p>
                <span className="text-primary-600 text-sm mt-3 inline-block">{cat.toolCount} 个工具 &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-main">
          <h2 className="section-title text-center">精选工具</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.slice(0, 3).map(tool => (
              <Link key={tool.id} href={`/tool/${tool.slug}`} className="card hover:shadow-md transition">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{tool.name}</h3>
                  <span className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full">{tool.category}</span>
                </div>
                <p className="text-slate-600 mb-4">{tool.tagline}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-yellow-600">★ {tool.rating}</span>
                  <span className="text-slate-400">{tool.reviewCount} 评价</span>
                  <span className={`px-2 py-1 rounded text-xs ${tool.hasFreeTier ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                    {tool.hasFreeTier ? '有免费版' : '付费'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">找不到合适的工具？</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">使用我们的搜索功能，快速找到满足你需求的AI工具</p>
          <a href="/search" className="btn-primary">搜索工具</a>
        </div>
      </section>
    </main>
  )
}
