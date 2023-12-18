import React from 'react'

export default function BirthSetting() {
  return (
    <section className="birth">
      <div className="date-container">
        <label htmlFor="yearMonth">
          <div className="yearMonth-text text-center">Date of birth</div>
          <input type="month" name="yearMonth" className="cursor-pointer"/>
        </label>
      </div>
    </section>
  )
}
