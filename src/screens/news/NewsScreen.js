import React from 'react';
import PropTypes from 'prop-types';
import NewsLayout from './NewsLayout';


export default class NewsScreen extends React.Component {

    static propTypes = {
        navigation: PropTypes.object
    };

    render() {
        return <NewsLayout {...this.props}/>;
    }

}
