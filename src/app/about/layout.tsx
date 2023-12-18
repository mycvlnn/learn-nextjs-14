import React from 'react'

interface IProps {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
}

const LayoutAbout: React.FC<IProps> = (props) => {
  return (
    <>
      {props.children}
      {props.team}
      {props.analytics}
    </>
  )
}

export default LayoutAbout
