import React from 'react';
import styles from '../styles/Home.module.css';
import { FormatDate } from '../pages/utils';

export default function BankarSchedule({ schedule }) {
    // schedule.resultが配列かどうかをチェック
    if (!Array.isArray(schedule.result)) {
        return <p>スケジュールデータがありません</p>;
    }

    console.log(schedule.bankara_open)
    return (
        <div className={styles.schedules}>
            {schedule.result.map((item, i) => (
                <React.Fragment key={i} className={styles.schedule}>
                    {/* bankara_challengeを渡す */}
                    {item.bankara_challenge && (
                        <DisplayBankara schedule={item.bankara_challenge} mode="チャレンジ" isTimeDisplayed={true} />
                    )}
                    {/* bankara_openを渡す */}
                    {item.bankara_open && (
                        <DisplayBankara schedule={item.bankara_open} mode="オープン" isTimeDisplayed={false} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

// DisplayBankara コンポーネントを定義
const DisplayBankara = ({ schedule, mode, isTimeDisplayed }) => {
    return (
        <>
            {isTimeDisplayed && (
                <div className={styles.time}>
                    {FormatDate(schedule.start_time, schedule.end_time)}
                </div>
            )}
            <div className={styles.mode}>{mode}</div>
            <div className={styles.rule}>{schedule.rule.name}</div>
            <ul className={styles.listStage}>
                {schedule.stages.map((stage) => (
                    <li key={stage.id} className={styles.listStageItem}>
                        <p className={styles.textStage}>{stage.name}</p>
                        <img src={stage.image} alt="ステージの画像" className={styles.stageImage} />
                    </li>
                ))}
            </ul>
        </>
    );
};