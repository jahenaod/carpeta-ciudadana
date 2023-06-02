import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { doc, setDoc, getDoc, deleteDoc, Timestamp } from "firebase/firestore";
import { storage, db } from '../../services/firebase';

// Upload a file to Firebase Storage
export async function uploadFile(userId: string, file: File) {
  const fileRef = ref(storage, `${userId}/${file.name}`);
  await uploadBytes(fileRef, file);
  // Get download URL
  const downloadURL = await getDownloadURL(fileRef);
  // Store metadata in Firestore
  const metadata = {
    name: file.name,
    size: file.size,
    type: file.type,
    url: downloadURL,
    uploadDate: Timestamp.now(),
  };
  await setDoc(doc(db, 'files', file.name), metadata);
}

// Get metadata for a file
export async function getFileMetadata(fileName: string) {
  const docRef = doc(db, 'files', fileName);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No such document!');
    return null;
  }
}

// Delete a file
export async function deleteFile(userId: string, fileName: string) {
  const fileRef = ref(storage, `${userId}/${fileName}`);
  await deleteObject(fileRef);
  // Delete metadata from Firestore
  await deleteDoc(doc(db, 'files', fileName));
}

// Authenticate a document
export async function authenticateDocument(id: number, UrlDocument: string, documentTitle: string) {
  const operatorCode = 10003; // your operator code
  const url = `http://169.51.195.62:30174/apis/authenticateDocument/${id}/${UrlDocument}/${documentTitle}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Operator-Code': operatorCode.toString(),
        // add any other headers required by the API
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // if the API returns JSON data, you can parse it like this:
    const data = await response.json();
    console.log(data);

    // if the API doesn't return any data (204 No Content), you can just return true to indicate success:
    return true;
  } catch (error) {
    console.error('Error authenticating document:', error);
    return false;
  }
}
