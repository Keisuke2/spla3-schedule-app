import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabList, Tab } from '@headlessui/react';
import styles from 'styles/Button.module.css';

const Button = ({ src, alt, children, isActive, onClick }) => (
    <Tab className={`${styles.button} ${isActive ? styles.active : ''}`} onClick={onClick}>
        <img className={styles.buttonImage} src={src} alt={alt} />
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

const ButtonContainer = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <TabList className={styles.buttonContainer}>
            <Button
                src='/images/button/regular.png'
                alt='レギュラーマッチのアイコン'
                isActive={activeTab === 0}
                onClick={() => setActiveTab(0)}
            > <p className={styles.buttonName}>レギュラーマッチ</p>
            </Button>
            <Button
                src='/images/button/bankara.png'
                alt='バンカラマッチのアイコン'
                isActive={activeTab === 1}
                onClick={() => setActiveTab(1)}
            > <p className={styles.buttonName}>バンカラマッチ</p>
            </Button>
            <Button
                src='/images/button/x.png'
                alt='Xマッチのアイコン'
                isActive={activeTab === 2}
                onClick={() => setActiveTab(2)}
            > <p className={styles.buttonName}>Xマッチ</p>
            </Button>
            <Button
                src='/images/button/event.png'
                alt='イベントマッチのアイコン'
                isActive={activeTab === 3}
                onClick={() => setActiveTab(3)}
            > <p className={styles.buttonName}>イベントマッチ</p>
            </Button>
            <Button
                src='/images/button/fest.png'
                alt='フェスマッチのアイコン'
                isActive={activeTab === 4}
                onClick={() => setActiveTab(4)}
            > <p className={styles.buttonName}>フェスマッチ</p>
            </Button>
            <Button
                src='/images/button/salmonrun.png'
                alt='サーモンランのアイコン'
                isActive={activeTab === 5}
                onClick={() => setActiveTab(5)}
            > <p className={styles.buttonName}>サーモンラン</p>
            </Button>
        </TabList>
    );
};

ButtonContainer.propTypes = {
    sch: PropTypes.object.isRequired,
    festOpSch: PropTypes.object.isRequired,
    salmonSch: PropTypes.object.isRequired
};

export default ButtonContainer;