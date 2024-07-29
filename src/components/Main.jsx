import React from "react";
import PropTypes from "prop-types";
import TabSchedule from "components/tabs/TabSchedule";
import { SpeedInsights } from "@vercel/speed-insights/next";
import styles from "styles/Home.module.css";

export default function Main({ sch, festOpSch, salmonSch, error }) {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Splatoon3 スケジュール</h1>
            <TabSchedule sch={sch} festOpSch={festOpSch} salmonSch={salmonSch} />
            <SpeedInsights />
            {error && <div className={styles.error}>{error}</div>}
        </main>
    )
}

Main.propTypes = {
    sch: PropTypes.object,
    festOpSch: PropTypes.object,
    salmonSch: PropTypes.object,
    error: PropTypes.string
};