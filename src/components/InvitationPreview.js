import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const InvitationPreview = ({
  selectedTemplate,
  customText,
  customColor,
  customFont,
  customFontSize,
  customDate,
  customTime,
  customLocation,
  iconUrl,
  backgroundColor,
  textAlign
}) => {
  const previewRef = useRef();

  const handleDownload = () => {
    html2canvas(previewRef.current).then((canvas) => {
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
      pdf.save("invitation.pdf");
    });
  };

  return (
    <div>
      <div
        ref={previewRef}
        className="border p-4 rounded shadow"
        style={{
          backgroundColor,
          textAlign,
          fontFamily: customFont,
          fontSize: customFontSize,
          color: customColor,
          minHeight: "350px"
        }}
      >
        {selectedTemplate && (
          <h3 className="mb-3">{selectedTemplate} Invitation</h3>
        )}

        {iconUrl && (
          <img
            src={require(`../icons/${iconUrl}`)}
            alt="icon"
            style={{ width: 60, marginBottom: 15 }}
          />
        )}

        <p>{customText}</p>
        {customDate && <p>Date: {customDate}</p>}
        {customTime && <p>Time: {customTime}</p>}
        {customLocation && <p>Location: {customLocation}</p>}
      </div>

      <button onClick={handleDownload} className="btn btn-success mt-3">
        Download Invitation
      </button>
    </div>
  );
};

export default InvitationPreview;
