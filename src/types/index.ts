export interface ArticleMeta {
  id: string
  title: string
  category: string
  date: string
  excerpt: string
  featured?: boolean
}

export interface Article extends ArticleMeta {
  content: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
  year: string
}

export interface Service {
  title: string
  description: string
}