'use client'

import Link from 'next/link'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './navlink.module.scss'

import { usePathname } from 'next/navigation'

const cx = classNames.bind(styles)

interface IProps {
  href: string
  children: React.ReactNode
}

const NavLink: React.FC<IProps> = ({ href, children }) => {
  const path = usePathname()

  return (
    <Link
      href={href}
      className={cx('link', {
        active: path.startsWith(href),
      })}
    >
      {children}
    </Link>
  )
}

export default NavLink
