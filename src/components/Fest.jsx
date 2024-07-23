import React, { useMemo } from 'react';
import styles from 'styles/Home.module.css';
import { formatDate, filterData } from 'pages/utils';

// フェスマッチのスケジュールを整形し表示するコンポーネント
export default function FestSchedule({ sch, festOpSch, maxDisplayedItems }) {
    // 表示するデータの数を maxDisplayedItems で決める
    const filteredFestChSch = useMemo(() => {
        return filterData(sch.result.fest_challenge, maxDisplayedItems);
    }, [sch, maxDisplayedItems]);

    // 表示するデータの数を maxDisplayedItems で決める
    const filteredFestOpSch = useMemo(() => {
        return filterData(festOpSch.results, maxDisplayedItems);
    }, [festOpSch, maxDisplayedItems]);

    // filteredFestChSch、filteredFestOpSch に含まれるフェス開催中を判断するキー「is_fest」の一部が trueの 場合、true
    const isFestSchAvailable = filteredFestChSch.some(item => item.is_fest) &&
        filteredFestOpSch.some(item => item.is_fest);

    return (
        <div className={styles.scheduleContainer}>
            {isFestSchAvailable ? (
                // 表示するフェスのスケールがある場合（数時間後にフェスが開催されるなど、フェスのスケジュールを取得できる場合）
                filteredFestChSch.map((item, index) => (
                    item.is_fest ? (
                        // 同じ時間帯に開催されるチャレンジとオープンのスケジュールをまとめて表示する
                        <div key={index} className={styles.scheduleItem}>
                            <MergeChAndOp sch={item} mode="チャレンジ" isTimeDisplayed={true} />
                            <MergeChAndOp sch={filteredFestOpSch[index]} mode="オープン" isTimeDisplayed={false} />
                        </div>
                    ) : null /* is_fest が false の場合、そのスケジュールは表示しない */
                ))
            ) : (
                // 表示するフェスのスケールが一つもない場合
                <p className={styles.noSchMsg}>現在フェスは開催されていません</p>
            )}
        </div>
    );
}

// 同じ時間帯に開催されるチャレンジとオープンのスケジュールをまとめて表示するための関数
const MergeChAndOp = ({ sch, mode, isTimeDisplayed }) => {
    return (
        <div className={styles.scheduleContent}>
            <div className={styles.scheduleInfo}>
                {isTimeDisplayed && (
                    <p className={styles.time}>
                        {formatDate(sch.start_time, sch.end_time)}
                    </p>
                )}
                <p className={styles.mode}>{mode}</p>
            </div>
            <ul className={styles.stageContainer}>
                {sch.stages.map((stage) => (
                    <li key={stage.id} className={styles.stageItem}>
                        <img src={stage.image} alt={stage.name} className={styles.stageImage} />
                        <p className={styles.textStage}>{stage.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
