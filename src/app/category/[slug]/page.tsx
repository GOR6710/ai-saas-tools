import { getCategoryBySlug, getToolsByCategory } from '../../../lib/data'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return [{ slug: 'ai-writing' }, { slug: 'ai-coding' }, { slug: 'ai-image' }, { slug: 'ai-chat' },
    { slug: 'project-management' }, { slug: 'ai-meeting' }, { slug: 'ai-seo' }, { slug: 'automation' }]
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategoryBySlug(params.slug)
  return { title: category ? `${category.name} - 最佳${category.name}工具推荐` : '分类',
    description: category ? `探索最佳${category.name}工具，含详细对比、定价信息和用户评分。` : '' }
}

export default function CategoryDetail({ params }: Props) {
  const category = getCategoryBySlug(params.slug)
  const tools = getToolsByCategory(params.slug)
  if (!category) return <div className="container-main py-20"><h1>分类不存在</h1></div>

  return (
    <main className="py-16">
      <div className="container-main">
        <nav className="text-sm text-slate-500 mb-4">
          <a href="/" className="hover:text-slate-900">首页</a><span className="mx-2">&gt;</span>
          <a href="/category" className="hover:text-slate-900">分类</a><span className="mx-2">&gt;</span>
          <span className="text-slate-900">{category.name}</span>
        </nav>
        <h1 className="section-title">最佳{category.name}工具</h1>
        <p className="text-slate-600 mb-10">{category.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(tool => (
            <Link key={tool.id} href={`/tool/${tool.slug}`} className="card hover:shadow-md transition">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">{tool.name}</h3>
                <span className={`px-2 py-1 rounded text-xs ${tool.hasFreeTier ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                  {tool.hasFreeTier ? '有免费版' : '付费'}
                </span>
              </div>
              <p className="text-slate-600 mb-4">{tool.tagline}</p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="text-yellow-600">★ {tool.rating}</span><span>{tool.reviewCount} 评价</span><span>{tool.pricing}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
