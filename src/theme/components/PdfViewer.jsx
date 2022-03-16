import React, { useState, useEffect } from "react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import {  Page } from "react-pdf";
import { Document } from 'react-pdf/dist/entry.webpack';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.entry.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

const myFile = {
  lastModified: 1631539651332,
  name: "./Rayhan.pdf",
  size: 26729,
  type: "application/pdf",
  webkitRelativePath: "./",
}

function PdfViewer(props) {
  const [file, setFile] = useState("http://localhost:3000/Rayhan.pdf");
  const [numPages, setNumPages] = useState(null);


  function onFileChange(event) {
    console.log(event);
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <header>
        <h1>react-pdf sample page</h1>
      </header>
      <div className="Example__container">
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>
          {' '}
          <input
            onChange={onFileChange}
            type="file"
          />
        </div>
        <div className="Example__container__document">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            }
          </Document>
        </div>
      </div>
    </div>
  );
}

export default PdfViewer;
