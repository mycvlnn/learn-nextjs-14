import React from 'react'

interface IProps {
  params: {
    slug: string
  }
}

const MealDetail: React.FC<IProps> = ({ params }) => {
  return (
    <main>
      <h1>Meal Detail {params.slug} </h1>
    </main>
  )
}

export default MealDetail
