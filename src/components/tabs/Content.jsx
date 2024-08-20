import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/Home.module.css';
import { TabPanels, TabPanel } from '@headlessui/react';
import RegularSchedule from 'components/home/Regular';
import BankaraSchedule from 'components/home/Bankara';
import XSchedule from 'components/home/X';
import EventSchedule from 'components/home/Event';
import FestSchedule from 'components/home/Fest';
import SRunSchedule from 'components/home/SalmonRun';

const TabContent = ({ children }) => {
    return <div className={styles.flex}>{children}</div>;
};

TabContent.propTypes = {
    children: PropTypes.node
};

const maxDisplayedItems = 12;

const TabContents = ({ sch, festOpSch, salmonSch }) => {
    return (
        <TabPanels>
            <TabPanel><TabContent>{<RegularSchedule sch={sch} maxDisplayedItems={maxDisplayedItems} />}</TabContent></TabPanel>
            <TabPanel><TabContent>{<BankaraSchedule sch={sch} maxDisplayedItems={maxDisplayedItems} />}</TabContent></TabPanel>
            <TabPanel><TabContent>{<XSchedule sch={sch} maxDisplayedItems={maxDisplayedItems} />}</TabContent></TabPanel>
            <TabPanel><TabContent>{<EventSchedule sch={sch} />}</TabContent></TabPanel>
            <TabPanel><TabContent>{<FestSchedule sch={sch} festOpSch={festOpSch} maxDisplayedItems={maxDisplayedItems} />}</TabContent></TabPanel>
            <TabPanel><TabContent>{<SRunSchedule salmonSch={salmonSch} />}</TabContent></TabPanel>
        </TabPanels>
    );
};

TabContents.propTypes = {
    sch: PropTypes.object.isRequired,
    festOpSch: PropTypes.object.isRequired,
    salmonSch: PropTypes.object.isRequired
};

export default TabContents;