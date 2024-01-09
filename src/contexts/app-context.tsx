'use client'

import React, { createContext, useContext, useState } from 'react'

interface ContextProps {
  // Định nghĩa các thuộc tính bạn muốn chia sẻ
  // Ví dụ: user, functions, etc.
  // Có thể sử dụng typescript generics nếu cần thiết
  counter: number
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

const AppContext = createContext<ContextProps>({
  counter: 1,
  setCounter: () => {},
})

interface IProps {
  children: React.ReactNode
}

const AppProvider: React.FC<IProps> = ({ children }) => {
  const [counter, setCounter] = useState(1)

  const values = {
    counter,
    setCounter,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export default AppProvider

export const useAppContext = () => useContext(AppContext)
