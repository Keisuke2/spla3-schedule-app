import { useMemo } from "react";
import { formatDate, filterData } from "utils/util.js"
import styles from 'styles/Home.module.css';

export default function RegularSchedule({ sch, maxDisplayedItems }) {

    const filteredRegularSch = useMemo(() => {
        if (!sch || !sch.result) {
            return [];
        }
        return filterData(sch.result.regular, maxDisplayedItems);
    }, [sch, maxDisplayedItems]);

    const isRegularSchAvailable = filteredRegularSch.every(item => item.is_fest);

    return (
        <div className={styles.scheduleContainer}>
            {isRegularSchAvailable ? (
                <p className={styles.noSchMsg}>フェス開催中のため現在スケジュールはありません</p>
            ) : (
                filteredRegularSch.map((item, index) => (
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
    );
}