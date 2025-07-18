// src/components/CustomizationPanel.js
import React from "react";

const CustomizationPanel = ({
  customText,
  setCustomText,
  customColor,
  setCustomColor,
  customFont,
  setCustomFont,
  customFontSize,
  setCustomFontSize,
  customDate,
  setCustomDate,
  customTime,
  setCustomTime,
  customLocation,
  setCustomLocation,
  backgroundColor,
  setBackgroundColor,
  textAlign,
  setTextAlign,
}) => {
  return (
    <div className="card mb-4 p-4 shadow-sm">
      <h5 className="mb-3">Customize Invitation</h5>

      <div className="mb-3">
        <label className="form-label">Invitation Text</label>
        <input
          type="text"
          className="form-control"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Font Color</label>
        <input
          type="color"
          className="form-control form-control-color"
          value={customColor}
          onChange={(e) => setCustomColor(e.target.value)}
        />
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Font Family</label>
          <select
            className="form-select"
            value={customFont}
            onChange={(e) => setCustomFont(e.target.value)}
          >
            <option>Arial</option>
            <option>Georgia</option>
            <option>Times New Roman</option>
            <option>Verdana</option>
          </select>
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Font Size</label>
          <input
            type="text"
            className="form-control"
            value={customFontSize}
            onChange={(e) => setCustomFontSize(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Text Alignment</label>
          <select
            className="form-select"
            value={textAlign}
            onChange={(e) => setTextAlign(e.target.value)}
          >
            <option value="center">Center</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={customDate}
            onChange={(e) => setCustomDate(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Time</label>
          <input
            type="time"
            className="form-control"
            value={customTime}
            onChange={(e) => setCustomTime(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            value={customLocation}
            onChange={(e) => setCustomLocation(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Background Color</label>
        <input
          type="color"
          className="form-control form-control-color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomizationPanel;
