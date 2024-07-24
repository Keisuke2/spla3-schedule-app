import React from 'react';
import styles from 'styles/Home.module.css';
import { TabGroup, TabList, TabPanels, TabPanel, Tab } from '@headlessui/react';
import RegularSchedule from 'components/Regular';
import BankaraSchedule from 'components/Bankara';
import XSchedule from 'components/X';
import EventSchedule from 'components/Event';
import FestSchedule from 'components/Fest';
import SRunSchedule from 'components/SalmonRun';

const TabItem = ({ src, alt, children }) => (
    <Tab className={styles.tab}>
        <img src={src} alt={alt} />
        {children}
    </Tab>
);

const TabContent = ({ children }) => (
    <div className={styles.flex}>
        {children}
    </div>
);

const maxDisplayedItems = 5;

const MatchTabs = ({ sch, festOpSch, salmonSch }) => (
    <TabGroup>
        <TabList className={styles.tabs}>
            <TabItem src='/img/lobby_icons/regular.png' alt='レギュラーマッチのアイコン'>レギュラーマッチ</TabItem>
            <TabItem src='/img/lobby_icons/bankara.png' alt='バンカラマッチのアイコン'>バンカラマッチ</TabItem>
            <TabItem src='/img/lobby_icons/x.png' alt='Xマッチのアイコン'>Xマッチ</TabItem>
            <TabItem src='/img/lobby_icons/event.png' alt='イベントマッチのアイコン'>イベントマッチ</TabItem>
            <TabItem src='/img/lobby_icons/fest.png' alt='フェスマッチのアイコン'>フェスマッチ</TabItem>
            <TabItem src='/img/lobby_icons/salmonrun.png' alt='サーモンランのアイコン'>サーモンラン</TabItem>
        </TabList>

        <TabPanels>
            <TabPanel><TabContent><RegularSchedule sch={sch} maxDisplayedItems={maxDisplayedItems} /></TabContent></TabPanel>
            <TabPanel><TabContent><BankaraSchedule sch={sch} maxDisplayedItems={maxDisplayedItems} /></TabContent></TabPanel>
            <TabPanel><TabContent><XSchedule sch={sch} maxDisplayedItems={maxDisplayedItems} /></TabContent></TabPanel>
            <TabPanel><TabContent><EventSchedule sch={sch} /></TabContent></TabPanel>
            <TabPanel><TabContent><FestSchedule sch={sch} festOpSch={festOpSch} maxDisplayedItems={maxDisplayedItems} /></TabContent></TabPanel>
            <TabPanel><TabContent><SRunSchedule salmonSch={salmonSch} /></TabContent></TabPanel>
        </TabPanels>
    </TabGroup>
);

export default MatchTabs;