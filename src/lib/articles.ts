export interface ArticleMeta {
  level: string
  id: string
  title: string
  category: string
  date: string
  excerpt: string
  theme: string
  featured?: boolean
  image?: string
  description?: string  // ← tambah ini
  keywords?: string     // ← tambah ini
}

export interface Article extends ArticleMeta {
  content: string
}

export function getAdjacentArticles(id: string): { prev: ArticleMeta | null; next: ArticleMeta | null } {
  const all = getAllArticles()
  const index = all.findIndex(a => a.id === id)
  return {
    prev: index > 0 ? all[index - 1] : null,
    next: index < all.length - 1 ? all[index + 1] : null,
  }
}

const AVAILABLE_THEMES = ['mint', 'purple', 'sky', 'rose']

const articleFiles = import.meta.glob('../content/articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const normalized = raw.replace(/\r\n/g, '\n').trim()
  if (!normalized.startsWith('---')) return { data: {}, content: normalized }
  
  const endIndex = normalized.indexOf('\n---', 3)
  if (endIndex === -1) return { data: {}, content: normalized }
  
  const frontmatter = normalized.slice(3, endIndex).trim()
  const content = normalized.slice(endIndex + 4).trim()
  
  const data: Record<string, string> = {}
  frontmatter.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) return
    const key = line.slice(0, colonIndex).trim()
    const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '')
    if (key) data[key] = value
  })
  
  return { data, content }
}

export function getAllArticles(): ArticleMeta[] {
  return Object.entries(articleFiles)
    .map(([filepath, raw], index) => { 
      const { data } = parseFrontmatter(raw as string)
      const id = filepath.split('/').pop()!.replace('.md', '')
      
      const theme = data.theme || AVAILABLE_THEMES[index % AVAILABLE_THEMES.length]

return {
  id,
  title: data.title || '',
  category: data.category || '',
  level: data.level || '',
  date: data.date || '',
  excerpt: data.excerpt || '',
  theme,
  featured: data.featured === 'true',
  image: data.image || '',
  description: data.description || data.excerpt || '',  // ← tambah ini
  keywords: data.keywords || '',                         // ← tambah ini
} as ArticleMeta
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function getArticleById(id: string): Article | null {
  const entry = Object.entries(articleFiles).find(([filepath]) =>
    filepath.includes(`/${id}.md`)
  )
  if (!entry) return null

  const { data, content } = parseFrontmatter(entry[1] as string)
  
  const allArticles = getAllArticles();
  const meta = allArticles.find(a => a.id === id);

return {
  id,
  title: data.title || '',
  category: data.category || '',
  level: data.level || '',
  date: data.date || '',
  excerpt: data.excerpt || '',
  theme: meta?.theme || AVAILABLE_THEMES[0],
  featured: data.featured === 'true',
  content,
  description: data.description || data.excerpt || '',  // ← tambah ini
  keywords: data.keywords || '',                         // ← tambah ini
} as Article
}