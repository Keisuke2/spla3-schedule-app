import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/Home.module.css';

const TabContent = ({ data, children }) => {
    return !data || data.length === 0 ? (
        <div className={styles.error}>データを取得できませんでした。しばらく経ってから再度お試しください。</div>
    ) : (
        <div className={styles.flex}>{children}</div>
    );
};

TabContent.propTypes = {
    data: PropTypes.array, // 修正: dataは配列であるべき
    children: PropTypes.node.isRequired,
};

export default TabContent;