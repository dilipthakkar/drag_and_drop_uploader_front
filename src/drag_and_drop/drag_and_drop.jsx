import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Redirect } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import "./drag_and_drop.css";

function MyDropzone() {
  const [files, setFiles] = useState([]);
  const [redirect ,setRedirect] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const newfiles = files;
    if(acceptedFiles[0]){
        newfiles.push(acceptedFiles[0]);
        setFiles(newfiles);
        console.log(files);
    }
    
  }, []);
  const { getRootProps, getInputProps, isDragActive ,open} = useDropzone({ onDrop , accept : '.csv' });

  const uplaod2 = () => {
    const url = "http://localhost:8000/";
    const formdata = new FormData();

    for (let i = 0; i < files.length; i++) {
      formdata.append("files", files[i]);
    }
    console.log(files);
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formdata,
    }).then((response) => {
      console.log(response.json());
      setRedirect(true);
    });
    
  };

  const redirectfunc = ()=>(
    redirect ? 
    (<div> <Redirect to="/allfiles"/> </div>) : (<div></div>)
  )

  return (
    <div>
      {redirectfunc()}
      <div className="main__container" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
        <hr/>
        <div>
          {files.map((item) => (
            <div className="selected_files">{
                (item.name)}</div>
          ))}
        </div>

      </div>
      <button className="upload_btn" onClick={open}>select</button>

      <button className="upload_btn" onClick={uplaod2}>UPLOAD</button>
    
    </div>
  );
}
export default MyDropzone;
