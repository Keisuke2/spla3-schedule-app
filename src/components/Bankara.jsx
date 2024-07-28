import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { formatDate, filterData } from "utils/util.js";
import styles from "styles/Home.module.css";

export default function BankaraSchedule({ sch, maxDisplayedItems }) {
    if (!sch || !sch.result) {
        return [];
    }

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
                        !item.is_fest && (<div key={item.start_time} className={styles.scheduleItem}>
                            <MergeCh_Op sch={item} mode="チャレンジ" isTimeDisplayed={true} />
                            <MergeCh_Op sch={filteredBankaraOpSch[index]} mode="オープン" isTimeDisplayed={false} />
                        </div>
                        )
                    ))
                )}
            </div>
        </div>
    )
}

BankaraSchedule.propTypes = {
    sch: PropTypes.object.isRequired,
    maxDisplayedItems: PropTypes.number.isRequired
};

const MergeCh_Op = ({ sch, mode, isTimeDisplayed }) => {
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
                        <img className={styles.stageImage} src={stage.image} alt={stage.name} />
                        <p className={styles.stageName}>{stage.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

MergeCh_Op.propTypes = {
    sch: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
    isTimeDisplayed: PropTypes.bool.isRequired
};