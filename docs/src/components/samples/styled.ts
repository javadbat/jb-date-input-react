import styled from "styled-components";
import dynamic from 'next/dynamic';
const JBDateInput = dynamic(() => import('jb-date-input-react').then(module => module.JBDateInput), {
  ssr: false,
});
export const SamplesSectionWrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const SamplesTitle = styled.h2`
        font-size: 2rem;
        color:#101010;
        text-align: center;
`;
export const SamplesWrapper = styled.div`
  max-width: 400px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  gap:1rem;
  jb-date-input{
    width: 100%;
  }
`;
export const FormalTheme = styled(JBDateInput)`
  --jb-input-border-radius:0;
  --jb-input-border-color:#888;
  --jb-input-border-color-focus:#000;
  --jb-input-bgcolor:#fff;
  --jb-input-message-box-color:blue;
  --jb-input-border-bottom-width:1px;
  --jb-input-label-font-size	:1.3em;
  --jb-input-value-color:#434343;
  --jb-input-value-font-size:1.3em;
  --jb-input-calender-wrapper-bg-color:#fefefe;
  --jb-input-calender-wrapper-border-radius:0;
  --jb-calendar-arrow-button-border-radius:0;
`;
export const RTLJBDateInput = styled(JBDateInput)`
direction: rtl;
`;