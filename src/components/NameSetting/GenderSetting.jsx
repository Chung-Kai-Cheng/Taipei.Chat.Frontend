import React from 'react'

export default function GenderSetting() {
  return (
    <section className="gender">
      <div className="gender-container">
        <div className="gender-text text-center">Gender</div>
        <div className="radio-container d-flex justify-content-between">
          <div className="radio-male-container d-flex flex-column justify-content-center align-items-center">
            <input type="radio" name="gender" defaultValue="male"/>
            <div className="checkbox-male-text">Male</div>
          </div>
          <div className="radio-female-container d-flex flex-column justify-content-center align-items-center">
            <input type="radio" name="gender" defaultValue="female"/>
            <div className="checkbox-male-text">Female</div>
          </div>
        </div>
      </div>
    </section>
  )
}
