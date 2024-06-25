import React from 'react';
import styles from 'styles/Home.module.css';
import { formatDate } from 'pages/utils';

// イベントマッチのスケジュールを整形し表示するコンポーネント
export default function EventSchedule({ sch }) {
    // 同じイベントの時間をまとめて表示するためのリスト
    let timesList = [];

    return (
        <div className={styles.schedules}>
            {sch.result.event.map((data, i) => {
                const nextData = i + 1 < sch.result.event.length ? sch.result.event[i + 1] : null;
                const nextEventId = nextData ? nextData.event.id : '';

                const eventId = data.event.id;

                // 現在のイベントの時間を追加
                timesList.push(formatDate(data.start_time, data.end_time));

                // 現在見ているイベントIDが次のイベントIDと異なる場合、
                if (eventId !== nextEventId || i === sch.result.event.length - 1) {
                    // イベントIDが同じイベント、もう次のイベントがない（リストの最後に達した）場合、リストをコピーする
                    const currentTimeListElement = [...timesList];
                    // 次（異なる）のイベントIDを追加するため、空にする
                    timesList = [];

                    return (
                        <div key={eventId} className={styles.schedule}>
                            <div className={styles.eventHeader}>
                                <div className={styles.eventName}>{data.event.name}</div>
                                <div className={styles.eventDesc}>{data.event.desc}</div>
                                <div className={styles.rule}>{data.rule.name}</div>
                            </div>
                            <ul className={styles.stageSetList}>
                                {data.stages.map(stage => (
                                    <li className={styles.stageList} key={stage.id}>
                                        <p className={styles.stageName}>{stage.name}</p>
                                        <img className={styles.stageImage} src={stage.image} alt={stage.name} />
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.timeList}>
                                {currentTimeListElement.map((time, index) => (
                                    // 同じイベント（イベントIDが同じ）が開催される時間をまとめて表示
                                    <div key={index} className={styles.time}>{time}</div>
                                ))}
                            </div>
                        </div>
                    );
                }

                return null;
            })}
        </div>
    );
}
