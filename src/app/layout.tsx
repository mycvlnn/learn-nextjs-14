import React from 'react'
import './globals.css'
import MainHeader from '@/components/main-header/main-header'

interface IProps {
  children: React.ReactNode
}

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
}

const RootLayout: React.FC<IProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
