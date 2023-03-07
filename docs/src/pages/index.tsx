import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import dynamic from 'next/dynamic'
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const JBDateInput = dynamic(() => import('jb-date-input-react').then(module => module.default), {
        ssr: false,
    });
    return (
        <>
            <Head>
                <title>کامپوننت تقویم شمسی برای Reactjs</title>
                <meta name="description" content="دمو و مستندات کامپوننت دیت پیکر جلالی" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>JBDateInputReact</h1>
                <h2>ReactJs Jalali Date Picker</h2>
                <h2>کامپوننت تقویم شمسی برای ریاکت</h2>
                <JBDateInput></JBDateInput>
            </main>
        </>
    )
}
