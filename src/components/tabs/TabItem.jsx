import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/Home.module.css';
import { Tab } from '@headlessui/react';

const TabItem = ({ src, children, isActive, onClick }) => (
    <Tab className={`${styles.tab} ${isActive ? styles.active : ''}`} onClick={onClick}>
        <img src={src} alt={src} />
        {children}
    </Tab>
);

TabItem.propTypes = {
    src: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TabItem;