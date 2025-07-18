import React, { useState } from "react";
import TemplateSelector from "./components/TemplateSelector";
import InvitationPreview from "./components/InvitationPreview";
import CustomizationPanel from "./components/CustomizationPanel";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [customText, setCustomText] = useState("You're Invited!");
  const [customColor, setCustomColor] = useState("#000000");
  const [customFont, setCustomFont] = useState("Arial");
  const [customFontSize, setCustomFontSize] = useState("20px");
  const [customDate, setCustomDate] = useState("");
  const [customTime, setCustomTime] = useState("");
  const [customLocation, setCustomLocation] = useState("");
  const [iconUrl, setIconUrl] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#f8f9fa");
  const [textAlign, setTextAlign] = useState("center");

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">🎉 Custom Invitation Maker 🎉</h2>

      <TemplateSelector
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        onIconClick={setIconUrl}
      />

      <div className="row mt-4">
        <div className="col-md-6">
          <CustomizationPanel
            customText={customText}
            setCustomText={setCustomText}
            customColor={customColor}
            setCustomColor={setCustomColor}
            customFont={customFont}
            setCustomFont={setCustomFont}
            customFontSize={customFontSize}
            setCustomFontSize={setCustomFontSize}
            customDate={customDate}
            setCustomDate={setCustomDate}
            customTime={customTime}
            setCustomTime={setCustomTime}
            customLocation={customLocation}
            setCustomLocation={setCustomLocation}
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            textAlign={textAlign}
            setTextAlign={setTextAlign}
          />
        </div>

        <div className="col-md-6">
          <InvitationPreview
            selectedTemplate={selectedTemplate}
            customText={customText}
            customColor={customColor}
            customFont={customFont}
            customFontSize={customFontSize}
            customDate={customDate}
            customTime={customTime}
            customLocation={customLocation}
            iconUrl={iconUrl}
            backgroundColor={backgroundColor}
            textAlign={textAlign}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
