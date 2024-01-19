import React, { useState } from "react";

export default function GenderSetting({ setGender }) {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    const genderValue = event.target.value;
    setSelectedGender(genderValue);
    setGender(genderValue);
  };
  return (
    <section className="gender">
      <div className="gender-container">
        <div className="title">Gender</div>
        <div className="radio-container d-flex justify-content-between">
          <div className="radio-male-container d-flex flex-column justify-content-center align-items-center">
            <input
              type="radio"
              name="gender"
              className="cursor-pointer"
              value="male"
              checked={selectedGender === "male"}
              onChange={handleGenderChange}
            />
            <div className="checkbox-text">Male</div>
          </div>
          <div className="radio-female-container d-flex flex-column justify-content-center align-items-center">
            <input
              type="radio"
              name="gender"
              className="cursor-pointer"
              value="female"
              checked={selectedGender === "female"}
              onChange={handleGenderChange}
            />
            <div className="checkbox-text">Female</div>
          </div>
        </div>
      </div>
    </section>
  );
}
