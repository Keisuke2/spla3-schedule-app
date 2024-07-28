import React from 'react';
import PropTypes from 'prop-types';
import { TabPanels, TabPanel } from '@headlessui/react';
import { tabConfig } from 'components/tabs/TabConfig';
import TabContent from 'components/tabs/TabContent';

const maxDisplayedItems = 5;

const TabContents = ({ sch, festOpSch, salmonSch }) => {
    return (
        <TabPanels>
            {tabConfig.map((tab) => (
                <TabPanel key={tab.id}>
                    {tab.id === 'fest' && (
                        <TabContent data={festOpSch}>
                            <tab.component
                                sch={sch}
                                festOpSch={festOpSch}
                                maxDisplayedItems={maxDisplayedItems}
                            />
                        </TabContent>
                    )}
                    {tab.id === 'salmonrun' && (
                        <TabContent data={salmonSch}>
                            <tab.component
                                sch={sch}
                                salmonSch={salmonSch}
                                maxDisplayedItems={maxDisplayedItems}
                            />
                        </TabContent>
                    )}
                    {tab.id !== 'fest' && tab.id !== 'salmonrun' && (
                        <TabContent data={sch}>
                            <tab.component
                                sch={sch}
                                maxDisplayedItems={maxDisplayedItems}
                            />
                        </TabContent>
                    )}
                </TabPanel>
            ))}
        </TabPanels>
    );
};

TabContents.propTypes = {
    sch: PropTypes.array.isRequired, // 修正: 必須に変更
    festOpSch: PropTypes.array, // 修正: 必須ではない
    salmonSch: PropTypes.array, // 修正: 必須ではない
};

export default TabContents;