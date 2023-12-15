import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Nimonemo_terms from 'assets/Nimonemo_terms.pdf';

const TermPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={Nimonemo_terms} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        <span onClick={() => pageNumber > 1 ? setPageNumber(pageNumber - 1) : null}>&lt;</span>
        <span>Page {pageNumber} of {numPages}</span>
        <span onClick={() => pageNumber < numPages ? setPageNumber(pageNumber + 1) : null}>&gt;</span>
      </p>
    </div>
  );
};

export default TermPage;
