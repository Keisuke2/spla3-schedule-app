import React from "react";
import styles from "styles/About.module.css";

export default function Main() {
    return (
        <div className={styles.container}>
            <p className={styles.lastUpdated}>最終更新日: 2024年8月13日</p>
            <h1 className={styles.title}>About</h1>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>アプリについて</h2>
                <p className={styles.paragraph}>これはスプラトゥーン3の最新スケジュール（レギュラーマッチ、バンカラマッチ、Xマッチ、イベントマッチ、フェスマッチ、サーモンラン）を確認できるWebアプリです。</p>
                <p className={styles.paragraph}>スプラトゥーン3のあらゆるスケジュールを手軽に見れる方法はこれまでになかったので、このアプリを作成しました。</p>
                <p className={styles.paragraph}>スマートフォンやタブレット、PCからアクセスできます。</p>
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

            <p className={styles.contact}>連絡・問い合わせは次のメールアドレスへお願いします。<br />inokei1704@gmail.com</p>
            <p className={styles.contact}>当アプリの改善に向けたアンケートは<a href="https://forms.gle/nze5rtUqDhXM8sVd7" className={styles.link}>こちら</a>をクリック。</p>
        </div>
    );
}