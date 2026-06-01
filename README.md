# AI SaaS 工具对比与推荐平台

基于 Next.js + Cloudflare Pages 的 AI 工具对比站点，SEO 优先，支持自动部署。

## 技术栈
- Next.js 14 (App Router, Static Export)
- Tailwind CSS
- Cloudflare Pages (自动部署)
- Neon (PostgreSQL)

## 页面结构
- `/` — 首页（精选工具 + 分类浏览）
- `/category` — 分类列表
- `/category/[slug]` — 分类详情
- `/tool/[slug]` — 工具详情页
- `/compare` — 工具对比页
- `/search` — 搜索页

## 部署
通过 Cloudflare Pages 连接 GitHub 仓库自动部署。

## SEO 特性
- 动态 meta title/description
- Open Graph / Twitter Card
- Schema.org 结构化数据
- Canonical URL
- 静态生成 (SSG)
