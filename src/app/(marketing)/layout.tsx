import React from 'react'

interface IProps {
  children: React.ReactNode
}

const LayoutMarketing: React.FC<IProps> = ({ children }) => {
  return (
    <main>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </main>
  )
}

export default LayoutMarketing
