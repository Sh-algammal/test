"use client";
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import cpp from 'highlight.js/lib/languages/cpp';
import 'highlight.js/styles/github-dark.css'; // Or choose another theme

hljs.registerLanguage('cpp', cpp);

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]); // Re-run highlight when code changes

  return (
    <pre className="bg-gray-900 rounded-md overflow-x-auto text-sm"> {/* Adjusted font size */}
      <code ref={codeRef} className={`language-${language} p-4 block`}> {/* Added padding and block display */}
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;

