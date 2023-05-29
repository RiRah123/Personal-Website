import React, { useState } from "react";
function TimelineFilter({ onChange }) {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    if (onChange) {
      onChange(year);
    }
  };

  const resetTimeline = () => {
    setSelectedYear(null);
    if (onChange) {
      onChange(null);
    }
  };

  const currentYear = new Date().getFullYear();

  const renderTimeline = () => {
    const years = Array.from({ length: currentYear - 2020 + 1 }, (_, index) => 2020 + index);

    return (
      <div className="timeline-filter">
        <div className="triangle-left"></div>
        {years.map((year) => (
          <div
            key={year}
            className={`timeline-filter-item${selectedYear === year ? " active" : ""}`}
            onClick={() => handleYearChange(year)}
          >
            {year}
          </div>
        ))}
        <div className="triangle-right"></div>
        <div className="reset-timeline" onClick={resetTimeline}>
          Reset Timeline
        </div>
      </div>
    );
  };

  return <>{renderTimeline()}</>;
}

export default TimelineFilter;