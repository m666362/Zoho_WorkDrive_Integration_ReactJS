import React, { useEffect, useState } from "react";
import AllPages from "./AllPages";
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MyApp() {
  return (
    <div>
      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPages/>
      </div>
    </div>
  );
}

export default MyApp;
