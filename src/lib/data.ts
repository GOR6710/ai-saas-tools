export interface Tool {
  id: string; slug: string; name: string; tagline: string; description: string;
  category: string; categorySlug: string; pricing: string; rating: number; reviewCount: number;
  hasFreeTier: boolean; affiliateUrl: string; features: string[]; pros: string[]; cons: string[];
  bestFor: string[]; alternatives: string[];
  pricingPlans: { name: string; price: string; features: string[] }[];
}

export interface Category {
  id: string; slug: string; name: string; description: string; toolCount: number;
}

export const categories: Category[] = [
  { id: "1", slug: "ai-writing", name: "AI写作", description: "AI驱动的写作和内容生成工具", toolCount: 5 },
  { id: "2", slug: "ai-coding", name: "AI编程", description: "AI代码补全和编程助手", toolCount: 4 },
  { id: "3", slug: "ai-image", name: "AI图像", description: "AI图像生成和编辑工具", toolCount: 4 },
  { id: "4", slug: "ai-chat", name: "AI对话", description: "AI聊天机器人和对话助手", toolCount: 3 },
  { id: "5", slug: "project-management", name: "项目管理", description: "团队协作和项目管理工具", toolCount: 4 },
  { id: "6", slug: "ai-meeting", name: "AI会议", description: "AI会议记录和转录工具", toolCount: 3 },
  { id: "7", slug: "ai-seo", name: "AI SEO", description: "AI驱动的SEO优化工具", toolCount: 3 },
  { id: "8", slug: "automation", name: "自动化", description: "工作流自动化和RPA工具", toolCount: 3 },
];

export const tools: Tool[] = [
  {
    id: "1", slug: "chatgpt", name: "ChatGPT", tagline: "OpenAI推出的AI对话助手",
    description: "ChatGPT是OpenAI开发的AI对话模型，基于GPT-4架构，能够进行自然语言对话、回答问题、写作、编程辅助等多种任务。",
    category: "AI对话", categorySlug: "ai-chat", pricing: "Freemium", rating: 4.5, reviewCount: 1280, hasFreeTier: true,
    affiliateUrl: "https://chat.openai.com", features: ["自然语言对话", "代码生成", "文本写作", "多语言支持", "网页浏览"],
    pros: ["免费版功能丰富", "响应速度快", "多模态支持"], cons: ["中文表现一般", "偶尔有知识幻觉"],
    bestFor: ["日常问答", "内容写作", "编程辅助", "学习辅导"], alternatives: ["claude", "gemini", "copilot"],
    pricingPlans: [
      { name: "免费版", price: "¥0", features: ["GPT-3.5", "有限消息数", "基本功能"] },
      { name: "Plus", price: "$20/月", features: ["GPT-4", "优先访问", "插件支持"] },
      { name: "团队版", price: "$30/人/月", features: ["团队管理", "高级分析", "API额度"] }
    ]
  },
  {
    id: "2", slug: "claude", name: "Claude", tagline: "Anthropic开发的高级AI助手",
    description: "Claude是Anthropic开发的AI助手，以长文本处理、安全性和推理能力著称，特别适合复杂文档分析和代码审查。",
    category: "AI对话", categorySlug: "ai-chat", pricing: "Freemium", rating: 4.7, reviewCount: 680, hasFreeTier: true,
    affiliateUrl: "https://claude.ai", features: ["长文本处理", "代码分析", "文档总结", "推理能力", "多模态"],
    pros: ["上下文窗口超长", "推理能力强", "中文表现优秀"], cons: ["免费版限制严格", "无联网功能"],
    bestFor: ["长文档分析", "代码审查", "学术研究", "复杂推理"], alternatives: ["chatgpt", "gemini", "perplexity"],
    pricingPlans: [
      { name: "免费版", price: "¥0", features: ["Claude 3 Sonnet", "有限消息数", "基本功能"] },
      { name: "Pro", price: "$20/月", features: ["Claude 3 Opus", "优先访问", "更高限额"] },
      { name: "团队版", price: "$30/人/月", features: ["团队管理", "共享项目", "API额度"] }
    ]
  },
  {
    id: "3", slug: "midjourney", name: "Midjourney", tagline: "AI图像生成艺术的标杆",
    description: "Midjourney是目前最知名的AI图像生成工具之一，以艺术风格独特、图像质量高而著称，适合创意设计和艺术创作。",
    category: "AI图像", categorySlug: "ai-image", pricing: "Paid", rating: 4.6, reviewCount: 950, hasFreeTier: false,
    affiliateUrl: "https://www.midjourney.com", features: ["文本生成图像", "图像放大", "图像变体", "风格迁移", "参数控制"],
    pros: ["艺术风格独特", "图像质量极高", "社区活跃"], cons: ["无免费版", "Discord操作门槛高", "中文提示词效果一般"],
    bestFor: ["概念设计", "插画创作", "视觉营销", "艺术创作"], alternatives: ["dalle3", "stable-diffusion", "leonardo"],
    pricingPlans: [
      { name: "Basic", price: "$10/月", features: ["200 GPU分钟", "商业许可", "私密模式"] },
      { name: "Standard", price: "$30/月", features: ["15 GPU小时", "无限Relax模式", "商业许可"] },
      { name: "Pro", price: "$60/月", features: ["30 GPU小时", "Stealth模式", "最高优先级"] }
    ]
  },
  {
    id: "4", slug: "cursor", name: "Cursor", tagline: "AI原生代码编辑器",
    description: "Cursor是基于VS Code的AI代码编辑器，内置AI编程助手，支持代码补全、重构、解释和自动生成，大幅提升开发效率。",
    category: "AI编程", categorySlug: "ai-coding", pricing: "Freemium", rating: 4.8, reviewCount: 520, hasFreeTier: true,
    affiliateUrl: "https://cursor.sh", features: ["AI代码补全", "代码重构", "代码解释", "自动生成", "多文件编辑"],
    pros: ["基于VS Code", "AI功能深度集成", "响应速度快"], cons: ["收费较贵", "偶尔生成错误代码"],
    bestFor: ["软件开发", "代码审查", "快速原型", "学习编程"], alternatives: ["github-copilot", "codeium", "tabnine"],
    pricingPlans: [
      { name: "免费版", price: "¥0", features: ["每月2000次补全", "基本AI功能", "社区支持"] },
      { name: "Pro", price: "$20/月", features: ["无限补全", "GPT-4", "优先支持"] },
      { name: "团队版", price: "$40/人/月", features: ["团队管理", "共享上下文", "API额度"] }
    ]
  },
  {
    id: "5", slug: "notion", name: "Notion", tagline: "全能型知识管理和协作平台",
    description: "Notion是功能强大的笔记和知识管理工具，支持文档、数据库、看板、日历等多种视图，近年集成了AI写作功能。",
    category: "项目管理", categorySlug: "project-management", pricing: "Freemium", rating: 4.4, reviewCount: 2100, hasFreeTier: true,
    affiliateUrl: "https://www.notion.so", features: ["笔记管理", "数据库", "AI写作", "团队协作", "看板视图"],
    pros: ["功能全面", "模板丰富", "跨平台同步"], cons: ["学习曲线陡峭", "加载速度一般"],
    bestFor: ["知识管理", "团队协作", "项目管理", "个人笔记"], alternatives: ["clickup", "obsidian", "asana"],
    pricingPlans: [
      { name: "免费版", price: "¥0", features: ["无限页面", "7天历史", "10MB文件上传"] },
      { name: "Plus", price: "$10/月", features: ["无限历史", "100MB文件", "AI功能"] },
      { name: "企业版", price: "$18/人/月", features: ["团队管理", "SAML", "高级权限"] }
    ]
  }
];

export function getToolBySlug(slug: string) { return tools.find(t => t.slug === slug); }
export function getToolsByCategory(categorySlug: string) { return tools.filter(t => t.categorySlug === categorySlug); }
export function getAllTools() { return tools; }
export function getAllCategories() { return categories; }
export function getCategoryBySlug(slug: string) { return categories.find(c => c.slug === slug); }
export function searchTools(query: string) {
  const q = query.toLowerCase();
  return tools.filter(t => t.name.toLowerCase().includes(q) || t.tagline.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q) || t.features.some(f => f.toLowerCase().includes(q)));
}
