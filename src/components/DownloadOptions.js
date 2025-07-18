import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadOptions = () => {
  const downloadAsImage = () => {
    const element = document.getElementById("invitation-preview");
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = "invitation.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const downloadAsPDF = () => {
    const element = document.getElementById("invitation-preview");
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invitation.pdf");
    });
  };

  return (
    <div className="d-flex gap-2 mt-3">
      <button className="btn btn-outline-primary w-50" onClick={downloadAsImage}>
        <i className="bi bi-image me-1"></i>Download Image
      </button>
      <button className="btn btn-outline-success w-50" onClick={downloadAsPDF}>
        <i className="bi bi-file-earmark-pdf me-1"></i>Download PDF
      </button>
    </div>
  );
};

export default DownloadOptions;
