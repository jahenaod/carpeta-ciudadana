import React, { useState } from "react";
import { uploadFile, getFileMetadata, deleteFile, authenticateDocument } from "./DashboardLogic";
import { BrowserRouter } from "react-router-dom";
import {
  DashboardWrapper,
  Heading,
  ButtonWrapper,
  Button,
} from "./Dashboard.styled";

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

  const handleUploadFile = () => {
    if (selectedFile && userId) {
    uploadFile(userId, selectedFile);
    }
  };

  const handleGetFileMetadata = async () => {
    if (selectedFile && userId) {
    const metadata = await getFileMetadata(selectedFile.name);
    setFileMetadata(metadata);
    }
  };

  const handleDeleteFile = () => {
    if (selectedFile && userId) {
    deleteFile(userId, selectedFile.name);
    }
  };

  const handleAuthenticateDocument = () => {
    authenticateDocument(123, fileMetadata.url, fileMetadata.name);
  };

  return (
    <DashboardWrapper>
      <Heading>Dashboard</Heading>
      <ButtonWrapper>
        <Button onClick={handleUploadFile}>Upload File</Button>
        <Button onClick={handleGetFileMetadata}>Get File Metadata</Button>
        <Button onClick={handleDeleteFile}>Delete File</Button>
        <Button onClick={handleAuthenticateDocument}>Authenticate Document</Button>
      </ButtonWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
