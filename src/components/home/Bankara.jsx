import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { formatDate, filterData } from "utils/util.js";
import styles from "styles/Home.module.css";
import { NoScheduleMessage, ErrorMessage } from "components/home/Message";

export default function BankaraContainer({ sch, maxDisplayedItems }) {
    try {
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
                        NoScheduleMessage(true)
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
    } catch (error) {
        console.error('Error rendering component:', error);
        return ErrorMessage();
    }
}

BankaraContainer.propTypes = {
    sch: PropTypes.object.isRequired,
    maxDisplayedItems: PropTypes.number.isRequired
};

const MergeCh_Op = ({ sch, mode, isTimeDisplayed }) => {
    try {
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
    } catch (error) {
        console.error('Error rendering component:', error);
        return;
    }
}

MergeCh_Op.propTypes = {
    sch: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
    isTimeDisplayed: PropTypes.bool.isRequired
};