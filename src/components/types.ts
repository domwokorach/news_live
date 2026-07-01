export type Story = {
  id: string
  title: string
  summary?: string
  category: string
  age: string
  hour: string
  date: string
  image: string
  accent?: 'in-depth' | 'default'
}
