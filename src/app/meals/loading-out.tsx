import styles from './loading.module.scss'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const MealsLoading = () => {
  return <p className={cx('loading')}>Meals Fetching...</p>
}

export default MealsLoading
