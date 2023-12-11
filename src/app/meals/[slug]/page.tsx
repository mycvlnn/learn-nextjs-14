import React from 'react'

import styles from './page.module.scss'
import classNames from 'classnames/bind'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation'

const cx = classNames.bind(styles)

interface IProps {
  params: {
    slug: string
  }
}

const MealDetail: React.FC<IProps> = ({ params }) => {
  const meal = getMeal(params.slug)

  if (!meal) {
    notFound()
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br>')

  return (
    <>
      <header className={cx('header')}>
        <div className={cx('image')}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>

        <div className={cx('headerText')}>
          <h1>{meal?.title}</h1>
          <p className={cx('creator')}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={cx('summary')}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={cx('instructions')}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  )
}

export default MealDetail
