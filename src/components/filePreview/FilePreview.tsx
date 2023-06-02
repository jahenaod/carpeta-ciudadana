import React from 'react';

interface FilePreviewProps {
  fileUrl: string;
  onDelete: () => void;
  onValidate: () => void;
}

const FilePreview: React.FC<FilePreviewProps> = ({ fileUrl, onDelete, onValidate }) => {
  return (
    <div>
      <img src={fileUrl} alt="Preview" />
      <button onClick={onDelete}>Delete</button>
      <button onClick={onValidate}>Validate</button>
    </div>
  );
};

export default FilePreview;
