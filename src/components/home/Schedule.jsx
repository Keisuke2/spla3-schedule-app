import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/Home.module.css';
import { TabPanels, TabPanel } from '@headlessui/react';
import RegularContainer from 'components/home/schedule/Regular';
import BankaraContainer from 'components/home/schedule/Bankara';
import XContainer from 'components/home/schedule/X';
import EventContainer from 'components/home/schedule/Event';
import FestContainer from 'components/home/schedule/Fest';
import SalmonRunContainer from 'components/home/schedule/SalmonRun';

const Schedule = ({ children }) => {
    return <div className={styles.flex}>{children}</div>;
};

Schedule.propTypes = {
    children: PropTypes.node
};

const maxDisplayedItems = 12;

const ScheduleContainer = ({ sch, festOpSch, salmonSch }) => {
    return (
        <TabPanels>
            <TabPanel><Schedule>{<RegularContainer sch={sch} maxDisplayedItems={maxDisplayedItems} />}</Schedule></TabPanel>
            <TabPanel><Schedule>{<BankaraContainer sch={sch} maxDisplayedItems={maxDisplayedItems} />}</Schedule></TabPanel>
            <TabPanel><Schedule>{<XContainer sch={sch} maxDisplayedItems={maxDisplayedItems} />}</Schedule></TabPanel>
            <TabPanel><Schedule>{<EventContainer sch={sch} />}</Schedule></TabPanel>
            <TabPanel><Schedule>{<FestContainer sch={sch} festOpSch={festOpSch} maxDisplayedItems={maxDisplayedItems} />}</Schedule></TabPanel>
            <TabPanel><Schedule>{<SalmonRunContainer salmonSch={salmonSch} />}</Schedule></TabPanel>
        </TabPanels>
    );
};

ScheduleContainer.propTypes = {
    sch: PropTypes.object.isRequired,
    festOpSch: PropTypes.object.isRequired,
    salmonSch: PropTypes.object.isRequired
};

export default ScheduleContainer;