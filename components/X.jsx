import { useState, useEffect } from 'react';
import { FormatDate, FilterAndDisplayData } from "../pages/utils"
import styles from '../styles/Home.module.css';

export default function XSchedule({ schedule, maxDisplayedItems }) {
    const [filteredSchedule, setFilteredSchedule] = useState([]);

    useEffect(() => {
        const data = FilterAndDisplayData(schedule.result.x, maxDisplayedItems);
        setFilteredSchedule(data);
    }, [schedule, maxDisplayedItems]);

    return (
        <div className={styles.schedules}>
            {filteredSchedule.map((item, index) => (
                <div key={index} className={styles.schedule}>
                    <p className={styles.time}>{FormatDate(item.start_time, item.end_time)}</p>
                    <p className={styles.rule}>{item.rule.name}</p>
                    <ul className={styles.stageSetList}>
                        {item.stages.map(stage => (
                            <li className={styles.stageList} key={stage.id}>
                                <p className={styles.stageName}>{stage.name}</p>
                                <img className={styles.stageImage} src={stage.image} alt={stage.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
