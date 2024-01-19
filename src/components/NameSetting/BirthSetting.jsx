import React, { useState } from "react";

export default function BirthSetting({ setBirthdate }) {
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    setBirthdate(newDate);
  };

  return (
    <section className="birth">
      <div className="date-container">
        <label htmlFor="yearMonth">
          <div className="title">Date of birth</div>
          <input
            type="month"
            name="yearMonth"
            value={selectedDate}
            onChange={handleDateChange}
            className="cursor-pointer"
          />
        </label>
      </div>
    </section>
  );
}
