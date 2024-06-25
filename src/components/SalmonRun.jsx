import { formatDate } from "pages/utils"
import styles from 'styles/Home.module.css';

export default function SRunSchedule({ salmonSch }) {
    return (
        <div className={styles.schedules}>
            {(() => {
                return salmonSch.results.map((item, index) => {
                    return (
                        <div key={index} className={styles.schedule}>
                            <p className={styles.time}>{formatDate(item.start_time, item.end_time)}</p>
                            <li className={styles.stageList} key={item.stage.id}>
                                <div className={styles.stageAndBoss}>
                                    <p className={styles.stageName}>{item.stage.name}</p>
                                    <p className={styles.bossName}>{item.boss.name}</p>
                                </div>
                                <img className={styles.stageImage} src={item.stage.image} alt={item.stage.name} />
                            </li>
                            <ul className={styles.weaponSetList}>
                                {item.weapons.map(weapon => (
                                    <li className={styles.weaponList}>
                                        {/* <p className={styles.weaponName}>{weapon.name}</p> */}
                                        <img className={styles.weaponImage} src={weapon.image} alt={weapon.image}></img>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                });
            })()}
        </div>
    )
}
