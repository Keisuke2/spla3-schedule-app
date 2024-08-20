import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from "utils/util.js";
import styles from "styles/Home.module.css";
import { ErrorMessage } from "components/home/Message";

export default function EventSchedule({ sch }) {
    try {
        return (
            <div className={styles.eventContainer}>
                {sch.result.event.reduce((acc, data, i, arr) => {
                    if (i === 0 || data.event.id !== arr[i - 1].event.id) {
                        acc.push(
                            <div key={data.event.id} className={styles.scheduleItem}>
                                <div className={styles.scheduleInfo}>
                                    <h2 className={styles.eventName}>{data.event.name}</h2>
                                    <p className={styles.eventDesc}>{data.event.desc}</p>
                                    <p className={styles.rule}>{data.rule.name}</p>
                                    <div className={styles.timeList}>
                                        {arr.filter(item => item.event.id === data.event.id).map((item, index) => (
                                            <div key={index} className={styles.time}>
                                                {formatDate(item.start_time, item.end_time)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.stageContainer}>
                                    {data.stages.map(stage => (
                                        <div key={stage.id} className={styles.stageItem}>
                                            <img className={styles.stageImage} src={stage.image} alt={stage.name} />
                                            <p className={styles.stageName}>{stage.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                    return acc;
                }, [])}
            </div>
        );
    } catch (error) {
        console.error('Error rendering component:', error);
        return ErrorMessage();
    }
}

EventSchedule.propTypes = {
    sch: PropTypes.object.isRequired,
};