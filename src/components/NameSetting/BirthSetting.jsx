import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export default function BirthSetting({ setBirthdate }) {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setBirthdate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section className="birth">
        <div className="title">Date of birth</div>
        <DesktopDatePicker
          value={selectedDate}
          onChange={handleDateChange}
          views={["year", "month"]}
        />
      </section>
    </LocalizationProvider>
  );
}
