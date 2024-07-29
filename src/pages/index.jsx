import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from 'next/head';
import PropTypes from 'prop-types';
import styles from 'styles/Home.module.css';
import { fetchData } from 'lib/api';
import TabSchedule from 'components/tabs/TabSchedule';

export default function Home({ sch, festOpSch, salmonSch, error }) {

  return (
    <div className={styles.container}>
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
        {/* <meta property="og:image" content="Facebook や Twitter などのソーシャルメディアプラットフォームで、ウェブページのリンクが共有されたときに表示されるサムネイル画像として使用される" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Splatoon3 スケジュール</h1>
        <TabSchedule sch={sch} festOpSch={festOpSch} salmonSch={salmonSch} />
        <SpeedInsights />
        {error && <div className={styles.error}>{error}</div>}
      </main>

      <footer className={styles.footer}>
        <p>Developed by inokei1704@gmail.com{" "}
          This App using <a href="https://spla3.yuu26.com/">Spla3 API</a>.</p>
      </footer>
    </div>
  )
}

Home.propTypes = {
  sch: PropTypes.object,
  festOpSch: PropTypes.object,
  salmonSch: PropTypes.object,
  error: PropTypes.string
};

export const getStaticProps = async () => {
  try {
    const sch = await fetchData('https://spla3.yuu26.com/api/schedule');
    const festOpSch = await fetchData('https://spla3.yuu26.com/api/fest/schedule');
    const salmonSch = await fetchData('https://spla3.yuu26.com/api/coop-grouping/schedule');

    return {
      props: {
        sch,
        festOpSch,
        salmonSch,
        error: null
      },
    };

  } catch (error) {
    console.error('Failed to fetch or validate data:', error);
    return {
      props: {
        sch: null,
        festOpSch: null,
        salmonSch: null,
        error: "データを取得できませんでした。しばらく経ってから再度お試しください。"
      },
    };
  }
};