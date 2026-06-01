'use client'

import { useState } from 'react'
import { getAllTools } from '@/lib/data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI工具对比 - 多工具并排对比',
  description: '选择最多4个AI工具进行并排对比，从功能、定价、评分等维度找到最适合你的工具。',
}

export default function Compare() {
  const tools = getAllTools()
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (slug: string) => {
    if (selected.includes(slug)) {
      setSelected(selected.filter(s => s !== slug))
    } else if (selected.length < 4) {
      setSelected([...selected, slug])
    }
  }

  const selectedTools = tools.filter(t => selected.includes(t.slug))

  return (
    <main className="py-16">
      <div className="container-main">
        <h1 className="section-title">AI工具对比</h1>
        <p className="text-slate-600 mb-6">选择最多4个工具进行并排对比</p>

        {/* Tool selection */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => toggle(tool.slug)}
              className={`p-3 rounded-lg border text-left transition ${
                selected.includes(tool.slug)
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="font-semibold text-sm">{tool.name}</div>
              <div className="text-xs text-slate-500">{tool.category}</div>
            </button>
          ))}
        </div>

        {selectedTools.length > 0 && (
          <div className="card overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">对比结果</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4">对比维度</th>
                  {selectedTools.map(t => (
                    <th key={t.id} className="text-left py-3 px-4 min-w-[200px]">
                      <Link href={`/tool/${t.slug}`} className="text-primary-600 hover:underline font-bold">
                        {t.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-semibold">评分</td>
                  {selectedTools.map(t => (
                    <td key={t.id} className="py-3 px-4">
                      <span className="text-yellow-600">★ {t.rating}</span>
                      <span className="text-slate-400 text-xs"> ({t.reviewCount}评价)</span>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-semibold">定价</td>
                  {selectedTools.map(t => (
                    <td key={t.id} className="py-3 px-4">{t.pricing}</td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-semibold">免费版</td>
                  {selectedTools.map(t => (
                    <td key={t.id} className="py-3 px-4">
                      <span className={t.hasFreeTier ? 'text-green-600' : 'text-red-600'}>
                        {t.hasFreeTier ? '有' : '无'}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-semibold">核心功能</td>
                  {selectedTools.map(t => (
                    <td key={t.id} className="py-3 px-4">
                      <ul className="space-y-1">
                        {t.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-center gap-1">
                            <span className="text-green-600 text-xs">✓</span> {f}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-semibold">优点</td>
                  {selectedTools.map(t => (
                    <td key={t.id} className="py-3 px-4">
                      <ul className="space-y-1 text-green-700">
                        {t.pros.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-semibold">缺点</td>
                  {selectedTools.map(t => (
                    <td key={t.id} className="py-3 px-4">
                      <ul className="space-y-1 text-red-700">
                        {t.cons.map((c, i) => <li key={i}>{c}</li>)}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">适用人群</td>
                  {selectedTools.map(t => (
                    <td key={t.id} className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {t.bestFor.map((b, i) => (
                          <span key={i} className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded">{b}</span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}
