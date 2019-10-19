// Core 
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Locals
import Decoration from './Sideway';
import Enrolled from '../states/Enrolled';
import Favorite from '../states/Favorite';

import Theme from '../../../app/Theme';
import Sample from '../../../samples/Event';
import Colors from '../../../colors/Events';

// Utils
import { EventTypes } from '../../../app/Types';
import { getLapse } from '../../../scripts/Time';
import { opacityFor } from '../../../scripts/Color';


const StyledLabel = styled(Text)`
    text-transform: uppercase;
`

const EventLabel = ({ color, event, eventype }) =>
    <StyledLabel style={{ color: color }}>
        {`${eventype} ${event.id}`}
    </StyledLabel>


const StyledTime = styled(Text)`
    font-size: 10;
    font-weight: 300;
    text-transform: uppercase;
`

const EventTime = ({ darkMode, event }) =>
    <StyledTime numberOfLines={1} style={{ color: opacityFor(Theme.fontOpacity, darkMode) }}>
        {getLapse(event.start, event.end)}
    </StyledTime>

const StyledHeader = styled(View)`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 16px;
    margin-bottom: 4px;
`

const Header = ({ color, darkMode, event, eventype }) =>
    <StyledHeader>
        <EventLabel event={event} color={color} eventype={eventype} />
        <EventTime darkMode={darkMode} event={event} />
    </StyledHeader>

const StyledTitle = styled(Text)`
    font-size: 14;
    margin-right: 16px;
    margin-bottom: 4px;
`

const Center = ({ darkMode, event }) =>
    <StyledTitle numberOfLines={2} style={{ color: darkMode ? '#FFF' : '#000' }}>
        {event.title}
    </StyledTitle>

const StyledLocation = styled(View)`
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-bottom: 4px;
`

const EventLocation = ({ color, event }) =>
    <StyledLocation>
        <FontAwesome color={color} name={'map-marker'} size={14} style={{ marginEnd: 8 }} />
        <Text style={{ color }}> {event.location} </Text>
    </StyledLocation>


const EventButton = props => props.eventype === 'TALLER' ?
    <Enrolled darkMode={props.darkMode} {...props} /> :
    <Favorite darkMode={props.darkMode} {...props} />

const StyledReadMore = styled(View)`
    flex: 1;
    display: flex;
`

const ReadMore = props =>
    <StyledReadMore>
        <EventLocation event={props.event} color={opacityFor(Theme.fontOpacity, props.darkMode)} />
        <Text style={{ color: '#448AFF', marginStart: -4 }}> Leer más </Text>
    </StyledReadMore>

const StyledFooter = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-right: 8px;
`

const Footer = props =>
    <StyledFooter>
        <ReadMore {...props} />
        <EventButton {...props} />
    </StyledFooter>

const StyledContent = styled(View)`
    display: flex;
    flex: 1;
    padding: 16px 0px 16px 0px;
`

const EventContent = props =>
    <StyledContent>
        <Header {...props} />
        <Center {...props} />
        <Footer {...props} />
    </StyledContent>

const StyledEvent = styled(View)`
    display: flex;
    flex-direction: row;
`
const EventLayout = props =>
    <StyledEvent style={[props.style, { backgroundColor: props.background }]}>
        <View style={{ backgroundColor: props.color, width: 4 }} />
        <Decoration {...props} active={props.isEven} />
        <EventContent {...props} />
    </StyledEvent>

class Event extends PureComponent {


    state = {
        isActive: false
    }

    toggleActive = () => this.setState(state => {
        return { isActive: !state.isActive }
    })

    render() {

        const { darkMode, isEven, eventype } = this.props; 
        const color = Colors[eventype];
        const background = opacityFor(Theme.itemOpacity, darkMode, isEven);

        return <EventLayout
            {...this.props}
            color={color}
            eventype={eventype}
            background={background}
            isActive={this.state.isActive}
            toggleActive={this.toggleActive}
        />

    }

}

Event.propTypes = {
    darkMode: PropTypes.bool,
    event: EventTypes,
    isEven: PropTypes.bool,
    style: PropTypes.object
}

Event.defaultProps = {
    darkMode: false,
    event: Sample,
    isEven: false,
    style: {}
}

export default Event;