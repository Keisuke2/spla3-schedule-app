import React, { useMemo } from 'react';
import styles from '../styles/Home.module.css';
import { FormatDate, FilterData } from '../pages/utils';

// フェスマッチのスケジュールを整形し表示するコンポーネント
export default function FestSchedule({ sch, festOpSch, maxDisplayedItems }) {
    // 表示するデータの数を maxDisplayedItems で決める
    const filteredFestChSch = useMemo(() => {
        return FilterData(sch.result.fest_challenge, maxDisplayedItems);
    }, [sch, maxDisplayedItems]);

    // 表示するデータの数を maxDisplayedItems で決める
    const filteredFestOpSch = useMemo(() => {
        return FilterData(festOpSch.results, maxDisplayedItems);
    }, [festOpSch, maxDisplayedItems]);

    // filteredFestChSch、filteredFestOpSch に含まれるフェス開催中を判断するキー「is_fest」の一部が trueの 場合、true
    const isFestSchAvailable = filteredFestChSch.some(item => item.is_fest) &&
        filteredFestOpSch.some(item => item.is_fest);

    return (
        <div className={styles.schedules}>
            {isFestSchAvailable ? (
                // 表示するフェスのスケールがある場合（数時間後にフェスが開催されるなど、フェスのスケジュールを取得できる場合）
                filteredFestChSch.map((item, index) => (
                    item.is_fest ? (
                        // 同じ時間帯に開催されるチャレンジとオープンのスケジュールをまとめて表示する
                        <div key={index} className={styles.schedule}>
                            <MergeChAndOp sch={item} mode="チャレンジ" isTimeDisplayed={true} />
                            <MergeChAndOp sch={filteredFestOpSch[index]} mode="オープン" isTimeDisplayed={false} />
                        </div>
                    ) : null /* is_fest が false の場合、そのスケジュールは表示しない */
                ))
            ) : (
                // 表示するフェスのスケールが一つもない場合
                <p className={styles.noScheduleMessage}>現在フェスは開催されていません</p>
            )}
        </div>
    );
}

// 同じ時間帯に開催されるチャレンジとオープンのスケジュールをまとめて表示するための関数
const MergeChAndOp = ({ sch, mode, isTimeDisplayed }) => {
    return (
        <>
            {isTimeDisplayed && (
                <p className={styles.time}>
                    {FormatDate(sch.start_time, sch.end_time)}
                </p>
            )}
            <p className={styles.mode}>{mode}</p>
            <ul className={styles.stageSetList}>
                {sch.stages.map((stage) => (
                    <li key={stage.id} className={styles.stageList}>
                        <p className={styles.textStage}>{stage.name}</p>
                        <img src={stage.image} alt="ステージの画像" className={styles.stageImage} />
                    </li>
                ))}
            </ul>
        </>
    );
};
