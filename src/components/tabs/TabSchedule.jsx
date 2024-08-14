import React from 'react';
import PropTypes from 'prop-types';
import { TabGroup } from '@headlessui/react';
import TabContents from 'components/tabs/Content';
import TabButtons from 'components/tabs/Button';
import styles from 'styles/Tab.module.css';

const TabSchedule = ({ sch, festOpSch, salmonSch }) => {
    return (
        <TabGroup className={styles.tabsContainer}>
            <TabButtons sch={sch} festOpSch={festOpSch} salmonSch={salmonSch} />
            <TabContents sch={sch} festOpSch={festOpSch} salmonSch={salmonSch} />
        </TabGroup>
    );
};

TabSchedule.propTypes = {
    sch: PropTypes.object.isRequired,
    festOpSch: PropTypes.object.isRequired,
    salmonSch: PropTypes.object.isRequired
};

export default TabSchedule;