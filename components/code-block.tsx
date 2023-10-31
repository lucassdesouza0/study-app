import { CodeBlock, dracula } from "react-code-blocks";

export default function CodeBlocksComp({ code, language, showLineNumbers }) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
}
