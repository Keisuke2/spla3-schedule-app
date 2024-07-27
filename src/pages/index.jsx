import Head from 'next/head';
import styles from 'styles/Home.module.css';
import MatchTabs from 'components/MatchTabs';
import { fetchData } from 'lib/api';
import path from 'path';  // 追加
import fs from 'fs';      // 追加

export default function Home({ sch, festOpSch, salmonSch, error }) {

  return (
    <div className={styles.container}>
      <Head prefix='og:http://ogp.me/ns#'>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width' />
        <title>Splatoon3 最新スケジュール</title>
        <meta name="description" content="スプラトゥーン3のスケジュール" />
        {/* <meta property="og:url" content="アプリのURL" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Splatoon3 スケジュール" />
        <meta property="og:description" content="スプラトゥーン3のスケジュール" />
        <meta property="og:site_name" content="Splatoon3 スケジュール" />
        {/* <meta property="og:image" content="Facebook や Twitter などのソーシャルメディアプラットフォームで、ウェブページのリンクが共有されたときに表示されるサムネイル画像として使用される" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Splatoon3 スケジュール</h1>

        <MatchTabs sch={sch} festOpSch={festOpSch} salmonSch={salmonSch} />
        {error && <p className={styles.error}>{error}</p>}
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
    const filePath_testData = path.join(process.cwd(), 'src', '__test__', 'testData.json');
    const filePath_festOpSch = path.join(process.cwd(), 'src', '__test__', 'fest_openData.json');

    let sch, festOpSch;

    try {
      const json_testData = fs.readFileSync(filePath_testData, 'utf8');
      const json_festOpSch = fs.readFileSync(filePath_festOpSch, 'utf8');
      sch = JSON.parse(json_testData);
      festOpSch = JSON.parse(json_festOpSch);
    } catch (fileError) {
      console.error('Failed to read or parse local files:', fileError);
      // ファイルの読み込みに失敗した場合、APIからデータを取得
      sch = await fetchData('https://spla3.yuu26.com/api/schedule');
      festOpSch = await fetchData('https://spla3.yuu26.com/api/fest/schedule');
    }

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