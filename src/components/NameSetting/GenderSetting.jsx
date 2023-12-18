import React from 'react'

export default function GenderSetting() {
  return (
    <section className="gender">
      <div className="gender-container">
        <div className="gender-text text-center">Gender</div>
        <div className="checkbox-container d-flex justify-content-between">
          <div className="checkbox-male-container d-flex flex-column justify-content-center align-items-center">
            <label htmlFor="checkbox-male">
              <input type="checkbox" name="checkboxMale" className="cursor-pointer"/>
            </label>
            <div className="checkbox-male-text">male</div>
          </div>
          <div className="checkbox-female-container d-flex flex-column justify-content-center align-items-center">
            <label htmlFor="checkbox-female">
              <input type="checkbox" name="checkboxFemale" className="cursor-pointer"/>
            </label>
            <div className="checkbox-female-text">female</div>
          </div>
        </div>
      </div>
    </section>
  )
}
