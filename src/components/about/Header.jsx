import React from "react";
import Head from "next/head";
import GoogleTag from "scripts/GoogleTag";

export default function Header() {
    return (
        <>
            <Head prefix='og:http://ogp.me/ns#'>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width' />
                <title>Splatoon3 最新スケジュール</title>
                <meta name="description" content="このアプリについて スプラトゥーン3の最新スケジュール" />
                <meta property="og:url" content="https://www.splatoon3-schedule.net/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Splatoon3 スケジュール" />
                <meta property="og:description" content="このアプリについて スプラトゥーン3の最新スケジュール" />
                <meta property="og:site_name" content="Splatoon3 スケジュール" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png"></link>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GoogleTag />
        </>
    )
}