import React from 'react';
import PropTypes from 'prop-types';
import { TabGroup } from '@headlessui/react';
import TabContents from 'components/tabs/Content';
import TabButtons from 'components/tabs/Button';

const ScheduleTabs = ({ sch, festOpSch, salmonSch }) => {
    return (
        <TabGroup>
            <TabButtons sch={sch} festOpSch={festOpSch} salmonSch={salmonSch} />
            <TabContents sch={sch} festOpSch={festOpSch} salmonSch={salmonSch} />
        </TabGroup>
    );
};

ScheduleTabs.propTypes = {
    sch: PropTypes.object.isRequired,
    festOpSch: PropTypes.object.isRequired,
    salmonSch: PropTypes.object.isRequired
};

export default ScheduleTabs;