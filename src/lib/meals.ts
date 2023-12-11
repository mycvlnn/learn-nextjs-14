import { IMeal } from '@/components/meals/meal-item'
import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals(): Promise<IMeal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return db.prepare('SELECT * FROM meals').all() as IMeal[]
}

interface Meal {
  id: number
  title: string
  image: string
  creator_email: string
  creator: string
  summary: string
  instructions: string
}

export function getMeal(slug: string): Meal {
  const result = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)

  return result as Meal
}
