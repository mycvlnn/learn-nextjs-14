'use client'

import React from 'react'
import { useAppContext } from '@/contexts/app-context'

const Counter = () => {
  const { counter, setCounter } = useAppContext()

  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={() => setCounter((prev) => prev + 1)}>Tang them</button>
    </div>
  )
}

export default React.memo(Counter)
