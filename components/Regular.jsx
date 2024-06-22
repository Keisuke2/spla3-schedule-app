import { useMemo } from 'react';
import styles from '../styles/Home.module.css';
import { FormatDate, FilterData } from "../pages/utils"

// レギュラーマッチのスケジュールを整形し表示するコンポーネント
export default function RegularSchedule({ sch, maxDisplayedItems }) {
    // 表示するデータの数を maxDisplayedItems で決める
    const filteredRegularSch = useMemo(() => {
        return FilterData(sch.result.regular, maxDisplayedItems);
    }, [sch, maxDisplayedItems]);

    // filteredRegularSch に含まれるフェス開催中を判断するキー「is_fest」が全て true の場合、true
    const isRegularSchAvailable = filteredRegularSch.every(item => item.is_fest);

    return (
        <div className={styles.schedules}>
            {isRegularSchAvailable ? (
                // isRegularSchAvailable が true の場合（レギュラーマッチのスケジューつもない場合）
                <p className={styles.noSchMsg}>フェス開催中のため現在スケジュールはありません</p>
            ) : (
                // そうでない場合は、表示する
                filteredRegularSch.map((item, index) => (
                    // is_fest が false の場合、そのスケジュールを表示する
                    !item.is_fest ? (
                        <div key={index} className={styles.schedule}>
                            <p className={styles.time}>{FormatDate(item.start_time, item.end_time)}</p>
                            <ul className={styles.stageSetList}>
                                {item.stages.map(stage => (
                                    <li className={styles.stageList} key={stage.id}>
                                        <p className={styles.stageName}>{stage.name}</p>
                                        <img className={styles.stageImage} src={stage.image} alt={stage.name} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (null) /* is_fest が true の場合、そのスケジュールは表示しない */
                ))
            )}
        </div>
    );
}
