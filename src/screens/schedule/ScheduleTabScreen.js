import React from 'react';
import DatabaseTypes from '../../types/Database';
import ScheduleTabLayout from './ScheduleLayout';

import withAppContext from '../../app/Context';
import { sortByProp, splitByProp } from '../../utils/Lists';
import { atStartOfDay, getCurrentDateString } from '../../utils/Time';


class ScheduleTabScreen extends React.Component {

    static propTypes = {
        database: DatabaseTypes
    };

    getEvents = () => {
        const events = this.props.database.events;
        return Object.keys(events).map(key => events[key]);
    };

    setStringDate = event => {
        const isUndefined = event.date !== undefined;
        const date = isUndefined ? event.date: atStartOfDay(event.start);
        const dateString = getCurrentDateString(date);
        return { ...event, dateString: dateString };
    };

    formatEvents = () => {
        let events = this.getEvents();
        events = events.map(this.setStringDate);
        events = sortByProp('start', events);
        return splitByProp('dateString', events);
    };

    render() {
        return <ScheduleTabLayout {...this.props} formattedEvents={this.formatEvents()}/>;
    }

}

export default withAppContext(ScheduleTabScreen);
