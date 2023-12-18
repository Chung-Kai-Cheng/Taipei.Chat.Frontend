import React from 'react'
import '../../styles/footer.scss'

export default function Footer({children}) {
  return (
    <button className="cursor-pointer">
      <h1>
        {children}
      </h1>
    </button>
  )
}
