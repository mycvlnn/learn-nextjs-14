import React from 'react'
import './globals.css'
import MainHeader from '@/components/main-header/main-header'
import AppProvider from '@/contexts/app-context'

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
        <AppProvider>
          <MainHeader />
          {children}
        </AppProvider>
      </body>
    </html>
  )
}

export default RootLayout
