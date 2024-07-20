import { formatDate } from "pages/utils"
import styles from 'styles/Home.module.css';

export default function SRunSchedule({ salmonSch }) {
    return (
        <div className={styles.schedules}>
            {salmonSch.results.map((item, index) => (
                <div key={index} className={styles.schedule}>
                    <p className={styles.time}>{formatDate(item.start_time, item.end_time)}</p>
                    <div className={styles.stageList}>
                        <div className={styles.stageAndBoss}>
                            <p className={styles.stageName}>{item.stage.name}</p>
                            <p className={styles.bossName}>{item.boss.name}</p>
                        </div>
                        <img className={styles.stageImage} src={item.stage.image} alt={item.stage.name} />
                    </div>
                    <ul className={styles.weaponSetList}>
                        {item.weapons.map((weapon, weaponIndex) => (
                            <li key={weaponIndex} className={styles.weaponList}>
                                <img className={styles.weaponImage} src={weapon.image} alt={weapon.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}