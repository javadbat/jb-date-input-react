import styled from "styled-components";
import {down} from 'styled-breakpoints';

export const IntroWrapper = styled.section`
    padding: 64px 32px;
    display: flex;
    flex-direction: column;
    justify-content:center ;
    align-items: center;
    ${down("lg")}{
      max-width: calc(100% - 16px);
      padding: 32px 0;
    }
`;
export const ComponentName= styled.h1`
font-size: 5rem;
font-weight: 800;
color:#010101;
text-align: center;
${down("lg")}{
    font-size: 2rem;
    word-break: break-all;
    }
`;
export const ComponentSubtitle = styled.h2`
    color:#404040;
`;