import React from "react";
import styles from "styles/Home.module.css";

export function NoScheduleMessage(isFest) {
    let msg = null
    isFest ? (
        msg = <p className={styles.noSchMsg}>フェス開催中のため現在スケジュールはありません。</p>
    ) : (
        msg = <p className={styles.noSchMsg}>現在フェスは開催されていません。</p>
    );
    return msg;
}

export function ErrorMessage() {
    return (
        <div className={styles.errorContainer}>
            <p className={styles.errorMsg}>データを取得できませんでした。しばらく経ってから再度お試しください。</p>
        </div>
    );
}