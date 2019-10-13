// Core 
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { Text, View, Animated, Easing } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

// Locals
import Decoration from './Decoration';
import { EventTypes } from '../../app/Types';
import { getLapse } from '../../scripts/Time';
import Favorite from './Favorite';
import Enrolled from './Enrolled';

// Constants
const LIGHT_TRANSPARENT = 'rgba(0, 0, 0, 0.6)';
const DARK_TRANSPARENT = 'rgba(255, 255, 255, 0.6)';

const EVENT_COLORS = {
    'TALLER': '#1976D2',
    'FERIA': '#F44336',
    'PONENCIA': '#4CAF50',
    'CONFERENCIA': '#9C27B0'
};

const getEventColor = eventype => {
    return EVENT_COLORS[eventype];
}

const getOpacity = (type, darkMode) => {
    const opacity = type === 'odd' ? 0.03 : 0;
    const contrast = darkMode ? 255 : 0;
    return `rgba(${contrast}, ${contrast}, ${contrast}, ${opacity})`
}

const StyledLabel = styled(Text)`
    textTransform: uppercase;
`

const EventLabel = ({ color, event, eventype }) =>
    <StyledLabel style={{ color: color }}>
        {`${eventype} ${event.id}`}
    </StyledLabel>


const StyledTime = styled(Text)`
    fontSize: 10;
    fontWeight: 300;
    textTransform: uppercase;
`

const EventTime = ({ darkMode, event }) =>
    <StyledTime numberOfLines={1} style={{ color: darkMode ? DARK_TRANSPARENT : LIGHT_TRANSPARENT }}>
        {getLapse(event.start, event.end)}
    </StyledTime>

const StyledHeader = styled(View)`
    alignItems: center;
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    marginEnd: 16px;
    marginBottom: 4px;
`

const EventHeader = ({ color, darkMode, event, eventype }) =>
    <StyledHeader>
        <EventLabel event={event} color={color} eventype={eventype} />
        <EventTime darkMode={darkMode} event={event} />
    </StyledHeader>

const StyledTitle = styled(Text)`
    fontSize: 14;
    marginEnd: 16px;
    marginBottom: 4px;
`

const EventTitle = ({ darkMode, event }) =>
    <StyledTitle numberOfLines={2} style={{ color: darkMode ? '#FFF' : '#000' }}>
        {event.title}
    </StyledTitle>

const StyledLocation = styled(View)`
    alignItems: center;
    display: flex;
    flexDirection: row;
    marginBottom: 4px;
`

const EventLocation = ({ color, event }) =>
    <StyledLocation>
        <FontAwesome color={color} name={'map-marker'} size={14} style={{ marginEnd: 8 }} />
        <Text style={{ color }}> {event.location} </Text>
    </StyledLocation>


const EventButton = props => props.eventype === 'TALLER' ?
    <Enrolled darkMode={props.darkMode} {...props} /> :
    <Favorite darkMode={props.darkMode} {...props} />

const StyledFooter = styled(View)`
    display: flex;
    flexDirection: row;
    alignItems: flex-end;
    marginEnd: 8px;
`

const EventFooter = ({ darkMode, event, ...props }) =>
    <StyledFooter>
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <EventLocation event={event} color={darkMode ? DARK_TRANSPARENT : LIGHT_TRANSPARENT} />
            <Text style={{ color: '#448AFF', marginStart: -4 }}> Leer más </Text>
        </View>
        <EventButton darkMode={darkMode} {...props} />
    </StyledFooter>

const StyledContent = styled(View)`
    display: flex;
    flex: 1;
    flexDirection: column;
    padding: 16px 0px 16px 0px;
`

const EventContent = ({ event, color, darkMode, ...props }) =>
    <StyledContent>
        <EventHeader color={color} darkMode={darkMode} event={event} eventype={props.eventype} />
        <EventTitle event={event} darkMode={darkMode} />
        <EventFooter darkMode={darkMode} event={event} {...props} />
    </StyledContent>

const StyledEvent = styled(View)`
    display: flex;
    flexDirection: row;
`
const EventLayout = props =>
    <StyledEvent style={[props.style, { backgroundColor: props.background }]}>
        <View style={{ backgroundColor: props.color, width: 4 }} />
        <Decoration {...props} active={props.type === 'odd'} />
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
        const eventype = this.props.eventype;
        const color = getEventColor(eventype);
        const background = getOpacity(this.props.type, this.props.darkMode);
        return <EventLayout
            {...this.props}
            background={background}
            color={color}
            eventype={eventype}
            isActive={this.state.isActive}
            toggleActive={this.toggleActive}
        />
    }

}

Event.propTypes = {
    darkMode: PropTypes.bool,
    event: EventTypes,
    eventype: PropTypes.oneOf(['TALLER', 'FERIA', 'PONENCIA', 'CONFERENCIA']),
    type: PropTypes.oneOf(['odd', 'even']),
    style: PropTypes.object
}

Event.defaultProps = {
    darkMode: false,
    event: {
        brief: 'La presente investigación sobre las competencias profesionales de profesores de matemática, llevado a cabo durante la última década, está caracterizada por diferentes acercamientos teóricos sobre las competencias profesionales de conceptualización y evaluación del profesor; llamadas aproximaciones cognitivas versus situadas. Construida sobre la internacional IEA “Teacher Education and Development Study in Mathematics” (TEDS-M) y su estudio siguiente TEDS-FU, la lectura compara aproximaciones cognitivas y situadas sobre competencias profesionales de profesores. En TEDS-FU el marco de TEDS-M ha sido enriquecido por una orientación situada incluyendo el marco de novato-experto y el concepto de notar como acercamientos teóricos sobre el análisis de situaciones de clase. Correspondientemente, los instrumentos de evaluación fueron extendidos utilizando video-viñetas para evaluar la percepción de los profesores, competencias de interpretación y toma de decisiones en adición a pruebas de conocimiento cognitivo orientado. La lectura discute los diferentes tipos de marcos teóricos y las consecuencias para los métodos de evaluación, las fortalezas y debilidades de ambos enfoques.  Además, conectar los resultados de TEDS-FU con TEDS-M permite una visión integral de la estructura y el desarrollo de competencias profesionales de profesores de matemática, la compleja interacción entre las diferentes facetas de competencias de los profesores y la alta relevancia de la práctica de enseñanza para el desarrollo de esas competencias. Especialmente se presentarán en detalle los análisis sobre la naturaleza de las competencias de los docentes. En general, los análisis muestran por un lado que ambos acercamientos –cognitivos y situados – son necesarios para una descripción comprensión de las competencias profesionales de los profesores. Y por otro lado, se muestra que ambos acercamientos pueden ser integrados de manera productiva.',
        end: 1544033400000,
        eventype: 'CONFERENCIA',
        favorites: 12,
        id: 'C01',
        isActive: true,
        key: '-A9D8F3GE5DFVT8',
        location: 'Centro de las Artes',
        people: ['Julian Salinas', 'Brandon Dinarte'],
        start: 1544024400000,
        title: 'Investigación basada en videos para estudios comparativos y transferencia de metodologías de una cultura a otra',
    },
    eventype: 'CONFERENCIA',
    type: 'odd',
    style: {}
}

export default Event;