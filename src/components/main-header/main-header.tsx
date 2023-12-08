import Link from 'next/link'
import classNames from 'classnames/bind'
import Image from 'next/image'
import logoImg from '@/assets/logo.png'
import styles from './main-header.module.scss'
import HeaderBackground from './header-background'
import NavLink from '../navlink/navlink'

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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
