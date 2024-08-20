import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabList, Tab } from '@headlessui/react';
import styles from 'styles/Tab.module.css';

const Button = ({ src, alt, children, isActive, onClick }) => (
    <Tab className={`${styles.tab} ${isActive ? styles.active : ''}`} onClick={onClick}>
        <img src={src} alt={alt} />
        {children}
    </Tab>
);

Button.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    children: PropTypes.node,
    isActive: PropTypes.bool,
    onClick: PropTypes.func
};

const BUttonContainer = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <TabList className={styles.tabs}>
            <Button
                src='/images/button/regular.png'
                alt='レギュラーマッチのアイコン'
                isActive={activeTab === 0}
                onClick={() => setActiveTab(0)}
            > <p className={styles.tabName}>レギュラーマッチ</p>
            </Button>
            <Button
                src='/images/button/bankara.png'
                alt='バンカラマッチのアイコン'
                isActive={activeTab === 1}
                onClick={() => setActiveTab(1)}
            > <p className={styles.tabName}>バンカラマッチ</p>
            </Button>
            <Button
                src='/images/button/x.png'
                alt='Xマッチのアイコン'
                isActive={activeTab === 2}
                onClick={() => setActiveTab(2)}
            > <p className={styles.tabName}>Xマッチ</p>
            </Button>
            <Button
                src='/images/button/event.png'
                alt='イベントマッチのアイコン'
                isActive={activeTab === 3}
                onClick={() => setActiveTab(3)}
            > <p className={styles.tabName}>イベントマッチ</p>
            </Button>
            <Button
                src='/images/button/fest.png'
                alt='フェスマッチのアイコン'
                isActive={activeTab === 4}
                onClick={() => setActiveTab(4)}
            > <p className={styles.tabName}>フェスマッチ</p>
            </Button>
            <Button
                src='/images/button/salmonrun.png'
                alt='サーモンランのアイコン'
                isActive={activeTab === 5}
                onClick={() => setActiveTab(5)}
            > <p className={styles.tabName}>サーモンラン</p>
            </Button>
        </TabList>
    );
};

BUttonContainer.propTypes = {
    sch: PropTypes.object.isRequired,
    festOpSch: PropTypes.object.isRequired,
    salmonSch: PropTypes.object.isRequired
};

export default BUttonContainer;