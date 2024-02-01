import React from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function GenderSetting({ setGender }) {
  const handleGenderChange = (event) => {
    const genderValue = event.target.value;
    setGender(genderValue);
  };
  return (
    <section className="gender">
      <div className="gender-container">
        <div className="title">Gender</div>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={handleGenderChange}
          row={true}
        >
          <div className="radio-container">
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              labelPlacement="bottom"
            />
          </div>
          <div className="radio-container">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              labelPlacement="bottom"
            />
          </div>
        </RadioGroup>
      </div>
    </section>
  );
}
