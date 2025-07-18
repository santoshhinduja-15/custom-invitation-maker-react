import React from "react";

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate, onIconClick }) => {
  const handleTemplateChange = (e) => {
    const value = e.target.value;
    setSelectedTemplate(value);
    onIconClick(null); // reset icon
  };

  const icons = {
    Birthday: ["balloons.png", "birthday-cake.png"],
    Wedding: ["diamond-ring.png", "flowers.png"],
    Party: ["disco-ball.png", "cocktail.png"],
  };

  return (
    <div className="mb-4">
      <label className="form-label">Select Event Type</label>
      <select className="form-select" value={selectedTemplate} onChange={handleTemplateChange}>
        <option value="" disabled>Select an event</option>
        <option value="Birthday">Birthday</option>
        <option value="Wedding">Wedding</option>
        <option value="Party">Party</option>
      </select>

      {selectedTemplate && (
        <div className="mt-3">
          <h6>Select Icon</h6>
          <div className="d-flex gap-3 flex-wrap">
            {icons[selectedTemplate]?.map((icon, index) => (
              <img
                key={index}
                src={require(`../icons/${icon}`)}
                alt={icon}
                className="img-thumbnail"
                style={{ width: 60, height: 60, cursor: "pointer" }}
                onClick={() => onIconClick(icon)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
