import { useState } from "react";
import { FileUpload } from "react-ipfs-uploader";
import './App.css';

function App() {

  const [fileUrl, setFileUrl] = useState("");

  console.log(fileUrl)
  return (
    <div className="App">
           <FileUpload setUrl={setFileUrl} />
      FileUrl :{" "}
      <a href={fileUrl} target="_blank" rel="noopener noreferrer">
        {fileUrl}
      </a>
    </div>
  );
}

export default App;
