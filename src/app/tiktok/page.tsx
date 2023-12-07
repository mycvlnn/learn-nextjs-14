'use client'

import { useRouter } from 'next/navigation'
import styles from './page.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Tiktok = () => {
  const router = useRouter()

  const handleBackPage = () => {
    router.push('../')
  }

  return (
    <main>
      <h1 className={cx('heading')}>Tiktok page</h1>
      <button onClick={handleBackPage}>Goback</button>
    </main>
  )
}

export default Tiktok
