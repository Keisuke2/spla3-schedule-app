import React, { useMemo } from 'react';
import styles from 'styles/Home.module.css';
import { formatDate, filterData } from 'pages/utils';

export default function FestSchedule({ sch, festOpSch, maxDisplayedItems }) {
    const filteredFestChSch = useMemo(() => {
        return filterData(sch.result.fest_challenge, maxDisplayedItems);
    }, [sch, maxDisplayedItems]);

    const filteredFestOpSch = useMemo(() => {
        return filterData(festOpSch.results, maxDisplayedItems);
    }, [festOpSch, maxDisplayedItems]);

    const isFestSchAvailable = filteredFestChSch.some(item => item.is_fest) &&
        filteredFestOpSch.some(item => item.is_fest);

    return (
        <div className={styles.scheduleContainer}>
            {isFestSchAvailable ? (
                filteredFestChSch.map((item, index) => (
                    item.is_fest ? (
                        <div key={index} className={styles.scheduleItem}>
                            <MergeCh_Op sch={item} mode="チャレンジ" isTimeDisplayed={true} />
                            <MergeCh_Op sch={filteredFestOpSch[index]} mode="オープン" isTimeDisplayed={false} />
                            {item.is_tricolor && (
                                <TricolorBattle sch={item} />
                            )}
                        </div>
                    ) : null
                ))
            ) : (
                <p className={styles.noSchMsg}>現在フェスは開催されていません</p>
            )}
        </div>
    );
}

const MergeCh_Op = ({ sch, mode, isTimeDisplayed }) => {
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

const TricolorBattle = ({ sch }) => {
    return (
        <div className={styles.scheduleContent}>
            <div className={styles.scheduleInfo}>
                <p className={styles.mode}>トリカラバトル</p>
            </div>
            <ul className={styles.stageContainer}>
                <li className={styles.stageItem}>
                    <img src={sch.tricolor_stage.image} alt={sch.tricolor_stage.name} className={styles.stageImage} />
                    <p className={styles.textStage}>{sch.tricolor_stage.name}</p>
                </li>
            </ul>
        </div>
    );
};