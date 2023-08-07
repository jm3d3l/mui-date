import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { addYears } from "date-fns";
export default function CustomMonthLayout() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateCalendar
        disableFuture
        yearsPerRow={4}
        minDate={new Date(2022, 1, 1)}
        maxDate={addYears(new Date(2024, 1, 1), 5)}
        fixedWeekNumber={6}
        views={["year", "month", "day"]}
      />
    </LocalizationProvider>
  );
}
