import React from "react";
import { useDropzone } from "react-dropzone";

function UploadFileEdit(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <h5 className="p-3"> Media</h5> 
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <img src="https://media.istockphoto.com/id/163208487/photo/male-coat-isolated-on-the-white.jpg?s=612x612&w=0&k=20&c=3Sdq5xnVS2jOYPNXI6JLwAumzyelcP_VgKVW0MVUhwo=" className="upload" alt="" />
        <p>Click or drag file to upload </p>
      </div>
      <aside>
        <h4>Files Item</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default UploadFileEdit;