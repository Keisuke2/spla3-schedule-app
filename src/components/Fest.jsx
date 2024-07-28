import React, { useMemo } from 'react';
import PropTypes from "prop-types";
import { formatDate, filterData } from "utils/util.js";
import styles from "styles/Home.module.css";

export default function FestSchedule({ sch, festOpSch, maxDisplayedItems }) {
    if (!sch || !sch.result) {
        return [];
    }

    const filteredFestChSch = useMemo(() => {
        return filterData(sch.result.fest_challenge, maxDisplayedItems);
    }, [sch, maxDisplayedItems]);

    const filteredFestOpSch = useMemo(() => {
        return filterData(festOpSch.results, maxDisplayedItems);
    }, [festOpSch, maxDisplayedItems]);

    const isFestSchAvailable = filteredFestChSch.some(item => item.is_fest) &&
        filteredFestOpSch.some(item => item.is_fest);

    return (
        <div className={styles.festContainer}>
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
        </div>
    );
}

FestSchedule.propTypes = {
    sch: PropTypes.object.isRequired,
    festOpSch: PropTypes.object.isRequired,
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
};

MergeCh_Op.propTypes = {
    sch: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
    isTimeDisplayed: PropTypes.bool.isRequired
};

const TricolorBattle = ({ sch }) => {
    return (
        <div className={styles.tricolor}>
            <div className={styles.scheduleContent}>
                <div className={styles.scheduleInfo}>
                    <div className={styles.modeContainer}>
                        <div className={styles.modeItem}>
                            <p className={styles.mode}>トリカラバトル</p>
                            <p className={styles.rule}>ナワバリバトル</p>
                        </div>
                    </div>
                </div>
                <div className={styles.stageContainer}>
                    {sch.tricolor_stage.map((stage) => (
                        <div key={stage.id} className={styles.stageItem}>
                            <img className={styles.stageImage} src={stage.image} alt={stage.name} />
                            <p className={styles.stageName}>{stage.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

TricolorBattle.propTypes = {
    sch: PropTypes.object.isRequired
};