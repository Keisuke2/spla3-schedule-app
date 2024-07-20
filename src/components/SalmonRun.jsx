import { formatDate } from "pages/utils"
import styles from 'styles/Home.module.css';

export default function SRunSchedule({ salmonSch }) {
    return (
        <div className={styles.scheduleContainer}>
            {salmonSch.results.map((item, index) => (
                <div key={index} className={styles.scheduleItem}>
                    <div className={styles.scheduleInfo}>
                        <p className={styles.time}>{formatDate(item.start_time, item.end_time)}</p>
                        <p className={styles.stageName}>{item.stage.name}</p>
                        <p className={styles.bossName}>{item.boss.name}</p>
                    </div>
                    <div className={styles.stageContainer}>
                        <div className={styles.stageItem}>
                            <img className={styles.stageImage} src={item.stage.image} alt={item.stage.name} />
                        </div>
                        <div className={styles.weaponContainer}>
                            {item.weapons.map((weapon, weaponIndex) => (
                                <div key={weaponIndex} className={styles.weaponItem}>
                                    <img className={styles.weaponImage} src={weapon.image} alt={weapon.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}