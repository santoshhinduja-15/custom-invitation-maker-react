import React from "react";

const PartyTemplate = ({
  text,
  color,
  font,
  fontSize,
  date,
  time,
  location,
  iconUrl,
  backgroundColor,
  textAlign,
}) => {
  return (
    <div
      style={{
        backgroundColor,
        padding: "30px",
        textAlign: textAlign || "center",
        borderRadius: "15px",
        minHeight: "400px",
      }}
    >
      {iconUrl && (
        <img
          src={iconUrl}
          alt="icon"
          style={{
            width: "100px",
            height: "100px",
            marginBottom: "20px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      )}
      <h2 style={{ color, fontFamily: font, fontSize }}>{text}</h2>
      <p style={{ color }}>Party On: <strong>{date}</strong></p>
      <p style={{ color }}>Time: <strong>{time}</strong></p>
      <p style={{ color }}>At: <strong>{location}</strong></p>
    </div>
  );
};

export default PartyTemplate;
