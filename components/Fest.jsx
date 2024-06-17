import { FormatDate } from "../pages/utils"
import styles from '../styles/Home.module.css';

export default function FestSchedule({ schedule, fest_ch_schedule }) {
    return (
        <div className={styles.container}>
            {(() => {
                return schedule.result.fest.map((item, index) => {
                    if (item.is_fest) {
                        return (
                            <div key={index}>
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
                        );
                    }
                });
            })()}
        </div>
    )
}