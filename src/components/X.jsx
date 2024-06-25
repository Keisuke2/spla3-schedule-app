import { useMemo } from "react";
import { formatDate, filterData } from "pages/utils"
import styles from 'styles/Home.module.css';

// Xマッチのスケジュールを整形し表示するコンポーネント
export default function XSchedule({ sch, maxDisplayedItems }) {
    // 表示するデータの数を maxDisplayedItems で決める
    const filteredXSch = useMemo(() => {
        return filterData(sch.result.x, maxDisplayedItems);
    }, [sch, maxDisplayedItems]);

    // filteredXSch に含まれるフェス開催中を判断するキー「is_fest」が全て true の場合、true
    const isXSchAvailable = filteredXSch.every(item => item.is_fest);

    return (
        <div className={styles.schedules}>
            {isXSchAvailable ? (
                // isXSchAvailable が true の場合（レギュラーマッチのスケジューつもない場合）
                <p className={styles.noSchMsg}>フェス開催中のため現在スケジュールはありません</p>
            ) : (
                // そうでない場合は、表示する
                filteredXSch.map((item, index) => (
                    // is_fest が false の場合、そのスケジュールを表示する
                    !item.is_fest ? (<div key={index} className={styles.schedule}>
                        <p className={styles.time}>{formatDate(item.start_time, item.end_time)}</p>
                        <p className={styles.rule}>{item.rule.name}</p>
                        <ul className={styles.stageSetList}>
                            {item.stages.map(stage => (
                                <li className={styles.stageList} key={stage.id}>
                                    <p className={styles.stageName}>{stage.name}</p>
                                    <img className={styles.stageImage} src={stage.image} alt={stage.name} />
                                </li>
                            ))}
                        </ul>
                    </div>) : (null) /* is_fest が true の場合、そのスケジュールは表示しない */
                ))
            )}
        </div>
    );
}
