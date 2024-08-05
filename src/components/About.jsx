import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/About.module.css";

export default function About() {
    return (
        <>
            <Header />
            <Main />
        </>
    );
}

function Header() {
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
    )
}

function Main() {
    return (
        <div className={styles.container}>
            <p className={styles.lastUpdated}>最終更新日: 2023年7月30日</p>
            <h1 className={styles.title}>About</h1>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>アプリについて</h2>
                <p className={styles.paragraph}>これはスプラトゥーン3の最新スケジュール（レギュラーマッチ、バンカラマッチ、Xマッチ、イベントマッチ、フェスマッチ、サーモンラン）を確認できるWebアプリです。</p>
                <p className={styles.paragraph}>スプラトゥーン3のあらゆるスケジュールを手軽に見れる方法はこれまでになかったので、このアプリを作成しました。</p>
                <p className={styles.paragraph}>スマートフォンやタブレット、PCからアクセスできます。</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>使用リソース</h2>
                <p className={styles.paragraph}>スケジュールの取得にあたり使用しているAPIについては<a href="https://spla3.yuu26.com/" className={styles.link}>こちら</a>をクリック。</p>
                <p className={styles.paragraph}>使用しているfaviconについては<a href="https://onwa-illust.com/material/26189/" className={styles.link}>こちら</a>をクリック。</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>アイコンについて</h2>
                <p className={styles.paragraph}>スケジュールの選択ボタンで使用しているアイコンについては以下をクリック。</p>
                <ul className={styles.list}>
                    <li className={styles.listItem}><a href="https://splatoonwiki.org/wiki/Regular_Battle" className={styles.link}>レギュラーマッチのアイコン</a></li>
                    <li className={styles.listItem}><a href="https://splatoonwiki.org/wiki/Anarchy_Battle" className={styles.link}>バンカラマッチのアイコン</a></li>
                    <li className={styles.listItem}><a href="https://splatoonwiki.org/wiki/X_Battle" className={styles.link}>Xマッチのアイコン</a></li>
                    <li className={styles.listItem}><a href="https://splatoonwiki.org/wiki/Challenge" className={styles.link}>イベントマッチのアイコン</a></li>
                    <li className={styles.listItem}><a href="https://splatoonwiki.org/wiki/Splatfest" className={styles.link}>フェスマッチのアイコン</a></li>
                    <li className={styles.listItem}><a href="https://splatoonwiki.org/wiki/Salmon_Run_(series)" className={styles.link}>サーモンランのアイコン</a></li>
                </ul>
            </section>

            <p className={styles.contact}>連絡・問い合わせは次のメールアドレスへお願いします。<br />inokei1704@gmail.com</p>
        </div>
    );
}