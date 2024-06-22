import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react'
// import { getStaticProps } from 'next';
import styles from '../styles/Home.module.css';
import RegularSchedule from '../components/Regular';
import BankaraSchedule from '../components/Bankara';
import XSchedule from '../components/X';
import EventSchedule from '../components/Event';
import FestSchedule from '../components/Fest';
import SRunSchedule from '../components/SalmonRun';

export default function Home({ sch, festOpSch, salmonSch }) {
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
        <h1 className={styles.title}>Splatoon3 Schedule Info</h1>

        <TabGroup>
          <TabList className={styles.tabs}>
            <Tab className={styles.tab}><Image src='/img/lobby_icons/regular.png' width={30} height={30} alt='レギュラーマッチのアイコン' /><br />レギュラーマッチ</Tab>
            <Tab className={styles.tab}><Image src='/img/lobby_icons/bankara.png' width={30} height={30} alt='バンカラマッチのアイコン' /><br />バンカラマッチ</Tab>
            <Tab className={styles.tab}><Image src='/img/lobby_icons/x.png' width={30} height={30} alt='Xマッチのアイコン' /><br />Xマッチ</Tab>
            <Tab className={styles.tab}><Image src='/img/lobby_icons/event.png' width={30} height={30} alt='イベントマッチのアイコン' /><br />イベントマッチ</Tab>
            <Tab className={styles.tab}><Image src='/img/lobby_icons/fest.png' width={30} height={30} alt='フェスマッチのアイコン' /><br />フェスマッチ</Tab>
            <Tab className={styles.tab}><Image src='/img/lobby_icons/salmonrun.png' width={30} height={30} alt='サーモンランのアイコン' /><br />サーモンラン</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className='flex'>
                <RegularSchedule sch={sch} maxDisplayedItems={5}></RegularSchedule>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='flex'>
                <BankaraSchedule sch={sch} maxDisplayedItems={5}></BankaraSchedule>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='flex'>
                <XSchedule sch={sch} maxDisplayedItems={5}></XSchedule>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='flex'>
                <EventSchedule sch={sch}></EventSchedule>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='flex'>
                <FestSchedule sch={sch} festOpSch={festOpSch} maxDisplayedItems={5}></FestSchedule>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='flex'>
                <SRunSchedule salmonSch={salmonSch}></SRunSchedule>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>

      </main>

      <footer className={styles.footer}>
        <p>Developed by inokei1704@gmail.com{" "}
          This APP using <Link href="https://spla3.yuu26.com/">Spla3 API</Link></p>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const req = new Request("https://spla3.yuu26.com/api/schedule", {
    headers: {
      "user-agent": "Spla3/1.0(inokei1704@gmail.com)",
    },
  });
  const res = await fetch(req)
  const sch = await res.json()

  // Schedule of "fest-open" includes in sch(json)
  const festOpReq = new Request("https://spla3.yuu26.com/api/fest/schedule", {
    headers: {
      "user-agent": "Spla3/1.0(inokei1704@gmail.com)",
    },
  });
  const festOpRes = await fetch(festOpReq)
  const festOpSch = await festOpRes.json()

  const salmonReq = new Request("https://spla3.yuu26.com/api/coop-grouping/schedule", {
    headers: {
      "user-agent": "Spla3/1.0(inokei1704@gmail.com)",
    },
  });
  const salmonRes = await fetch(salmonReq)
  const salmonSch = await salmonRes.json()

  return {
    props: { sch, festOpSch, salmonSch },
  }
}