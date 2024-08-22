import React from "react";
import styles from "styles/About.module.css";

export default function Main() {
    return (
        <div className={styles.container}>
            <p className={styles.lastUpdated}>最終更新日: 2024年8月23日</p>
            <h1 className={styles.title}>About</h1>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>アプリについて</h2>
                <p className={styles.paragraph}>これはスプラトゥーン3の最新スケジュール（レギュラーマッチ、バンカラマッチ、Xマッチ、イベントマッチ、フェスマッチ、サーモンラン）を確認できるWebアプリです。</p>
                <p className={styles.paragraph}>スプラトゥーン3のあらゆるスケジュールを手軽に見れる方法はこれまでになかったので、このアプリを作成しました。</p>
                <p className={styles.paragraph}>スマートフォンやタブレット、PCからアクセスできますが、スマートフォンなどの縦長で幅が狭いデバイスを用いられる場合は、縦画面でご覧いただくことを推奨します。</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>今後のアップデートについて</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>ビッグランのスケジュール追加予定</li>
                    <li className={styles.listItem}>バイトチームコンテストのスケジュール追加予定</li>
                    <li className={styles.listItem}>見やすいレイアウトに修正予定</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>使用リソース</h2>
                <p className={styles.paragraph}>スケジュールの取得にあたり使用しているAPIについては<a href="https://spla3.yuu26.com/" className={styles.link}>こちら</a>をクリック。</p>
                <p className={styles.paragraph}>使用しているfaviconについては<a href="https://onwa-illust.com/material/26189/" className={styles.link}>こちら</a>をクリック。</p>
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

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>類似サイト</h2>
                <p className={styles.paragraph}>スプラトゥーン3のスケジュールを確認できる他のサイトについては以下をクリック。</p>
                <ul className={styles.list}>
                    <li className={styles.listItem}><a href="https://splatoon.caxdb.com/" className={styles.link}>スプラトゥーン3 ステージ情報</a></li>
                    <li className={styles.listItem}><a href="https://splatoon3.ink/" className={styles.link}>Splatoon 3</a></li>
                    <li className={styles.listItem}><a href="https://supergomibako.com/tool/spla/schedule/" className={styles.link}>スプラ3 スケジュール</a></li>
                    <li className={styles.listItem}><a href="https://splatoon.oatmealdome.me/three/versus" className={styles.link}>Splatoon3 - Battle Rotations</a></li>
                    <li className={styles.listItem}><a href="https://spla3-stage-schedule.vercel.app/" className={styles.link}>Spla3 Stage Schedule</a></li>
                </ul>
            </section>

            <p className={styles.contact}>連絡・問い合わせは次のメールアドレスへお願いします。<br />inokei1704@gmail.com</p>
            <p className={styles.contact}>当アプリの改善に向けたアンケートは<a href="https://forms.gle/nze5rtUqDhXM8sVd7" className={styles.link}>こちら</a>をクリック。</p>
        </div>
    );
}