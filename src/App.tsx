import  { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

Here's a [link to React's website](https://reactjs.org/).

Inline code example: \`const message = 'Hello, world!'\`

\`\`\`javascript
// This is a code block example
function greet() {
  return 'Hello, world!';
}
\`\`\`

- List item 1
- List item 2
  - Nested list item

> This is a blockquote.

![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png)

**This text is bold.**
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <div className="box-container">
      <textarea
        id="editor"
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
      ></textarea>
      <div id="preview">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
