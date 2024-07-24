import Link from 'next/link';
import Head from 'next/head';
import styles from 'styles/Home.module.css';
import MatchTabs from 'components/MatchTabs';
import { fetchData } from 'lib/api';

export default function Home({ sch, festOpSch, salmonSch, errorMsg }) {
  return (
    <div className={styles.container}>
      <Head prefix='og:http://ogp.me/ns#'>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width' />
        <title>Spla3 Stage Schedule</title>
        {/* <meta name="description" content="スプラ3のステージスケジュール" />
        <meta property="og:url" content="アプリのURL" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Spla3 Stage Schedule" />
        <meta property="og:description" content="スプラ3のステージスケジュール" />
        <meta property="og:site_name" content="Spla3 Stage Schedule" />
        <meta property="og:image" content="Facebook や Twitter などのソーシャルメディアプラットフォームで、ウェブページのリンクが共有されたときに表示されるサムネイル画像として使用される" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="manifest" href="アプリの名前やアイコン情報、アプリが開いた時のURL設定など、色々な情報が設定" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="icon" href="ブラウザのタブに表示される小さいアイコン" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Splatoon3 スケジュール</h1>

        {errorMsg ? (
          <div className={styles.error}>
            <p>{errorMsg}</p>
          </div>
        ) : (
          <MatchTabs sch={sch} festOpSch={festOpSch} salmonSch={salmonSch} />
        )}
      </main>

      <footer className={styles.footer}>
        <p>Developed by inokei1704@gmail.com{" "}
          This App using <a href="https://spla3.yuu26.com/">Spla3 API</a>.</p>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const sch = await fetchData('https://spla3.yuu26.com/api/schedule');
    const festOpSch = await fetchData('https://spla3.yuu26.com/api/fest/schedule');
    const salmonSch = await fetchData('https://spla3.yuu26.com/api/coop-grouping/schedule');

    // console.log('sch:', JSON.stringify(sch, null, 2));
    // console.log('festOpSch:', JSON.stringify(festOpSch, null, 2));
    // console.log('salmonSch:', JSON.stringify(salmonSch, null, 2));

    return {
      props: { sch, festOpSch, salmonSch, errorMsg: null },
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      props: { sch: null, festOpSch: null, salmonSch: null, errorMsg: 'データの取得に失敗しました。しばらく経ってから再度お試しください。' },
    };
  }
};
