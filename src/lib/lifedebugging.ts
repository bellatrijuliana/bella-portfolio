export interface LifePostMeta {
  id: string
  title: string
  category: string
  mood: string
  date: string
  excerpt: string
  theme: string
  featured?: boolean
  image?: string
}

export interface LifePost extends LifePostMeta {
  content: string
}

const AVAILABLE_THEMES = ['mint', 'purple', 'sky', 'rose']

const lifePostFiles = import.meta.glob('../content/life-debugging/*.md', {
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

export function getAllLifePosts(): LifePostMeta[] {
  return Object.entries(lifePostFiles)
    .map(([filepath, raw], index) => {
      const { data } = parseFrontmatter(raw as string)
      const id = filepath.split('/').pop()!.replace('.md', '')
      const theme = data.theme || AVAILABLE_THEMES[index % AVAILABLE_THEMES.length]

      return {
        id,
        title: data.title || '',
        category: data.category || '',
        mood: data.mood || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        theme,
        featured: data.featured === 'true',
        image: data.image || '',
      } as LifePostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getLifePostById(id: string): LifePost | null {
  const entry = Object.entries(lifePostFiles).find(([filepath]) =>
    filepath.includes(`/${id}.md`)
  )
  if (!entry) return null

  const { data, content } = parseFrontmatter(entry[1] as string)

  const allPosts = getAllLifePosts()
  const meta = allPosts.find(p => p.id === id)

  return {
    id,
    title: data.title || '',
    category: data.category || '',
    mood: data.mood || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    theme: meta?.theme || AVAILABLE_THEMES[0],
    featured: data.featured === 'true',
    content,
  } as LifePost
}