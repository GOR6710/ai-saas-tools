import { getAllCategories } from '../../lib/data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI工具分类 - 按类别浏览AI SaaS工具',
  description: '按分类浏览AI工具：AI写作、AI编程、AI图像、项目管理等。找到最适合你需求的工具类别。',
}

export default function CategoryList() {
  const categories = getAllCategories()
  return (
    <main className="py-16">
      <div className="container-main">
        <h1 className="section-title">工具分类</h1>
        <p className="text-slate-600 mb-10">选择你感兴趣的分类，探索该类别下的所有AI工具</p>
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
    </main>
  )
}
