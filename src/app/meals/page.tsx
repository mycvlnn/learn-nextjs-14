import Link from 'next/link'

const MealsPage = () => {
  return (
    <main>
      <h1>Meals List</h1>
      <p>
        <Link href="/meals/m-1">Meal 1</Link>
      </p>
      <p>
        <Link href="/meals/m-2">Meal 2</Link>
      </p>
      <p>
        <Link href="/meals/m-3">Meal 3</Link>
      </p>
    </main>
  )
}

export default MealsPage
