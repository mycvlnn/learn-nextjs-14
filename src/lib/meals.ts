import { IMeal } from '@/components/meals/meal-item'
import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db')

export async function getMeals(): Promise<IMeal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return db.prepare('SELECT * FROM meals').all() as IMeal[]
}

interface Meal {
  id: number
  slug: string
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

export function saveMeal(meal: Meal) {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)
}
