import React from 'react';
import { useMemo } from 'react';
import styles from 'styles/Home.module.css';
import { formatDate, filterData } from 'pages/utils';

export default function BankaraSchedule({ sch, maxDisplayedItems }) {
    const filteredBankaraChSch = useMemo(() => {
        return filterData(sch.result.bankara_challenge, maxDisplayedItems);
    }, [sch, maxDisplayedItems]);

    const filteredBankaraOpSch = useMemo(() => {
        return filterData(sch.result.bankara_open, maxDisplayedItems);
    }, [sch, maxDisplayedItems]);

    const isBankaraSchAvailable = filteredBankaraChSch.every(item => item.is_fest) &&
        filteredBankaraOpSch.every(item => item.is_fest);

    return (
        <div className={styles.bankaraContainer}>
            <div className={styles.scheduleContainer}>
                {isBankaraSchAvailable ? (
                    <p className={styles.noSchMsg}>フェス開催中のため現在スケジュールはありません</p>
                ) : (
                    filteredBankaraChSch.map((item, index) => (
                        !item.is_fest && (
                            <div key={item.start_time} className={styles.scheduleItem}>
                                <ScheduleContent sch={item} mode="チャレンジ" isTimeDisplayed={true} />
                                <ScheduleContent sch={filteredBankaraOpSch[index]} mode="オープン" isTimeDisplayed={false} />
                            </div>
                        )
                    ))
                )}
            </div>
        </div>
    );
}

const ScheduleContent = ({ sch, mode, isTimeDisplayed }) => {
    return (
        <div className={styles.scheduleContent}>
            <div className={styles.scheduleInfo}>
                {isTimeDisplayed && (
                    <p className={styles.time}>
                        {formatDate(sch.start_time, sch.end_time)}
                    </p>
                )}
                <div className={styles.modeContainer}>
                    <div className={styles.modeItem}>
                        <p className={styles.mode}>{mode}</p>
                        <p className={styles.rule}>{sch.rule.name}</p>
                    </div>
                </div>
            </div>

            <div className={styles.stageContainer}>
                {sch.stages.map((stage) => (
                    <div key={stage.id} className={styles.stageItem}>
                        <img src={stage.image} alt={stage.name} className={styles.stageImage} />
                        <p className={styles.stageName}>{stage.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};