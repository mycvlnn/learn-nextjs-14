import React from 'react'
import classes from './meals-grid.module.scss'
import MealItem, { IMeal } from './meal-item'

interface IProps {
  meals: IMeal[]
}

const MealsGrid: React.FC<IProps> = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem item={meal} />
          </li>
        )
      })}
    </ul>
  )
}

export default MealsGrid
