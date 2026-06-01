'use client'

import { useState, useEffect } from 'react'
import { searchTools } from '@/lib/data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '搜索AI工具 - 找到最适合的AI SaaS',
  description: '搜索AI工具，按名称、功能或分类快速找到你需要的工具。',
}

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(searchTools(''))

  useEffect(() => {
    setResults(searchTools(query))
  }, [query])

  return (
    <main className="py-16">
      <div className="container-main">
        <h1 className="section-title text-center">搜索AI工具</h1>
        <div className="max-w-2xl mx-auto mb-10">
          <input
            type="text"
            placeholder="输入工具名称、功能或分类..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-6 py-4 border border-slate-200 rounded-xl text-lg focus:outline-none focus:border-primary-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map(tool => (
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

        {results.length === 0 && query && (
          <div className="text-center py-10">
            <p className="text-slate-500">没有找到匹配的工具，试试其他关键词？</p>
          </div>
        )}
      </div>
    </main>
  )
}
