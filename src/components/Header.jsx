import React, { useEffect } from 'react';
import Head from 'next/head';

export default function Header() {
    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MS3PGCXS');
        `;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <Head prefix='og:http://ogp.me/ns#'>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width' />
            <title>Splatoon3 最新スケジュール</title>
            <meta name="description" content="スプラトゥーン3の最新スケジュール（レギュラー、バンカラ、X、イベント、フェス、サーモンラン）を見るならここ!!" />
            <meta property="og:url" content="https://www.splatoon3-schedule.net/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Splatoon3 スケジュール" />
            <meta property="og:description" content="スプラトゥーン3の最新スケジュール（レギュラー、バンカラ、X、イベント、フェス、サーモンラン）を見るならここ!!" />
            <meta property="og:site_name" content="Splatoon3 スケジュール" />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/icon.png"></link>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}