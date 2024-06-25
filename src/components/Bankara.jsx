import React from 'react';
import { useMemo } from 'react';
import styles from 'styles/Home.module.css';
import { formatDate, filterData } from 'pages/utils';

export default function BankarSchedule({ sch, maxDisplayedItems }) {
    // 表示するデータの数を maxDisplayedItems で決める
    const filteredBankaraChSch = useMemo(() => {
        return filterData(sch.result.bankara_challenge, maxDisplayedItems);
    }, [sch, maxDisplayedItems]);

    // 表示するデータの数を maxDisplayedItems で決める
    const filteredBankaraOpSch = useMemo(() => {
        return filterData(sch.result.bankara_open, maxDisplayedItems);
    }, [sch, maxDisplayedItems]);

    // filteredBankaraChSch、 filteredBankaraOpSch に含まれるフェス開催中を判断するキー「is_fest」が全て true の場合、true
    const isBankaraSchAvailable = filteredBankaraChSch.every(item => item.is_fest) &&
        filteredBankaraOpSch.every(item => item.is_fest);


    return (
        <div className={styles.schedules}>
            {isBankaraSchAvailable ? (
                // isBankaraSchAvailable が true の場合（レギュラーマッチのスケジューつもない場合）
                <p className={styles.noSchMsg}>フェス開催中のため現在スケジュールはありません</p>
            ) : (
                // そうでない場合は、表示する
                filteredBankaraChSch.map((item, index) => (
                    // is_fest が false の場合、そのスケジュールを表示する
                    !item.is_fest ? (
                        < div className={styles.schedule} >
                            <MergeChAndOp sch={item} mode="チャレンジ" isTimeDisplayed={true} />
                            <MergeChAndOp sch={filteredBankaraOpSch[index]} mode="オープン" isTimeDisplayed={false} />
                        </div>
                    ) : (null) /* is_fest が true の場合、そのスケジュールは表示しない */
                ))
            )}
        </div >
    );
}

// 同じ時間帯に開催されるチャレンジとオープンのスケジュールをまとめて表示するための関数
const MergeChAndOp = ({ sch, mode, isTimeDisplayed }) => {
    return (
        <>
            {isTimeDisplayed && (
                <p className={styles.time}>
                    {formatDate(sch.start_time, sch.end_time)}
                </p>
            )}
            <div className={styles.modeAndRule}>
                <p className={styles.mode}>{mode}</p>
                <p className={styles.rule}>{sch.rule.name}</p>
            </div>
            <ul className={styles.stageSetList}>
                {sch.stages.map((stage) => (
                    <li key={stage.id} className={styles.stageList}>
                        <p className={styles.stageName}>{stage.name}</p>
                        <img src={stage.image} alt="ステージの画像" className={styles.stageImage} />
                    </li>
                ))}
            </ul>
        </>
    );
};