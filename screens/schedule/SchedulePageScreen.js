import React from 'react';
import PropTypes from 'prop-types';
import EventTypes from '../../types/Event';
import SchedulePageLayout from './SchedulePageLayout';

import withAppContext from '../../app/Context';
import { sortByProp } from '../../utils/Lists';
import { getDifferenceInMinutes } from '../../utils/Time';


class ScheduleTabScreen extends React.Component {

    static propTypes = {
        events: PropTypes.arrayOf(EventTypes)
    };

    groupEvents = () => {
        let events = sortByProp('start', this.props.events);
        return events.reduce(this.groupReducer, []);
    };

    groupReducer = (groups, event) => {
        if (groups.length === 0)
            this.groupExistent(groups, event);
        else
            this.groupNotExistent(groups, event);
        return groups;
    };

    groupExistent = (groups, event) => {
        const time = { start: event.start, end: event.end };
        groups.push({group: time, children: [event]});
    };

    groupNotExistent = (groups, event) => {
        let group = groups[groups.length-1].group;
        let children = groups[groups.length-1].children;
        let lastChild = children[children.length-1];
        if(getDifferenceInMinutes(lastChild.start, event.start) === 0){
            const isEnd = lastChild.end > event.start;
            group.end = isEnd ? lastChild.end : event.start;
            children.push(event);
        }
        else this.groupExistent(groups, event);
    };

    render() {
        return <SchedulePageLayout {...this.props} eventGroups={this.groupEvents()}/>;
    }

}

export default withAppContext(ScheduleTabScreen);
