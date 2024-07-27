import React, { useState } from 'react';
import styles from 'styles/Home.module.css';
import { TabGroup, TabList, TabPanels, TabPanel, Tab } from '@headlessui/react';
import RegularSchedule from 'components/Regular';
import BankaraSchedule from 'components/Bankara';
import XSchedule from 'components/X';
import EventSchedule from 'components/Event';
import FestSchedule from 'components/Fest';
import SRunSchedule from 'components/SalmonRun';

const TabItem = ({ src, alt, children, isActive, onClick }) => (
    <Tab className={`${styles.tab} ${isActive ? styles.active : ''}`} onClick={onClick}>
        <img src={src} alt={alt} />
        {children}
    </Tab>
);

const TabContent = ({ children }) => {
    return <div className={styles.flex}>{children}</div>;
};

const maxDisplayedItems = 5;

const MatchTabs = ({ sch, festOpSch, salmonSch }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <TabGroup>
            <TabList className={styles.tabs}>
                <TabItem
                    // src='/images/button/regular.png'
                    // alt='レギュラーマッチのアイコン'
                    isActive={activeTab === 0}
                    onClick={() => setActiveTab(0)}
                >
                    レギュラーマッチ
                </TabItem>
                <TabItem
                    // src='/images/button/bankara.png'
                    // alt='バンカラマッチのアイコン'
                    isActive={activeTab === 1}
                    onClick={() => setActiveTab(1)}
                >
                    バンカラマッチ
                </TabItem>
                <TabItem
                    // src='/images/button/x.png'
                    // alt='Xマッチのアイコン'
                    isActive={activeTab === 2}
                    onClick={() => setActiveTab(2)}
                >
                    Xマッチ
                </TabItem>
                <TabItem
                    // src='/images/button/event.png'
                    // alt='イベントマッチのアイコン'
                    isActive={activeTab === 3}
                    onClick={() => setActiveTab(3)}
                >
                    イベントマッチ
                </TabItem>
                <TabItem
                    // src='/images/button/fest.png'
                    // alt='フェスマッチのアイコン'
                    isActive={activeTab === 4}
                    onClick={() => setActiveTab(4)}
                >
                    フェスマッチ
                </TabItem>
                <TabItem
                    // src='/images/button/salmonrun.png'
                    // alt='サーモンランのアイコン'
                    isActive={activeTab === 5}
                    onClick={() => setActiveTab(5)}
                >
                    サーモンラン
                </TabItem>
            </TabList>

            <TabPanels>
                <TabPanel><TabContent>{<RegularSchedule sch={sch} maxDisplayedItems={maxDisplayedItems} />}</TabContent></TabPanel>
                <TabPanel><TabContent>{<BankaraSchedule sch={sch} maxDisplayedItems={maxDisplayedItems} />}</TabContent></TabPanel>
                <TabPanel><TabContent>{<XSchedule sch={sch} maxDisplayedItems={maxDisplayedItems} />}</TabContent></TabPanel>
                <TabPanel><TabContent>{<EventSchedule sch={sch} />}</TabContent></TabPanel>
                <TabPanel><TabContent>{<FestSchedule sch={sch} festOpSch={festOpSch} maxDisplayedItems={maxDisplayedItems} />}</TabContent></TabPanel>
                <TabPanel><TabContent>{<SRunSchedule salmonSch={salmonSch} />}</TabContent></TabPanel>
            </TabPanels>
        </TabGroup>
    );
};

export default MatchTabs;