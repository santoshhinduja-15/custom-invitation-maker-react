import React from "react";

const WeddingTemplate = ({
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
      <p style={{ color }}>Wedding Date: <strong>{date}</strong></p>
      <p style={{ color }}>Time: <strong>{time}</strong></p>
      <p style={{ color }}>Venue: <strong>{location}</strong></p>
    </div>
  );
};

export default WeddingTemplate;
