import React from 'react';
import styles from 'styles/Home.module.css';
import { formatDate } from 'pages/utils';

export default function EventSchedule({ sch }) {
    let timesList = [];

    return (
        <div className={styles.scheduleContainer}>
            {sch.result.event.map((data, i) => {
                const nextData = i + 1 < sch.result.event.length ? sch.result.event[i + 1] : null;
                const nextEventId = nextData ? nextData.event.id : '';
                const eventId = data.event.id;

                timesList.push(formatDate(data.start_time, data.end_time));

                if (eventId !== nextEventId || i === sch.result.event.length - 1) {
                    const currentTimeListElement = [...timesList];
                    timesList = [];

                    return (
                        <div key={eventId} className={styles.scheduleItem}>
                            <div className={styles.scheduleInfo}>
                                <div className={styles.eventName}>{data.event.name}</div>
                                <div className={styles.eventDesc}>{data.event.desc}</div>
                                <div className={styles.rule}>{data.rule.name}</div>
                                <div className={styles.timeList}>
                                    {currentTimeListElement.map((time, index) => (
                                        <div key={index} className={styles.time}>{time}</div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.stageContainer}>
                                {data.stages.map(stage => (
                                    <div key={stage.id} className={styles.stageItem}>
                                        <p className={styles.stageName}>{stage.name}</p>
                                        <img className={styles.stageImage} src={stage.image} alt={stage.name} />
                                    </div>
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