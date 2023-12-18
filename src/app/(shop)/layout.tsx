import React from 'react'

interface IProps {
  children: React.ReactNode
}

const ShopLayout: React.FC<IProps> = ({ children }) => {
  return (
    <main>
      <header>Header Shop Layout</header>
      {children}
      <footer>Footer Shop Layout </footer>
    </main>
  )
}

export default ShopLayout
