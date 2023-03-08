import Head from 'next/head';
import Image from 'next/image';
import { fixMobileHeightVH } from '@/utils/helpers/layout-helper';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

export default function Home() {
    const JBDateInput = dynamic(() => import('jb-date-input-react').then(module => module.default), {
        ssr: false,
    });
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
                <h1>JBDateInputReact</h1>
                <h2>ReactJs Jalali Date Picker</h2>
                <h2>کامپوننت تقویم شمسی برای ریاکت</h2>
                <JBDateInput></JBDateInput>
            </main>
        </>
    )
}
