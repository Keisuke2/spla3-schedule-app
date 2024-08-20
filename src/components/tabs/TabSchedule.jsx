import React from 'react';
import PropTypes from 'prop-types';
import { TabGroup } from '@headlessui/react';
import ScheduleContainer from 'components/tabs/Content';
import BUttonContainer from 'components/tabs/Button';

const ContentsContainer = ({ sch, festOpSch, salmonSch }) => {
    return (
        <TabGroup>
            <BUttonContainer sch={sch} festOpSch={festOpSch} salmonSch={salmonSch} />
            <ScheduleContainer sch={sch} festOpSch={festOpSch} salmonSch={salmonSch} />
        </TabGroup>
    );
};

ContentsContainer.propTypes = {
    sch: PropTypes.object.isRequired,
    festOpSch: PropTypes.object.isRequired,
    salmonSch: PropTypes.object.isRequired
};

export default ContentsContainer;