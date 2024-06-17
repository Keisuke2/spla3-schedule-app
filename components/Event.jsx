import React from 'react';
import styles from '../styles/Home.module.css';
import { FormatDate } from '../pages/utils';

export default function EventSchedule({ schedule }) {
    let timeListElement = [];
    return (
        <div className={styles.schedules}>
            {schedule.result.event.map((data, i) => {
                const nextData = i + 1 < schedule.result.event.length ? schedule.result.event[i + 1] : null;
                const nextEventId = nextData ? nextData.event.id : '';

                const eventId = data.event.id;

                // Add the current time to the list
                timeListElement.push(FormatDate(data.start_time, data.end_time));

                if (eventId !== nextEventId || i === schedule.result.event.length - 1) {
                    const currentTimeListElement = [...timeListElement];  // Copy current time list for the current event
                    timeListElement = [];  // Reset time list for the next event

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
};
