import React, { useState } from 'react';

export default function BirthSetting({ setBirthdate }) {
  const [selectedDate, setSelectedDate] = useState(''); // 初始值可以設為任何你需要的值

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    setBirthdate(newDate); // 將選擇的生日日期值回傳給父元件
  };

  return (
    <section className="birth">
      <div className="date-container">
        <label htmlFor="yearMonth">
          <div className="yearMonth-text text-center">Date of birth</div>
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
