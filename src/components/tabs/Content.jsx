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
            <TabPanel><TabContent>{<RegularContainer sch={sch} maxDisplayedItems={maxDisplayedItems} />}</TabContent></TabPanel>
            <TabPanel><TabContent>{<BankaraContainer sch={sch} maxDisplayedItems={maxDisplayedItems} />}</TabContent></TabPanel>
            <TabPanel><TabContent>{<XContainer sch={sch} maxDisplayedItems={maxDisplayedItems} />}</TabContent></TabPanel>
            <TabPanel><TabContent>{<EventContainer sch={sch} />}</TabContent></TabPanel>
            <TabPanel><TabContent>{<FestContainer sch={sch} festOpSch={festOpSch} maxDisplayedItems={maxDisplayedItems} />}</TabContent></TabPanel>
            <TabPanel><TabContent>{<SalmonRunContainer salmonSch={salmonSch} />}</TabContent></TabPanel>
        </TabPanels>
    );
};

TabContents.propTypes = {
    sch: PropTypes.object.isRequired,
    festOpSch: PropTypes.object.isRequired,
    salmonSch: PropTypes.object.isRequired
};

export default TabContents;