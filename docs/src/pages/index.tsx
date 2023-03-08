import Head from 'next/head';
import Image from 'next/image';
import { fixMobileHeightVH } from '@/utils/helpers/layout-helper';
import { useEffect } from 'react';
import IntroSection from '@/components/intro-section/IntroSection';
import AboutSection from '@/components/about-section/AboutSection';
import Installation from '@/components/installation/Installation';
import Samples from '@/components/samples/Samples';

export default function Home() {

  useEffect(() => {
    fixMobileHeightVH();
  }, []);
  return (
    <>
      <Head>
        <title>کامپوننت تقویم شمسی برای Reactjs</title>
        <meta name="description" content="دمو و مستندات کامپوننت دیت پیکر جلالی" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IntroSection></IntroSection>
        <AboutSection></AboutSection>
        <Installation></Installation>
        <Samples></Samples>
      </main>
    </>
  );
}
