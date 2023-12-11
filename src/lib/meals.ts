import fs from 'node:fs'

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

interface MealCreate {
  slug: string
  title: string
  image: string
  creator_email: string
  creator: string
  summary: string
  instructions: string
  imageFile: File
}

export async function saveMeal(meal: MealCreate) {
  meal.slug = slugify(meal.title, { lower: true }) // create slug with lowercase
  meal.instructions = xss(meal.instructions) // xss protection

  const extension = meal.imageFile.name.split('.').pop() // png, jeg (lấy ra đuôi ảnh)
  const fileName = `${meal.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`) // stream file

  const bufferedImage = await meal.imageFile.arrayBuffer() // get buffered image

  // Xử lý lưu file (Chỗ này cần phải cân nhắc xem nó có yêu cầu quyền không)
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!')
    }
  })

  meal.image = `/images/${fileName}` // sẽ lưu đường dẫn ảnh vào trong db

  // Xử lý lưu trữ vào db
  db.prepare(
    `
    INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) 
    VALUES(@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
  `,
  ).run(meal)
}
