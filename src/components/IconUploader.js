import React from "react";

const IconUploader = ({ setIconUrl }) => {
  const handleIconUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setIconUrl(imageUrl);
    }
  };

  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">
        <i className="bi bi-image me-2"></i>Upload Custom Icon
      </label>
      <input
        type="file"
        className="form-control"
        accept="image/*"
        onChange={handleIconUpload}
      />
    </div>
  );
};

export default IconUploader;
