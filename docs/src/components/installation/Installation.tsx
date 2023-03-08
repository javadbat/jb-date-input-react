import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { coldarkCold } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeBox, InstallationSectionWrapper, InstallationTitle } from './styled';
function Installation() {
  return (
    <InstallationSectionWrapper>
      <InstallationTitle>Installation</InstallationTitle>
      <p>run the following command in terminal</p>
      <CodeBox language="bash" style={coldarkCold}>
        npm i jb-date-input-react
      </CodeBox>
    </InstallationSectionWrapper>

  );
}

export default Installation;