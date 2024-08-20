import React from 'react';
import PropTypes from 'prop-types';
import { TabGroup } from '@headlessui/react';
import ScheduleContainer from 'components/home/Schedule';
import ButtonContainer from 'components/home/Button';

const ContentsContainer = ({ sch, festOpSch, salmonSch }) => {
    return (
        <TabGroup>
            <ButtonContainer sch={sch} festOpSch={festOpSch} salmonSch={salmonSch} />
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