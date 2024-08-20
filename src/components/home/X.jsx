import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { formatDate, filterData } from "utils/util.js";
import styles from "styles/Home.module.css";
import { NoScheduleMessage, ErrorMessage } from "components/home/Message";

export default function XSchedule({ sch, maxDisplayedItems }) {
    try {
        const filteredXSch = useMemo(() => {
            return filterData(sch.result.x, maxDisplayedItems);
        }, [sch, maxDisplayedItems]);

        const isXSchAvailable = filteredXSch.every(item => item.is_fest);

        return (
            <div className={styles.xContainer}>
                <div className={styles.scheduleContainer}>
                    {isXSchAvailable ? (
                        NoScheduleMessage(true)
                    ) : (
                        filteredXSch.map((item, index) => (
                            !item.is_fest && (
                                <div key={index} className={styles.scheduleItem}>
                                    <div className={styles.scheduleInfo}>
                                        <p className={styles.time}>{formatDate(item.start_time, item.end_time)}</p>
                                        <p className={styles.rule}>{item.rule.name}</p>
                                    </div>
                                    <div className={styles.stageContainer}>
                                        {item.stages.map(stage => (
                                            <div key={stage.id} className={styles.stageItem}>
                                                <img className={styles.stageImage} src={stage.image} alt={stage.name} />
                                                <p className={styles.stageName}>{stage.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        ))
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error rendering component:', error);
        return ErrorMessage();
    }
}

XSchedule.propTypes = {
    sch: PropTypes.object.isRequired,
    maxDisplayedItems: PropTypes.number.isRequired,
};