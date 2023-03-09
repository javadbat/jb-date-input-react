import React from 'react'
import { ComponentName, ComponentSubtitle, IntroWrapper } from './styled';
import dynamic from 'next/dynamic';

function IntroSection() {
  const JBDateInput = dynamic(() => import('jb-date-input-react').then(module => module.JBDateInput), {
    ssr: false,
  });
  return (
    <IntroWrapper>
      <ComponentName>JBDateInputReact</ComponentName>
      <ComponentSubtitle>ReactJs Jalali Date Picker</ComponentSubtitle>
      <ComponentSubtitle>کامپوننت تقویم شمسی برای ریاکت</ComponentSubtitle>
      <JBDateInput>{}</JBDateInput>
    </IntroWrapper>
  );
}

export default IntroSection;