import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { filterData, formatDate } from "utils/util.js";
import styles from "styles/Home.module.css";
import { ErrorMessage } from "components/Message";

export default function SRunSchedule({ salmonSch }) {
    try {
        const filteredSalmonSch = useMemo(() => {
            return filterData(salmonSch.results);
        }, [salmonSch]);

        return (
            <div className={styles.sRunContainer}>
                <div className={styles.scheduleContainer}>
                    {filteredSalmonSch.map((item, index) => (
                        <div key={index} className={styles.scheduleItem}>
                            <div className={styles.scheduleInfo}>
                                <p className={styles.time}>{formatDate(item.start_time, item.end_time)}</p>
                                <p className={styles.bossName}>{item.boss.name}</p>
                            </div>
                            <div className={styles.stageContainer}>
                                <div className={styles.stageItem}>
                                    <img className={styles.stageImage} src={item.stage.image} alt={item.stage.name} />
                                    <p className={styles.stageName}>{item.stage.name}</p>
                                </div>
                            </div>
                            <div className={styles.weaponContainer}>
                                {item.weapons.map((weapon, weaponIndex) => (
                                    <div key={weaponIndex} className={styles.weaponItem}>
                                        <img className={styles.weaponImage} src={weapon.image} alt={weapon.name} />
                                        <div className={styles.weaponName}>{weapon.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error rendering component:', error);
        return ErrorMessage();
    }
}

SRunSchedule.propTypes = {
    salmonSch: PropTypes.object.isRequired,
};