import Link from 'next/link'
import classNames from 'classnames/bind'
import Image from 'next/image'
import logoImg from '@/assets/logo.png'
import styles from './main-header.module.scss'
import HeaderBackground from './header-background'

const cx = classNames.bind(styles)

export default function MainHeader() {
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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
