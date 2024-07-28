import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/Home.module.css';
import { TabList } from '@headlessui/react';
import TabItem from 'components/tabs/TabItem';
import { tabConfig } from 'components/tabs/TabConfig';

const TabButtons = ({ activeTab, setActiveTab }) => {
    return (
        <TabList className={styles.tabs}>
            {tabConfig.map((tab, index) => (
                <TabItem
                    key={tab.id}
                    isActive={activeTab === index}
                    onClick={() => setActiveTab(index)}
                >
                    {tab.label}
                </TabItem>
            ))}
        </TabList>
    );
};

TabButtons.propTypes = {
    activeTab: PropTypes.number.isRequired,
    setActiveTab: PropTypes.func.isRequired,
};

export default TabButtons;