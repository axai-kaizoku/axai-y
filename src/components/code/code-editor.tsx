import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyButton } from "./copy-btn";

const CodeEditor = ({
  code,
  language = "typescript",
}: {
  code: string;
  language: string;
}) => {
  return (
    <div className="bg-gray-800 px-5 py-3 rounded-xl shadow-lg w-fit h-fit ">
      <CopyButton content={code} className="" />
      <SyntaxHighlighter
        language={language}
        customStyle={{
          backgroundColor: "transparent",
          fontSize: "0.9rem",
          width: "28rem",
          color: "transparent",
          height: "20rem",
          borderRadius: "0.3rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeEditor;
