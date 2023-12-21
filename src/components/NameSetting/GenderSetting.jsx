import React, {useState} from 'react'

export default function GenderSetting({onGenderSelected}) {
  const [selectedGender,setSelectedGender] = useState('')

  const handleGenderChange = (event) => {
    const genderValue = event.target.value
    setSelectedGender(genderValue)
    onGenderSelected(genderValue)
  }
  return (
    <section className="gender">
      <div className="gender-container">
        <div className="gender-text text-center">Gender</div>
        <div className="radio-container d-flex justify-content-between">
          <div className="radio-male-container d-flex flex-column justify-content-center align-items-center">
            <input type="radio" name="gender" className="cursor-pointer" value="male" onChange={handleGenderChange}/>
            <div className="checkbox-male-text">Male</div>
          </div>
          <div className="radio-female-container d-flex flex-column justify-content-center align-items-center">
            <input type="radio" name="gender" className="cursor-pointer" value="female" onChange={handleGenderChange}/>
            <div className="checkbox-male-text">Female</div>
          </div>
        </div>
      </div>
    </section>
  )
}
