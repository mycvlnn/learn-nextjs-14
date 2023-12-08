'use client'

import Link from 'next/link'
import classNames from 'classnames/bind'
import Image from 'next/image'
import logoImg from '@/assets/logo.png'
import styles from './main-header.module.scss'
import HeaderBackground from './header-background'
import { usePathname } from 'next/navigation'

const cx = classNames.bind(styles)

export default function MainHeader() {
  const path = usePathname()

  return (
    <>
      <HeaderBackground />
      <header className={cx('header')}>
        <Link className={cx('logo')} href="/">
          <Image src={logoImg} alt=" A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={cx('nav')}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={cx({ active: path.includes('/meals') })}
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={cx({ active: path.includes('/community') })}
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
