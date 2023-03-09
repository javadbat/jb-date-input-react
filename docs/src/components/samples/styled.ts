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
  jb-date-input{
    width: 100%;
  }
`;
export const FormalTheme = styled(JBDateInput)`
  --jb-date-input-border-radius:0;
  --jb-date-input-border-color:#888;
  --jb-date-input-border-color-focus:#000;
  --jb-date-input-bgcolor:#fff;
  --jb-date-input-message-box-color:blue;
  --jb-date-input-border-bottom-width:1px;
  --jb-date-input-label-font-size	:1.3em;
  --jb-date-input-value-color:#434343;
  --jb-date-input-value-font-size:1.3em;
  --jb-date-input-calender-wrapper-bg-color:#fefefe;
  --jb-date-input-calender-wrapper-border-radius:0;
  --jb-calendar-arrow-button-border-radius:0;
`;
export const RTLJBDateInput = styled(JBDateInput)`
direction: rtl;
`;