'use server'

import { redirect } from 'next/navigation'
import { saveMeal } from './meals'

// Hàm kiểm tra text không hợp lệ
function isInvalidText(text: string) {
  return !text || text.trim() === ''
}

export async function shareMeal(prevState: unknown, formData: FormData) {
  const meal = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    imageFile: formData.get('image') as File,
    image: '',
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    slug: '',
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.imageFile ||
    meal.imageFile.size === 0
  ) {
    // throw new Error('Invalid input!') // lỗi này sẽ hiển thị trong component error.tsx nếu được bật lên

    // Xử lý lỗi tại trang share luôn
    return {
      message: 'Invalid input',
    }
  }

  await saveMeal(meal)
  redirect('/meals') // Di chuyển đến màn hình danh sách món ăn
}
