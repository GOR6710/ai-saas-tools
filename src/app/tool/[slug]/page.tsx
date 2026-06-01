import { getToolBySlug, getAllTools } from '@/lib/data'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return [
    { slug: 'chatgpt' }, { slug: 'claude' }, { slug: 'midjourney' },
    { slug: 'cursor' }, { slug: 'notion' }
  ]
}

export function generateMetadata({ params }: Props): Metadata {
  const tool = getToolBySlug(params.slug)
  return {
    title: tool ? `${tool.name} 评测 - 功能、定价与替代品` : '工具详情',
    description: tool ? `${tool.name} 完整评测：功能特性、定价方案、优缺点分析，以及最佳替代品推荐。` : '',
    openGraph: tool ? {
      title: `${tool.name} 评测 - 功能、定价与替代品`,
      description: tool.tagline,
    } : undefined,
  }
}

export default function ToolDetail({ params }: Props) {
  const tool = getToolBySlug(params.slug)
  const allTools = getAllTools()
  const alternatives = tool ? allTools.filter(t => t.slug !== tool.slug && tool.alternatives.includes(t.slug)) : []

  if (!tool) {
    return <div className="container-main py-20"><h1>工具不存在</h1></div>
  }

  return (
    <main className="py-16">
      <div className="container-main">
        <nav className="text-sm text-slate-500 mb-4">
          <a href="/" className="hover:text-slate-900">首页</a>
          <span className="mx-2">&gt;</span>
          <a href={`/category/${tool.categorySlug}`} className="hover:text-slate-900">{tool.category}</a>
          <span className="mx-2">&gt;</span>
          <span className="text-slate-900">{tool.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{tool.name} 评测</h1>
                <p className="text-slate-600">{tool.tagline}</p>
              </div>
            </div>

            <div className="card mb-8">
              <h2 className="text-xl font-bold mb-4">概述</h2>
              <p className="text-slate-600">{tool.description}</p>
            </div>

            <div className="card mb-8">
              <h2 className="text-xl font-bold mb-4">核心功能</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tool.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <h3 className="font-bold text-green-700 mb-3">优点</h3>
                <ul className="space-y-2">
                  {tool.pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600">+</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3 className="font-bold text-red-700 mb-3">缺点</h3>
                <ul className="space-y-2">
                  {tool.cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-600">-</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card mb-8">
              <h2 className="text-xl font-bold mb-4">适用人群</h2>
              <div className="flex flex-wrap gap-3">
                {tool.bestFor.map((b, i) => (
                  <span key={i} className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="card mb-8">
              <h2 className="text-xl font-bold mb-4">定价方案</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tool.pricingPlans.map((plan, i) => (
                  <div key={i} className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-bold">{plan.name}</h3>
                    <p className="text-2xl font-bold text-primary-600 my-2">{plan.price}</p>
                    <ul className="space-y-1 text-sm">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Alternatives */}
            <div className="card">
              <h2 className="text-xl font-bold mb-4">替代品推荐</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {alternatives.map(alt => (
                  <Link key={alt.id} href={`/tool/${alt.slug}`} className="border border-slate-200 rounded-lg p-4 hover:border-primary-300 transition">
                    <h3 className="font-bold">{alt.name}</h3>
                    <p className="text-sm text-slate-600">{alt.tagline}</p>
                    <span className="text-yellow-600 text-sm">★ {alt.rating}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary-600 mb-2">{tool.rating}</div>
                <div className="text-yellow-600 text-lg">★★★★★</div>
                <p className="text-slate-500 text-sm">{tool.reviewCount} 条评价</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">定价</span>
                  <span className="font-semibold">{tool.pricing}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">免费版</span>
                  <span className={`font-semibold ${tool.hasFreeTier ? 'text-green-600' : 'text-red-600'}`}>
                    {tool.hasFreeTier ? '有' : '无'}
                  </span>
                </div>
              </div>
              <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                访问官网
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
