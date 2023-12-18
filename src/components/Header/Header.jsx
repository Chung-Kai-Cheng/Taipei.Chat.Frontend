import React from 'react'
import '../../styles/header.scss'

export default function Header({title}) {
  return (
    <header>
      <div className="text">
        {title}
      </div>
    </header>
  )
}
