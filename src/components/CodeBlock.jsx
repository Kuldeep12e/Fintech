import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy, FiCheck } from "react-icons/fi";
import styles from "../style";
import PaymentCard from "./PaymentCard";
import { paymentCardsData } from "../constants";

const CodeBlockSection = ({ heading, subHeading, codeText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex flex-col lg:flex-row items-start justify-between gap-10 w-full px-4 mt-10 mb-10">

      <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">

    
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 z-10 text-white bg-[#181313] px-3 py-1 rounded-md flex items-center gap-2 hover:bg-[#333]"
        >
          {copied ? <FiCheck /> : <FiCopy />}
          {copied ? "Copied" : "Copy"}
        </button>

    
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          wrapLongLines={true}
          customStyle={{
            borderRadius: "12px",
            fontSize: "14px",
            background: "#1c1724", 
            padding: "20px",
            minHeight: "200px",
          }}
          showLineNumbers
        >
          {codeText}
        </SyntaxHighlighter>
      </div>

      {/* Right Side Content */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <h2 className={`${styles.heading2} text-center lg:text-left`}>
          {heading}
        </h2>

        <p className={`${styles.paragraph} text-center lg:text-left`}>
          {subHeading}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {paymentCardsData.map((item, index) => (
            <PaymentCard
              key={index}
              title={item.title}
              description={item.description}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeBlockSection;
