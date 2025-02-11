import React, { useState } from 'react';

const CopyableCodeBlock = ({ code, language = 'cpp' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Nested function to process code and wrap // comments in a span with class "nested-comment"
  const processCode = (codeStr) => {
    return codeStr.replace(/(\/\/.*)/g, '<span class="nested-comment">$1</span>');
  };

  return (
    <div style={{ position: 'relative' }}>
      <button 
        className="copy-btn"
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1,
          backgroundColor: '#888888', // default button color
          color: '#ffffff',
          padding: '6px 12px',  
          borderRadius: '12px',  
          cursor: 'pointer',
          fontSize: '0.9rem',
          border: 'none',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
          transition: 'background-color 0.3s ease',
          display: 'flex',
          alignItems: 'center'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#666666'; // color on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#888888';
        }}
      >
        {copied ? (
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="16" 
              height="16" 
              fill="#ffffff" 
              viewBox="0 0 16 16"
            >
              <path d="M16 3.5l-5.2 5.2L5.8 5.7l-.8.8 5 5 6-6-.8-.8z"/>
            </svg>
            <span style={{ marginLeft: '4px' }}>Copied</span>
          </span>
        ) : (
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              fill="#ffffff" 
              viewBox="0 0 16 16"
            >
              <path d="M13 1H5a2 2 0 0 0-2 2v1H1v10h10v-2h2v2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM5 2h8a1 1 0 0 1 1 1v1H4V3a1 1 0 0 1 1-1zm7 7H4v5h8V9z"/>
            </svg>
            <span style={{ marginLeft: '4px' }}>Copy</span>
          </span>
        )}
      </button>
      <pre style={{ padding: '12px', borderRadius: '4px', backgroundColor: '#f4f4f4', marginBottom: '15px' }}>
        <code 
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: processCode(code) }}
        />
      </pre>
    </div>
  );
};

export default CopyableCodeBlock;