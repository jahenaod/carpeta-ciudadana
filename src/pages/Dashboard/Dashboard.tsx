import React, { useState } from "react";
import { uploadFile, getFileMetadata, deleteFile, authenticateDocument } from "./DashboardLogic";
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileMetadata, setFileMetadata] = useState<any>(null);
  const [userId, setUserId] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile && userId) {
      await uploadFile(userId, selectedFile);
      const metadata = await getFileMetadata(selectedFile.name);
      setFileMetadata(metadata);
    }
  };

  const handleDelete = async () => {
    if (selectedFile && userId) {
      await deleteFile(userId, selectedFile.name);
      setSelectedFile(null);
      setFileMetadata(null);
    }
  };

  const handleAuthenticate = async () => {
    if (fileMetadata) {
      const success = await authenticateDocument(123, fileMetadata.url, fileMetadata.name);
      if (success) {
        console.log("Document authenticated successfully.");
      }
    }
  };

  return (
    <div className="dashboard">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {fileMetadata && (
        <div>
          <h2>File Metadata:</h2>
          <p>Name: {fileMetadata.name}</p>
          <p>Size: {fileMetadata.size}</p>
          <p>Type: {fileMetadata.type}</p>
          <p>URL: {fileMetadata.url}</p>
          <p>Upload Date: {fileMetadata.uploadDate.toDate().toString()}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleAuthenticate}>Authenticate</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
