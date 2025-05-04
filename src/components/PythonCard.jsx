import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "../styles/components/PythonCard.scss";

const PythonCard = ({ title, code }) => {
  return (
    <div className="python-card" data-aos="fade-up">
      <h3>{title}</h3>
      <SyntaxHighlighter language="python" style={oneDark} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default PythonCard;
