import SyntaxHighlighter from "react-syntax-highlighter";
import styled from "styled-components";

export const InstallationSectionWrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const InstallationTitle = styled.h2`
        font-size: 2rem;
        color:#101010;
        text-align: center;
`;
export const CodeBox = styled(SyntaxHighlighter)`
    width: 400px;
`;