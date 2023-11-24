import React from "react";

const MinutesToHoursAndMinutes = ({minutes}) => {

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return (
    <>
      {hours}ч. {remainingMinutes}м.
    </>
  );
};

export default MinutesToHoursAndMinutes;
