import React from "react";

const EventIcons = ({ icons, setIconUrl }) => {
  return (
    <div className="mb-3">
      <p>Select an icon:</p>
      <div className="d-flex flex-wrap gap-3">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={require(`../icons/${icon}`)}
            alt={icon}
            style={{ width: "60px", cursor: "pointer" }}
            onClick={() => setIconUrl(require(`../icons/${icon}`))}
          />
        ))}
      </div>
    </div>
  );
};

export default EventIcons;
