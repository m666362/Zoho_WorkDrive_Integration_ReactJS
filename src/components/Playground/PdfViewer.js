function PdfViewer({profileImage}) {
  const src = `lib/web/viewer.html?file=${profileImage}`
  return (
    <div className="App">
      <iframe
        id="pdf-js-viewer"
        src={src}
        title="webviewer"
        frameborder="5"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}

export default PdfViewer;